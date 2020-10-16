# Copyright (c) Microsoft Corporation
# Licensed under the MIT License.

"""Defines the Explanation dashboard class."""

from ._internal.constants import ErrorAnalysisDashboardInterface, WidgetRequestResponseConstants
from ..common.error_handling import _format_exception
from scipy.sparse import issparse
import numpy as np
import pandas as pd
from sklearn import tree
from sklearn.tree import _tree
from enum import Enum


class TreeSide(str, Enum):
    """Provide model task constants. Can be 'classification', 'regression', or 'unknown'.

    By default the model domain is inferred if 'unknown', but this can be overridden if you specify
    'classification' or 'regression'.
    """

    RightChild = 'RightChild'
    LeftChild = 'LeftChild'
    Unknown = 'Unknown'


class ErrorAnalysisDashboardInput:
    """Represents an explanation as all the pieces that can be serialized and passed to JavaScript.

    :param explanation: An object that represents an explanation.
    :type explanation: ExplanationMixin
    :param model: An object that represents a model. It is assumed that for the classification case
        it has a method of predict_proba() returning the prediction probabilities for each
        class and for the regression case a method of predict() returning the prediction value.
    :type model: object
    :param dataset: A matrix of feature vector examples (# examples x # features), the same samples
        used to build the explanation. Will overwrite any set on explanation object already
    :type dataset: numpy.array or list[][]
    :param true_y: The true labels for the provided dataset. Will overwrite any set on
        explanation object already.
    :type true_y: numpy.array or list[]
    :param classes: The class names.
    :type classes: numpy.array or list[]
    :param features: Feature names.
    :type features: numpy.array or list[]
    """

    def __init__(
            self,
            explanation,
            model=None,
            dataset=None,
            true_y=None,
            classes=None,
            features=None,
            predict_url=None,
            tree_url=None,
            local_url=None,
            locale=None):
        """Initialize the Explanation Dashboard Input.

        :param explanation: An object that represents an explanation.
        :type explanation: ExplanationMixin
        :param model: An object that represents a model. It is assumed that for the classification case
            it has a method of predict_proba() returning the prediction probabilities for each
            class and for the regression case a method of predict() returning the prediction value.
        :type model: object
        :param dataset: A matrix of feature vector examples (# examples x # features), the same samples
            used to build the explanation. Will overwrite any set on explanation object already
        :type dataset: numpy.array or list[][]
        :param true_y: The true labels for the provided dataset. Will overwrite any set on
            explanation object already.
        :type true_y: numpy.array or list[]
        :param classes: The class names.
        :type classes: numpy.array or list[]
        :param features: Feature names.
        :type features: numpy.array or list[]
        """
        self._model = model
        self._dataset = dataset
        self._true_y = true_y
        self._is_classifier = model is not None and hasattr(model, 'predict_proba') and \
            model.predict_proba is not None
        self._dataframeColumns = None
        self.dashboard_input = {}
        self._predict_url = predict_url
        self._tree_url = tree_url
        self._local_url = local_url
        # List of explanations, key of explanation type is "explanation_type"
        self._mli_explanations = explanation.data(-1)["mli"]
        local_explanation = self._find_first_explanation(ErrorAnalysisDashboardInterface.MLI_LOCAL_EXPLANATION_KEY)
        global_explanation = self._find_first_explanation(ErrorAnalysisDashboardInterface.MLI_GLOBAL_EXPLANATION_KEY)
        ebm_explanation = self._find_first_explanation(ErrorAnalysisDashboardInterface.MLI_EBM_GLOBAL_EXPLANATION_KEY)
        dataset_explanation = self._find_first_explanation(ErrorAnalysisDashboardInterface.MLI_EXPLANATION_DATASET_KEY)

        predicted_y = None
        feature_length = None
        if dataset_explanation is not None:
            if dataset is None:
                dataset = dataset_explanation[ErrorAnalysisDashboardInterface.MLI_DATASET_X_KEY]
            if true_y is None:
                true_y = dataset_explanation[ErrorAnalysisDashboardInterface.MLI_DATASET_Y_KEY]

        if isinstance(dataset, pd.DataFrame) and hasattr(dataset, 'columns'):
            self._dataframeColumns = dataset.columns
        try:
            list_dataset = self._convert_to_list(dataset)
        except Exception as ex:
            ex_str = _format_exception(ex)
            raise ValueError("Unsupported dataset type, inner error: {}".format(ex_str))
        if dataset is not None and model is not None:
            try:
                predicted_y = model.predict(dataset)
            except Exception as ex:
                ex_str = _format_exception(ex)
                msg = "Model does not support predict method for given dataset type, inner error: {}".format(ex_str)
                raise ValueError(msg)
            try:
                predicted_y = self._convert_to_list(predicted_y)
            except Exception as ex:
                ex_str = _format_exception(ex)
                raise ValueError("Model prediction output of unsupported type, inner error: {}".format(ex_str))
        if predicted_y is not None:
            self.dashboard_input[ErrorAnalysisDashboardInterface.PREDICTED_Y] = predicted_y
        if list_dataset is not None:
            row_length, feature_length = np.shape(list_dataset)
            if row_length > 100000:
                raise ValueError("Exceeds maximum number of rows for visualization (100000)")
            if feature_length > 1000:
                raise ValueError("Exceeds maximum number of features for visualization (1000)")
            self.dashboard_input[ErrorAnalysisDashboardInterface.TRAINING_DATA] = list_dataset
            self.dashboard_input[ErrorAnalysisDashboardInterface.IS_CLASSIFIER] = self._is_classifier

        local_dim = None

        if true_y is not None and len(true_y) == row_length:
            self.dashboard_input[ErrorAnalysisDashboardInterface.TRUE_Y] = self._convert_to_list(true_y)

        if local_explanation is not None:
            try:
                local_explanation["scores"] = self._convert_to_list(local_explanation["scores"])
                local_explanation["intercept"] = self._convert_to_list(local_explanation["intercept"])
                # We can ignore perf explanation data.  Note if it is added back at any point,
                # the numpy values will need to be converted to python, otherwise serialization fails.
                local_explanation["perf"] = None
                self.dashboard_input[ErrorAnalysisDashboardInterface.LOCAL_EXPLANATIONS] = local_explanation
            except Exception as ex:
                ex_str = _format_exception(ex)
                raise ValueError("Unsupported local explanation type, inner error: {}".format(ex_str))
            if list_dataset is not None:
                local_dim = np.shape(local_explanation["scores"])
                if len(local_dim) != 2 and len(local_dim) != 3:
                    raise ValueError("Local explanation expected to be a 2D or 3D list")
                if len(local_dim) == 2 and (local_dim[1] != feature_length or local_dim[0] != row_length):
                    raise ValueError("Shape mismatch: local explanation length differs from dataset")
                if len(local_dim) == 3 and (local_dim[2] != feature_length or local_dim[1] != row_length):
                    raise ValueError("Shape mismatch: local explanation length differs from dataset")
        if local_explanation is None and global_explanation is not None:
            try:
                global_explanation["scores"] = self._convert_to_list(global_explanation["scores"])
                if 'intercept' in global_explanation:
                    global_explanation["intercept"] = self._convert_to_list(global_explanation["intercept"])
                self.dashboard_input[ErrorAnalysisDashboardInterface.GLOBAL_EXPLANATION] = global_explanation
            except Exception as ex:
                ex_str = _format_exception(ex)
                raise ValueError("Unsupported global explanation type, inner error: {}".format(ex_str))
        if ebm_explanation is not None:
            try:
                self.dashboard_input[ErrorAnalysisDashboardInterface.EBM_EXPLANATION] = ebm_explanation
            except Exception as ex:
                ex_str = _format_exception(ex)
                raise ValueError("Unsupported ebm explanation type: {}".format(ex_str))

        if features is None and hasattr(explanation, 'features') and explanation.features is not None:
            features = explanation.features
        if features is not None:
            features = self._convert_to_list(features)
            if feature_length is not None and len(features) != feature_length:
                raise ValueError("Feature vector length mismatch: \
                    feature names length differs from local explanations dimension")
            self.dashboard_input[ErrorAnalysisDashboardInterface.FEATURE_NAMES] = features
        if classes is None and hasattr(explanation, 'classes') and explanation.classes is not None:
            classes = explanation.classes
        if classes is not None:
            classes = self._convert_to_list(classes)
            if local_dim is not None and len(classes) != local_dim[0]:
                raise ValueError("Class vector length mismatch: \
                    class names length differs from local explanations dimension")
            self.dashboard_input[ErrorAnalysisDashboardInterface.CLASS_NAMES] = classes
        if model is not None and hasattr(model, 'predict_proba') \
                and model.predict_proba is not None and dataset is not None:
            try:
                probability_y = model.predict_proba(dataset)
            except Exception as ex:
                ex_str = _format_exception(ex)
                raise ValueError("Model does not support predict_proba method for given dataset \
                    type, inner error: {}".format(ex_str))
            try:
                probability_y = self._convert_to_list(probability_y)
            except Exception as ex:
                ex_str = _format_exception(ex)
                raise ValueError("Model predict_proba output of unsupported type, inner error: {}".format(ex_str))
            self.dashboard_input[ErrorAnalysisDashboardInterface.PROBABILITY_Y] = probability_y
        if locale is not None:
            self.dashboard_input[ErrorAnalysisDashboardInterface.LOCALE] = locale

    def enable_predict_url(self):
        if self._model is not None:
            self.dashboard_input[ErrorAnalysisDashboardInterface.PREDICTION_URL] = self._predict_url
            self.dashboard_input[ErrorAnalysisDashboardInterface.TREE_URL] = self._tree_url
            self.dashboard_input[ErrorAnalysisDashboardInterface.LOCAL_URL] = self._local_url

    def debug_ml(self, features):
        try:
            # Fit a surrogate model on errors
            surrogate = tree.DecisionTreeClassifier(max_depth=3)
            diff = self._model.predict(self._dataset) != self._true_y
            feature_names = self.dashboard_input[ErrorAnalysisDashboardInterface.FEATURE_NAMES]
            indexes = []
            for feature in features:
                print(" feature: " + feature + " index: " + str(feature_names.index(feature)))
                indexes.append(feature_names.index(feature))
            print("feature_names: ")
            print(feature_names)
            print("selected features: ")
            print(features)
            print("indexes: ")
            print(indexes)
            dataset_sub_features = self._dataset[:, indexes]
            print("dataset_sub_features: ")
            print(dataset_sub_features)
            dataset_sub_feature_names = np.array(feature_names)[np.array(indexes)]
            surrogate.fit(dataset_sub_features, diff)
            json_tree = self.traverse(surrogate.tree_, 0, [], dataset_sub_feature_names)
            print("json_tree: ")
            print(json_tree)
            return {
                WidgetRequestResponseConstants.DATA: json_tree
            }
        except Exception as e:
            print(e)
            return {
                WidgetRequestResponseConstants.ERROR: "Failed to generate json tree representation",
                WidgetRequestResponseConstants.DATA: []
            }

    def traverse(self, tree, nodeid, json, feature_names, parent=None, side=TreeSide.Unknown):
        children_left = tree.children_left[nodeid]
        children_right = tree.children_right[nodeid]

        # write current node to json
        json = self.node_to_json(tree, nodeid, json, feature_names, parent, side)

        # write children to json
        if children_left != _tree.TREE_LEAF:
            json = self.traverse(tree, children_left, json, feature_names, nodeid, TreeSide.LeftChild)
            json = self.traverse(tree, children_right, json, feature_names, nodeid, TreeSide.RightChild)
        return json

    def node_to_json(self, tree, nodeid, json, feature_names, parent=None, side=TreeSide.Unknown):
        values = tree.value[nodeid][0]
        success = values[0]
        if len(values.shape) == 1 and values.shape[0] == 1:
            error = 0
        else:
            error = values[1]
        parent_node_name = None
        parent_condition = None
        if parent is not None:
            parent = int(parent)
            parent_node_name = feature_names[tree.feature[parent]]
            print("parent node name in node_to_json: ")
            print(parent_node_name)
            if side == TreeSide.RightChild:
                parent_condition = "{} <= {:.2f}".format(parent_node_name, float(tree.threshold[parent]))
            elif side == TreeSide.LeftChild:
                parent_condition = "{} > {:.2f}".format(parent_node_name, float(tree.threshold[parent]))
        json.append({
            "id": int(nodeid),
            "parentId": parent,
            "size": float(success + error),
            "success": float(success),
            "error": float(error),
            "nodeIndex": int(nodeid),
            "nodeName": feature_names[tree.feature[int(nodeid)]],
            "parentNodeName": parent_node_name,
            "pathFromRoot": "",
            "condition": parent_condition,
            "sourceRowKeyHash": "hashkey",
            "badFeaturesRowCount": 0,
        })
        return json

    def on_predict(self, data):
        try:
            if self._dataframeColumns is not None:
                data = pd.DataFrame(data, columns=self._dataframeColumns)
            if (self._is_classifier):
                prediction = self._convert_to_list(self._model.predict_proba(data))
            else:
                prediction = self._convert_to_list(self._model.predict(data))
            return {
                WidgetRequestResponseConstants.DATA: prediction
            }
        except Exception:
            return {
                WidgetRequestResponseConstants.ERROR: "Model threw exeption while predicting...",
                WidgetRequestResponseConstants.DATA: []
            }

    def _convert_to_list(self, array):
        if issparse(array):
            if array.shape[1] > 1000:
                raise ValueError("Exceeds maximum number of features for visualization (1000)")
            return array.toarray().tolist()
        if (isinstance(array, pd.DataFrame)):
            return array.values.tolist()
        if (isinstance(array, np.ndarray)):
            return array.tolist()
        return array

    def _find_first_explanation(self, key):
        new_array = [explanation for explanation
                     in self._mli_explanations
                     if explanation[ErrorAnalysisDashboardInterface.MLI_EXPLANATION_TYPE_KEY] == key]
        if len(new_array) > 0:
            return new_array[0]["value"]
        return None
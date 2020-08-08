module.exports = {
  selectPoint: "Seleccione un punto para ver su explicación local.",
  defaultClassNames: "Clase {0}",
  defaultFeatureNames: "{0} de la característica",
  absoluteAverage: "Promedio del valor absoluto",
  predictedClass: "Clase predicha",
  datasetExplorer: "Explorador de conjuntos de datos",
  dataExploration: "Exploración de conjuntos de datos",
  aggregateFeatureImportance: "Importancia de características agregadas",
  globalImportance: "Importancia global",
  explanationExploration: "Exploración de explicación",
  individualAndWhatIf:
    "Importancia de características individuales e hipótesis",
  summaryImportance: "Importancia resumida",
  featureImportance: "Importancia de la característica",
  featureImportanceOf: "Importancia de la característica: {0}",
  perturbationExploration: "Exploración de la perturbación",
  localFeatureImportance: "Importancia de la característica local",
  ice: "ICE",
  clearSelection: "Borrar selección",
  feature: "Característica:",
  intercept: "Interceptar",
  modelPerformance: "Rendimiento del modelo",
  ExplanationScatter: {
    dataLabel: "Datos: {0}",
    importanceLabel: "Importancia: {0}",
    predictedY: "Eje Y predicho",
    index: "Índice",
    dataGroupLabel: "Datos",
    output: "Salida",
    probabilityLabel: "Probabilidad: {0}",
    trueY: "Y verdadero",
    class: "clase: ",
    xValue: "Valor de X:",
    yValue: "Valor de Y:",
    colorValue: "Color:",
    count: "Recuento"
  },
  CrossClass: {
    label: "Ponderación entre clases:",
    info: "Información sobre el cálculo entre clases",
    overviewInfo:
      "Los modelos multiclase generan un vector de importancia de característica independiente para cada clase. El vector de importancia de la característica de cada clase muestra qué características han hecho que una clase sea más o menos probable. Puede seleccionar el modo en que la ponderación de los vectores de importancia de la característica por clase se resume en un único valor:",
    absoluteValInfo:
      "Promedio del valor absoluto: muestra la suma de la importancia de la característica en todas las clases posibles, dividida entre el número de clases.",
    predictedClassInfo:
      "Clase predicha: muestra el valor de importancia de la característica para una clase predicha de un punto determinado.",
    enumeratedClassInfo:
      "Nombres de la clase enumerada: solo muestra los valores de importancia de la característica de la clase especificada en todos los puntos de datos.",
    close: "Cerrar",
    crossClassWeights: "Niveles de importancia de varias clases"
  },
  AggregateImportance: {
    scaledFeatureValue: "Valor de característica escalado",
    low: "Baja",
    high: "Alta",
    featureLabel: "Característica: {0}",
    valueLabel: "Valor de la característica: {0}",
    importanceLabel: "Importancia: {0}",
    predictedClassTooltip: "Clase predicha: {0}",
    trueClassTooltip: "Clase verdadera: {0}",
    predictedOutputTooltip: "Resultado predicho: {0}",
    trueOutputTooltip: "Resultado verdadero: {0}",
    topKFeatures: "Características principales de K:",
    topKInfo: "Procedimiento para calcular los principales valores K",
    predictedValue: "Valor de predicción",
    predictedClass: "Clase predicha",
    trueValue: "Valor verdadero",
    trueClass: "Clase verdadera",
    noColor: "Ninguno",
    tooManyRows:
      "El conjunto de datos proporcionado es mayor de lo que admite este gráfico."
  },
  BarChart: {
    classLabel: "Clase: {0}",
    sortBy: "Ordenar por",
    noData: "Sin datos",
    absoluteGlobal: "Global absoluto",
    absoluteLocal: "Local absoluto",
    calculatingExplanation: "Calculando explicación"
  },
  IcePlot: {
    numericError: "Debe ser un valor numérico.",
    integerError: "Debe ser un entero.",
    prediction: "Predicción",
    predictedProbability: "Probabilidad predicha",
    predictionLabel: "Predicción: {0}",
    probabilityLabel: "Probabilidad: {0}",
    noModelError:
      "Proporcione un modelo de en el que se hayan ejecutado operaciones para explorar las predicciones en los trazados de ICE.",
    featurePickerLabel: "Característica:",
    minimumInputLabel: "Mínimo:",
    maximumInputLabel: "Máximo:",
    stepInputLabel: "Pasos:",
    loadingMessage: "Cargando datos...",
    submitPrompt: "Envíe un rango para ver un trazado de ICE.",
    topLevelErrorMessage: "Error en el parámetro",
    errorPrefix: "Se detectó un error: {0}"
  },
  PerturbationExploration: {
    loadingMessage: "Cargando...",
    perturbationLabel: "Perturbación:"
  },
  PredictionLabel: {
    predictedValueLabel: "Valor predicho: {0}",
    predictedClassLabel: "Clase predicha: {0}"
  },
  Violin: {
    groupNone: "Sin agrupar",
    groupPredicted: "Y predicho",
    groupTrue: "Y verdadero",
    groupBy: "Agrupar por"
  },
  FeatureImportanceWrapper: {
    chartType: "Tipo de gráfico:",
    violinText: "Violín",
    barText: "Barra",
    boxText: "Cuadro",
    beehiveText: "Swarm",
    globalImportanceExplanation:
      "La importancia de la característica global se calcula mediante el promedio del valor absoluto de la importancia de la característica de todos los puntos (normalización L1). ",
    multiclassImportanceAddendum:
      'Para el cálculo de la importancia de una característica para todas las clases se incluyen todos los puntos y no se utiliza ninguna ponderación diferencial. Por tanto, una característica con una gran importancia negativa para muchos puntos con una predicción de que no será de "clase A" aumentará considerablemente la importancia de la "clase A" de la característica.'
  },
  Filters: {
    equalComparison: "Igual que",
    greaterThanComparison: "Mayor que",
    greaterThanEqualToComparison: "Es mayor o igual que",
    lessThanComparison: "Menor que",
    lessThanEqualToComparison: "Es menor o igual que",
    inTheRangeOf: "En el intervalo:",
    categoricalIncludeValues: "Valores incluidos:",
    numericValue: "Valor",
    numericalComparison: "Operación",
    minimum: "Mínimo",
    maximum: "Máximo",
    min: "Mín.: {0}",
    max: "Máx.: {0}",
    uniqueValues: "número de valores únicos: {0}"
  },
  Columns: {
    regressionError: "Error de regresión",
    error: "Error",
    classificationOutcome: "Resultado de la clasificación",
    truePositive: "Verdadero positivo",
    trueNegative: "Verdadero negativo",
    falsePositive: "Falso positivo",
    falseNegative: "Falso negativo",
    dataset: "Conjunto de datos",
    predictedProbabilities: "Probabilidades de predicción",
    none: "Recuento"
  },
  WhatIf: {
    closeAriaLabel: "Cerrar",
    defaultCustomRootName: "Copia de la fila {0}",
    filterFeaturePlaceholder: "Buscar características"
  },
  Cohort: {
    cohort: "Cohorte",
    defaultLabel: "Todos los datos"
  },
  GlobalTab: {
    helperText:
      "Explore las principales características importantes K que afectan a las predicciones generales de su modelo (explicación global). Puede usar el control deslizante para mostrar los valores de la importancia de las características en orden descendente, así como seleccionar hasta tres cohortes para consultar los valores de importancia de las características en paralelo. Asimismo, puede hacer clic en cualquiera de las barras de características del gráfico para consultar el modo en el que los valores de la característica seleccionada afectan al modelo de predicción.",
    topAtoB: "Principales características: {0}-{1}",
    datasetCohorts: "Cohortes de conjunto de datos",
    legendHelpText:
      "Para activar o desactivar los cohortes en el trazado, haga clic en los elementos de la leyenda.",
    sortBy: "Ordenar por",
    viewDependencePlotFor: "Ver trazado de dependencias para:",
    datasetCohortSelector: "Seleccionar cohorte de un conjunto de datos",
    aggregateFeatureImportance: "Importancia de características agregadas",
    missingParameters:
      "Esta pestaña requiere que se proporcione el parámetro de importancia de la característica local.",
    weightOptions: "Niveles de importancia de las clases",
    dependencePlotTitle: "Trazados de dependencia",
    dependencePlotHelperText:
      "Este trazado de dependencia muestra la relación entre el valor de una característica y la importancia correspondiente de la característica en un cohorte.",
    dependencePlotFeatureSelectPlaceholder: "Seleccionar característica",
    datasetRequired:
      "Los trazados de dependencia requieren el conjunto de datos de evaluación y la matriz de importancia de características locales."
  },
  CohortBanner: {
    dataStatistics: "Estadísticas de datos",
    datapoints: "{0} puntos de datos",
    features: "{0} características",
    filters: "{0} filtros",
    binaryClassifier: "Clasificador de elementos binarios",
    regressor: "Regresor",
    multiclassClassifier: "Clasificador multiclase",
    datasetCohorts: "Cohortes de conjunto de datos",
    editCohort: "Editar cohorte",
    duplicateCohort: "Duplicar cohorte",
    addCohort: "Agregar cohorte",
    copy: " copia"
  },
  ModelPerformance: {
    helperText:
      "Evalúe el rendimiento de su modelo. Para ello, explore la distribución de los valores de predicción y los de las métricas de rendimiento del modelo. Asimismo, si quiere investigar el modelo con todavía mayor profundidad, consulte un análisis comparativo de su rendimiento en varios cohortes o subgrupos de su conjunto de datos. Seleccione los filtros pertinentes, junto con los valores X e Y, para segmentar dimensiones distintas. También puede seleccionar el icono de engranaje para cambiar el tipo de gráfico.",
    modelStatistics: "Estadísticas del modelo",
    cohortPickerLabel:
      "Seleccionar cohorte de un conjunto de datos para explorar",
    missingParameters:
      "Esta pestaña requiere que se proporcione la matriz de valores de predicción del modelo.",
    missingTrueY:
      "Las estadísticas de rendimiento del modelo requieren que se proporcionen los resultados verdaderos además de los previstos."
  },
  Charts: {
    yValue: "Valor Y",
    numberOfDatapoints: "Número de puntos de datos",
    xValue: "Valor X",
    rowIndex: "Índice de fila",
    featureImportance: "Importancia de característica",
    countTooltipPrefix: "Recuento: {0}",
    count: "Recuento",
    featurePrefix: "Característica",
    importancePrefix: "Importancia",
    cohort: "Cohorte",
    howToRead: "Cómo leer este gráfico"
  },
  DatasetExplorer: {
    helperText:
      "Explore las estadísticas del conjunto de datos seleccionando distintos filtros a lo largo de los ejes X, Y y de color para segmentar los datos en distintas dimensiones. Cree cohortes de conjunto de datos más arriba para analizar las estadísticas de conjunto de datos con filtros como los de resultados previstos, características de conjunto de datos y grupos de errores. Use el icono de engranaje situado en la esquina superior derecha del gráfico para cambiar los tipos de gráfico.",
    colorValue: "Valor de color",
    individualDatapoints: "Puntos de datos individuales",
    aggregatePlots: "Trazados agregados",
    chartType: "Tipo de gráfico",
    missingParameters:
      "Esta pestaña requiere que se proporcione un conjunto de datos de evaluación.",
    noColor: "Ninguno"
  },
  DependencePlot: {
    featureImportanceOf: "Importancia de la característica:",
    placeholder:
      "Haga clic en una característica del gráfico de barras para mostrar su trazado de dependencias."
  },
  WhatIfTab: {
    helperText:
      'Puede seleccionar un punto de datos haciendo clic en el trazado disperso para ver sus valores de importancia de característica local (explicación local) y el trazado de expectativa condicional individual (ICE) a continuación. Cree un punto de datos "What If" hipotético con el panel de la derecha para perturbar las características de un punto de datos conocido. Los valores de importancia de característica se basan en varias aproximaciones y no son la causa de las predicciones. Sin la solidez matemática estricta de la inferencia causal, no se recomienda a los usuarios que tomen decisiones reales basadas en esta herramienta.',
    panelPlaceholder:
      "Se necesita un modelo para efectuar predicciones para nuevos puntos de datos.",
    cohortPickerLabel:
      "Seleccionar cohorte de un conjunto de datos para explorar",
    scatterLegendText:
      "Para activar o desactivar los puntos de datos en el trazado, haga clic en los elementos de la leyenda.",
    realPoint: "Puntos de datos reales",
    noneSelectedYet: "Todavía no se ha seleccionado ninguno.",
    whatIfDatapoints: "Puntos de datos hipotéticos",
    noneCreatedYet: "Todavía no se ha creado ninguno.",
    showLabel: "Mostrar:",
    featureImportancePlot: "Trazado de la importancia de la característica",
    icePlot: "Trazado de expectativa condicional individual (ICE)",
    featureImportanceLackingParameters:
      "Especifique la importancia de las características locales para ver cómo afecta cada característica a las predicciones individuales.",
    featureImportanceGetStartedText:
      "Seleccione un punto para consultar la importancia de la característica.",
    iceLackingParameters:
      "Los trazados de ICE requieren un modelo de operaciones para poder realizar predicciones para los puntos de datos hipotéticos.",
    IceGetStartedText:
      "Seleccione un punto o cree uno hipotético para consultar los trazados de ICE.",
    whatIfDatapoint: "Punto de datos hipotético",
    whatIfHelpText:
      "Seleccione un punto en el trazado o indique manualmente un índice de puntos de datos conocido para alterarlo y guardarlo como hipotético.",
    indexLabel: "Índice de datos para alterar",
    rowLabel: "Fila {0}",
    whatIfNameLabel: "Nombre de punto de datos hipotético",
    featureValues: "Valores de característica",
    predictedClass: "Clase prevista: ",
    predictedValue: "Valor previsto: ",
    probability: "Probabilidad: ",
    trueClass: "Clase verdadera: ",
    trueValue: "Valor verdadero: ",
    "trueValue.comment": "prefijo para la etiqueta real para la regresión",
    newPredictedClass: "Nueva clase prevista: ",
    newPredictedValue: "Nuevo valor previsto: ",
    newProbability: "Nueva probabilidad: ",
    saveAsNewPoint: "Guardar como nuevo punto",
    saveChanges: "Guardar cambios",
    loading: "Cargando...",
    classLabel: "Clase: {0}",
    minLabel: "Mín.",
    maxLabel: "Máx.",
    stepsLabel: "Pasos",
    disclaimer:
      'Declinación de responsabilidades: Estas explicaciones se basan en una gran variedad de enfoques y no son la "causa" de las predicciones. Sin una solidez matemática estricta de la inferencia causal, recomendamos a los usuarios que no utilicen esta herramienta para tomar decisiones que afecten a la vida real.',
    missingParameters:
      "Esta pestaña requiere que se proporcione un conjunto de datos de evaluación.",
    selectionLimit: "Máximo de 3 puntos seleccionados",
    classPickerLabel: "Clase",
    tooltipTitleMany: "Principales {0} clases previstas",
    whatIfTooltipTitle: "Clases de hipótesis previstas",
    tooltipTitleFew: "Clases previstas",
    probabilityLabel: "Probabilidad",
    deltaLabel: "Delta",
    nonNumericValue: "El valor debe ser numérico.",
    icePlotHelperText:
      "Los trazados de ICE muestran cómo cambian los valores de predicción del punto de datos seleccionado en un rango de valores de característica entre un valor mínimo y uno máximo."
  },
  CohortEditor: {
    selectFilter: "Seleccionar filtro",
    TreatAsCategorical: "Tratar como valor categórico",
    addFilter: "Agregar filtro",
    addedFilters: "Filtros agregados",
    noAddedFilters: "Todavía no se ha agregado ningún filtro.",
    defaultFilterState:
      "Seleccione un filtro para agregar parámetros al cohorte de su conjunto de datos.",
    cohortNameLabel: "Nombre de cohorte de conjunto de datos",
    cohortNamePlaceholder: "Asignar nombre a cohorte",
    save: "Guardar",
    delete: "Eliminar",
    cancel: "Cancelar",
    cohortNameError: "Falta el nombre de cohorte.",
    placeholderName: "Cohorte {0}"
  },
  AxisConfigDialog: {
    select: "Seleccionar",
    ditherLabel: "Debe interpolar",
    selectFilter: "Seleccionar valor del eje",
    selectFeature: "Seleccionar característica",
    binLabel: "Aplicar discretización a los datos",
    TreatAsCategorical: "Tratar como valor categórico",
    numOfBins: "Número de discretizaciones",
    groupByCohort: "Agrupar por cohorte",
    selectClass: "Seleccionar clase",
    countHelperText: "Histograma del número de puntos"
  },
  ValidationErrors: {
    predictedProbability: "Probabilidad prevista",
    predictedY: "Eje Y previsto",
    evalData: "Conjunto de datos de evaluación",
    localFeatureImportance: "Importancia de la característica local",
    inconsistentDimensions:
      "Las dimensiones son incoherentes. Dimensiones de {0}: {1}; dimensiones esperadas: {2}.",
    notNonEmpty: "La entrada de {0} no es una matriz no vacía.",
    varyingLength:
      "Las dimensiones son incoherentes. {0} tiene elementos de longitud variable.",
    notArray: "{0} no es una matriz. Se esperaba una matriz de dimensión {1}.",
    errorHeader:
      "Algunos parámetros de entrada no son coherentes y no se usarán: ",
    datasizeWarning:
      "El conjunto de datos de evaluación es demasiado grande para mostrarse correctamente en algunos gráficos. Agregue filtros para reducir el tamaño de la cohorte. ",
    datasizeError:
      "La cohorte seleccionada es demasiado grande. Agregue filtros para reducir su tamaño.",
    addFilters: "Agregar filtros"
  },
  FilterOperations: {
    equals: " = {0}",
    lessThan: " < {0}",
    greaterThan: " > {0}",
    lessThanEquals: " <= {0}",
    greaterThanEquals: " >= {0}",
    includes: " incluye {0} ",
    inTheRangeOf: "[ {0} ]",
    overflowFilterArgs: "{0} y {1} más"
  },
  Statistics: {
    mse: "Error cuadrático medio: {0}",
    rSquared: "Coeficiente de determinación: {0}",
    meanPrediction: "Predicción media: {0}",
    accuracy: "Precisión: {0}",
    precision: "Precisión: {0}",
    recall: "Recuperación: {0}",
    fpr: "Tasa de falsos positivos: {0}",
    fnr: "Tasa de falsos negativos: {0}"
  },
  GlobalOnlyChart: {
    helperText:
      "Explore las características k más importantes que afectan a las predicciones generales de modelos. Use el control deslizante para mostrar la importancia de las características en orden descendente."
  },
  ExplanationSummary: {
    whatDoExplanationsMean: "¿Qué significan estas explicaciones?",
    clickHere: "Más información",
    shapTitle: "Valores de Shapley",
    shapDescription:
      'Este explicador usa SHAP, que es un enfoque teórico de juego para explicar modelos en los que la importancia de los conjuntos de características se mide "ocultando" en el modelo las características en cuestión a través de la marginalización. Haga clic en el vínculo a continuación para obtener más información.',
    limeTitle:
      "LIME (explicaciones independientes del modelo interpretables locales)",
    limeDescription:
      'Este explicador utiliza LIME, que proporciona una aproximación lineal del modelo. Para obtener una explicación, debe hacerse lo siguiente: perturbar la instancia, obtener predicciones de modelo y usar las predicciones como etiquetas para obtener un modelo lineal disperso que sea fiel localmente. Las ponderaciones de este modelo lineal se usan como "importancias de características". Haga clic en el vínculo a continuación para obtener más información.',
    mimicTitle: "Imitación (explicaciones subrogadas globales)",
    mimicDescription:
      "Este explicador se basa en la idea de los modelos subrogados globales de entrenamiento para imitar los modelos de una caja negra. Un modelo subrogado global es un modelo interpretable de forma intrínseca que se ha entrenado para aproximar las predicciones de cualquier modelo de una caja negra de la forma más precisa posible. Los valores de importancia de característica son valores de importancia de característica basados en modelos del modelo subrogado subyacente (LightGBM, regresión lineal, descenso de gradiente estocástico o árbol de decisión).",
    pfiTitle: "Importancia de la característica de permutación (PFI)",
    pfiDescription:
      "Este explicador mezcla aleatoriamente datos de característica en característica para todo el conjunto de datos y calcula el grado de cambio de una métrica de rendimiento en cuestión (métricas de rendimiento predeterminadas: F1 para clasificación binaria, puntuación F1 con micropromedio para clasificación multiclase y error absoluto medio para regresión). Cuanto mayor sea el cambio, más importante será la característica. Este explicador solo puede explicar el comportamiento general del modelo subyacente, por lo que no explica predicciones individuales. El valor de importancia de una característica representa el valor delta del rendimiento del modelo perturbando la característica correspondiente."
  }
};

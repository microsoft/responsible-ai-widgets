module.exports = {
    loremIpsum:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    defaultClassNames: 'Klasse \\"{0}\\"',
    defaultFeatureNames: "Sensibles Feature {0}",
    defaultSingleFeatureName: "Sensibles Feature",
    defaultCustomMetricName: "Benutzerdefinierte Metrik {0}",
    accuracyTab: "Fairness bei der Leistung",
    opportunityTab: "Fairness bei Chancen",
    modelComparisonTab: "Modellvergleich",
    tableTab: "Detailansicht",
    dataSpecifications: "Datenstatistik",
    attributes: "Attribute",
    singleAttributeCount: "1 sensibles Feature",
    attributesCount: "{0} sensible Features",
    instanceCount: "{0} Instanzen",
    close: "Schließen",
    calculating: "Wird berechnet...",
    accuracyMetric: "Leistungsmetrik",
    errorOnInputs:
        "Fehler bei der Eingabe. Sensible Features müssen zurzeit kategorische Werte sein. Ordnen Sie den Datengruppenkategorien Werte zu, und versuchen Sie es noch mal.",
    Accuracy: {
        header: "Wie möchten Sie die Leistung messen?",
        modelMakes: "Ihrem Modell",
        modelsMake: "Ihren Modellen",
        body:
            "Ihre Daten enthalten {0} Beschriftungen, und Vorhersagen werden von {1} zur {2} erstellt. Basierend auf diesen Informationen empfehlen wir die folgenden Metriken. Wählen Sie eine Metrik aus der Liste aus.",
        binaryClassifier: "binären Klassifizierung",
        probabalisticRegressor: "Probit-Regression",
        regressor: "Regression",
        binary: "binäre",
        continuous: "fortlaufende",
    },
    Parity: {
        header: "Fairness gemessen in Bezug auf die Abweichung",
        body:
            "Abweichungsmetriken quantifizieren die Variation des Modellverhaltens für die ausgewählten Features. Es gibt zwei Arten von Abweichungsmetriken: Weitere Informationen folgen...",
    },
    Header: {
        title: "Fairlearn",
        documentation: "Dokumentation",
    },
    Footer: {
        back: "Zurück",
        next: "Weiter",
    },
    Intro: {
        welcome: "Willkommen beim",
        fairlearnDashboard: "Fairlearn-Dashboard",
        introBody:
            "Mit dem Fairlearn-Dashboard können Sie Kompromisse zwischen Leistung und Fairness Ihrer Modelle bewerten.",
        explanatoryStep:
            "Um die Bewertung einzurichten, müssen Sie ein sensibles Feature und eine Leistungsmetrik angeben.",
        getStarted: "Erste Schritte",
        features: "Sensible Features",
        featuresInfo:
            "Anhand sensibler Features werden Ihre Daten in Gruppen unterteilt. Die Fairness Ihres Modells in diesen Gruppen wird mithilfe von Abweichungsmetriken gemessen. Diese drücken in Zahlen aus, inwieweit das Verhalten Ihres Modells in diesen Gruppen variiert.",
        accuracy: "Leistungsmetrik",
        accuracyInfo:
            "Leistungsmetriken werden verwendet, um die Gesamtqualität Ihres Modells sowie die Qualität Ihres Modells in den einzelnen Gruppen auszuwerten. Der Unterschied zwischen den Extremwerten der Leistungsmetrik in den Gruppen wird als Leistungsabweichung gemeldet.",
    },
    ModelComparison: {
        title: "Modellvergleich",
        howToRead: "Lesen dieses Diagramms",
        lower: "ein geringerer Wert",
        higher: "ein höherer Wert",
        howToReadText:
            'Dieses Diagramm stellt jedes der {0} Modelle als auswählbaren Punkt dar. Die x-Achse stellt "{1}" dar, wobei {2} besser ist. Die y-Achse stellt die Abweichung dar, wobei ein geringerer Wert besser ist.',
        insights: "Erkenntnisse",
        insightsText1: 'Das Diagramm zeigt "{0}" und die Abweichung bei {1} Modellen.',
        insightsText2: '"{0}" liegt im Bereich zwischen {1} und {2}. Die Abweichung reicht von {3} bis {4}.',
        insightsText3: 'Das genaueste Modell erzielt für "{0}" einen Wert von {1} und eine Abweichung von {2}.',
        insightsText4:
            'Das Modell mit der niedrigsten Abweichung erzielt für "{0}" einen Wert von {1} und eine Abweichung von {2}.',
        disparityInOutcomes: "Abweichung in Vorhersagen",
        disparityInAccuracy: "Abweichung in {0}",
        howToMeasureDisparity: "Wie soll die Abweichung gemessen werden?",
    },
    Report: {
        modelName: "Modell {0}",
        title: "Leistungsabweichung",
        globalAccuracyText: 'Ist der Gesamtwert von "{0}"',
        accuracyDisparityText: 'Ist die Abweichung in "{0}"',
        editConfiguration: "Konfiguration bearbeiten",
        backToComparisons: "Ansicht mit mehreren Modellen",
        outcomesTitle: "Abweichung in Vorhersagen",
        minTag: "Min.",
        maxTag: "Max.",
        groupLabel: "Untergruppe",
        underestimationError: "Falsch negative Vorhersage",
        underpredictionExplanation: "(vorhergesagt = 0, richtig = 1)",
        overpredictionExplanation: "(vorhergesagt = 1, richtig = 0)",
        overestimationError: "Falsch positive Vorhersage",
        classificationOutcomesHowToRead:
            "Das Balkendiagramm zeigt die Auswahlrate der einzelnen Gruppen, d. h. den Anteil der als 1 klassifizierten Punkte.",
        regressionOutcomesHowToRead:
            "Boxplots zeigen die Verteilung der Vorhersagen in den einzelnen Gruppen. Einzelne Datenpunkte werden darübergelegt.",
        classificationAccuracyHowToRead1:
            "Das Balkendiagramm zeigt die Verteilung von Fehlern in den einzelnen Gruppen.",
        classificationAccuracyHowToRead2:
            "Fehler werden in falsch positive Vorhersagen (Vorhersage von 1 bei einer Beschriftung von 0) und falsch negative Vorhersagen (Vorhersage von 0 bei einer Beschriftung von 1) unterteilt.",
        classificationAccuracyHowToRead3:
            "Die gemeldeten Raten werden durch Teilen der Fehleranzahl durch die Gesamtgröße der Gruppe ermittelt.",
        probabilityAccuracyHowToRead1:
            "Das Balkendiagramm zeigt die mittleren absoluten Fehler in den einzelnen Gruppen, aufgeteilt in falsch positive und falsch negative Vorhersagen.",
        probabilityAccuracyHowToRead2:
            "In jedem Beispiel wird die Differenz zwischen der Vorhersage und der Beschriftung gemessen. Wenn diese positiv ist, wird dies als falsch positive Vorhersage bezeichnet. Ist sie negativ, handelt es sich um eine falsch negative Vorhersage.",
        probabilityAccuracyHowToRead3:
            "Wir melden die Summe der Fehler durch falsch positive Vorhersagen und die Summe der Fehler durch falsch negative Vorhersagen, geteilt durch die Gesamtgröße der Gruppe.",
        regressionAccuracyHowToRead:
            "Ein Fehler ist der Unterschied zwischen der Vorhersage und der Beschriftung. Boxplots zeigen die Verteilung von Fehlern in den einzelnen Gruppen. Einzelne Datenpunkte werden darübergelegt.",
        distributionOfPredictions: "Verteilung der Vorhersagen",
        distributionOfErrors: "Fehlerverteilung",
        tooltipPrediction: "Vorhersage: {0}",
        tooltipError: "Fehler: {0}",
    },
    Feature: {
        header: "Anhand welcher Features möchten Sie die Fairness Ihres Modells auswerten?",
        body:
            "Fairness wird hinsichtlich der Abweichungen im Verhalten Ihres Modells ausgewertet. Wir teilen Ihre Daten entsprechend den Werten der einzelnen ausgewählten Features auf und bewerten, wie sich die Leistungsmetrik und die Vorhersagen Ihres Modells in den einzelnen Teilen unterscheiden.",
        learnMore: "Weitere Informationen",
        summaryCategoricalCount: "Dieses Feature weist {0} eindeutige Werte auf.",
        summaryNumericCount:
            "Der Bereich dieses numerischen Features liegt zwischen {0} und {1} und ist in {2} Datengruppen unterteilt.",
        showCategories: "Alle anzeigen",
        hideCategories: "Reduzieren",
        categoriesOverflow: "   und {0} weitere Kategorien",
        editBinning: "Gruppen bearbeiten",
        subgroups: "Untergruppen",
    },
    Metrics: {
        accuracyScore: "Genauigkeit",
        precisionScore: "Genauigkeit",
        recallScore: "Wiedererkennung",
        zeroOneLoss: "Null-Eins-Verlust",
        specificityScore: "Spezifitätsscore",
        missRate: "Fehlerrate",
        falloutRate: "Ausfallrate",
        maxError: "Maximaler Fehler",
        meanAbsoluteError: "Mittlerer absoluter Fehler",
        meanSquaredError: " MSE (mittlerer quadratischer Fehler)",
        meanSquaredLogError: "Mittlerer quadratischer logarithmischer Fehler",
        medianAbsoluteError: "Mittlere absolute Abweichung vom Median",
        average: "Durchschnittliche Vorhersage",
        selectionRate: "Auswahlrate",
        overprediction: "Falsch positive Vorhersage",
        underprediction: "Falsch negative Vorhersage",
        r2_score: "R-quadratischer Score",
        rms_error: "RMSE (Wurzel des mittleren quadratischen Fehlers)",
        auc: "Fläche unter der ROC-Kurve",
        balancedRootMeanSquaredError: "Ausgewogener RMSE",
        balancedAccuracy: "Ausgewogene Genauigkeit",
        f1Score: "F1-Score",
        logLoss: "Log Loss",
        accuracyDescription: "Der Anteil der Datenpunkte, die korrekt klassifiziert werden.",
        precisionDescription:
            "Der Anteil der Datenpunkte, die unter den als 1 klassifizierten Datenpunkten korrekt klassifiziert werden.",
        recallDescription:
            "Der Anteil der Datenpunkte, die unter denjenigen korrekt klassifiziert werden, deren echte Beschriftung 1 lautet. Alternative Namen: True Positive-Rate, Sensitivität.",
        rmseDescription: "Quadratwurzel des Durchschnitts von quadratischen Fehlern.",
        mseDescription: "Der Durchschnitt aus quadratischen Fehlern.",
        meanAbsoluteErrorDescription: "Der Durchschnitt der absoluten Fehlerwerte. Stabiler bei Ausreißern als MSE.",
        r2Description: "Der Anteil der Varianz in den Beschriftungen, die vom Modell erklärt werden.",
        aucDescription:
            "Die Qualität der Vorhersagen, dargestellt als Scores, beim Trennen positiver Beispiele von negativen Beispielen.",
        balancedRMSEDescription:
            "Positive und negative Beispiele werden neu gewichtet, sodass sie insgesamt die gleiche Gewichtung aufweisen. Diese Option ist geeignet, wenn die zugrunde liegenden Daten hochgradig unausgewogen sind.",
        balancedAccuracyDescription:
            "Positive und negative Beispiele werden neu gewichtet, sodass sie insgesamt die gleiche Gewichtung aufweisen. Diese Option ist geeignet, wenn die zugrunde liegenden Daten hochgradig unausgewogen sind.",
        f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall.",
    },
    BinDialog: {
        header: "Datengruppen konfigurieren",
        makeCategorical: "Als kategorisch behandeln",
        save: "Speichern",
        cancel: "Abbrechen",
        numberOfBins: "Datengruppenanzahl:",
        categoryHeader: "Datengruppenwerte:",
    },
};

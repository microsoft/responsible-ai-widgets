module.exports = {
  loremIpsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  defaultClassNames: "Clase {0}",
  defaultFeatureNames: "Característica confidencial {0}",
  defaultSingleFeatureName: "Característica confidencial",
  defaultCustomMetricName: "Métrica personalizada {0}",
  accuracyTab: "Equidad en rendimiento",
  opportunityTab: "Equidad en oportunidades",
  modelComparisonTab: "Comparación de modelos",
  tableTab: "Vista detallada",
  dataSpecifications: "Estadísticas de datos",
  attributes: "Atributos",
  singleAttributeCount: "1 característica confidencial",
  attributesCount: "{0} características confidenciales",
  instanceCount: "{0} instancias",
  close: "Cerrar",
  calculating: "Cálculo en curso...",
  accuracyMetric: "Métrica de rendimiento",
  errorOnInputs:
    "Error con la entrada. Las características confidenciales deben ser valores de categorías en este momento. Asigne valores a las categorías con rangos y vuelva a intentarlo.",
  Accuracy: {
    header: "¿Cómo quiere medir el rendimiento?",
    modelMakes: "modelo hace",
    modelsMake: "modelos hacen",
    body:
      "Los datos contienen etiquetas ({0}) y sus predicciones ({2} {1}). En función de esta información, se recomiendan las métricas siguientes. Seleccione una de la lista.",
    binaryClassifier: "clasificador de elementos binarios",
    probabalisticRegressor: "regresor probit",
    regressor: "regresor",
    binary: "binario",
    continuous: "continuo"
  },
  Parity: {
    header: "Equidad medida en términos de disparidad",
    body:
      "Las métricas de disparidad cuantifican la variación del comportamiento del modelo en las características seleccionadas. Hay dos tipos de métricas de disparidad, pero está previsto que haya más disponibles."
  },
  Header: {
    title: "Fairlearn",
    documentation: "Documentación"
  },
  Footer: {
    back: "Atrás",
    next: "Siguiente"
  },
  Intro: {
    welcome: "Le damos la bienvenida a",
    fairlearnDashboard: "Panel de Fairlearn",
    introBody:
      "El panel de Fairlearn le permite evaluar las contrapartidas entre el rendimiento y la equidad de los modelos.",
    explanatoryStep:
      "Para configurar la evaluación, debe especificar una característica confidencial y una métrica de rendimiento.",
    getStarted: "Introducción",
    features: "Características confidenciales",
    featuresInfo:
      "Las características confidenciales se usan para dividir los datos en grupos. Las métricas de disparidad miden la equidad del modelo en estos grupos y cuantifican la variación del comportamiento del modelo en estos grupos.",
    accuracy: "Métrica de rendimiento",
    accuracyInfo:
      "Las métricas de rendimiento se usan para evaluar la calidad general del modelo, así como la calidad del modelo en cada grupo. La diferencia entre los valores extremos de la métrica de rendimiento en los distintos grupos se notifica como una disparidad de rendimiento."
  },
  ModelComparison: {
    title: "Comparación de modelos",
    howToRead: "Cómo leer este gráfico",
    lower: "menor",
    higher: "mayor",
    howToReadText:
      "Este gráfico representa cada uno de los {0} modelos como un punto seleccionable. El eje X representa {1}, donde un valor {2} es mejor; el eje Y representa la disparidad, donde un valor menor es mejor.",
    insights: "Conclusiones",
    insightsText1: "El gráfico muestra {0} y disparidad de los modelos de {1}.",
    insightsText2:
      "{0} puede tener un valor de {1} a {2}. La disparidad puede tener un valor de {3} a {4}.",
    insightsText3:
      "El modelo más preciso logra {0} de {1} y una disparidad de {2}.",
    insightsText4:
      "El modelo de menor disparidad logra {0} de {1} y una disparidad de {2}.",
    disparityInOutcomes: "Disparidad en predicciones",
    disparityInAccuracy: "Disparidad en {0}",
    howToMeasureDisparity: "¿Cómo se deben medir las disparidades?"
  },
  Report: {
    modelName: "Modelo {0}",
    title: "Disparidad en rendimiento",
    globalAccuracyText: "Es el valor total de {0}",
    accuracyDisparityText: "Es la disparidad en {0}",
    editConfiguration: "Editar configuración",
    backToComparisons: "Vista multimodelo",
    outcomesTitle: "Disparidad en predicciones",
    minTag: "Mín.",
    maxTag: "Máx.",
    groupLabel: "Subgrupo",
    underestimationError: "Infrapredicción",
    underpredictionExplanation: "(predicción: 0, verdadero: 1)",
    overpredictionExplanation: "(predicción: 1, verdadero: 0)",
    overestimationError: "Sobrepredicción",
    classificationOutcomesHowToRead:
      "El gráfico de barras muestra la probabilidad de selecciones de cada grupo, es decir, la fracción de puntos que se clasifica como 1.",
    regressionOutcomesHowToRead:
      "Los diagramas de caja muestran la distribución de predicciones en cada grupo, mientras que los puntos de datos individuales están superpuestos.",
    classificationAccuracyHowToRead1:
      "El gráfico de barras muestra la distribución de los errores en cada grupo.",
    classificationAccuracyHowToRead2:
      "Los errores se dividen en errores de sobrepredicción (se predice 1 cuando la etiqueta verdadera es 0) y los errores de infrapredicción (se predice 0 cuando la etiqueta verdadera es 1).",
    classificationAccuracyHowToRead3:
      "Las probabilidades indicadas se obtienen dividiendo el número de errores entre el tamaño total del grupo.",
    probabilityAccuracyHowToRead1:
      "El gráfico de barras muestra un error absoluto medio en cada grupo, dividido en sobrepredicción e infrapredicción.",
    probabilityAccuracyHowToRead2:
      "En cada ejemplo se mide la diferencia entre la predicción y la etiqueta. Si es positiva, se será una sobrepredicción y, si es negativa, será una infrapredicción.",
    probabilityAccuracyHowToRead3:
      "Se informa de la suma de errores de sobrepredicción y de infrapredicción divididos entre el tamaño total del grupo.",
    regressionAccuracyHowToRead:
      "El error es la diferencia entre la predicción y la etiqueta. Los diagramas de caja muestran la distribución de errores en cada grupo, mientras que los puntos de datos individuales están superpuestos.",
    distributionOfPredictions: "Distribución de predicciones",
    distributionOfErrors: "Distribución de errores",
    tooltipPrediction: "Predicción: {0}",
    tooltipError: "Error: {0}"
  },
  Feature: {
    header:
      "¿Con respecto a qué características quiere evaluar la equidad de su modelo?",
    body:
      "La equidad se evalúa en términos de disparidades en el comportamiento del modelo. Se dividirán los datos en función de los valores de las características seleccionadas y se evaluarán las diferencias entre las predicciones y las métricas de rendimiento del modelo de acuerdo con estas divisiones.",
    learnMore: "Más información",
    summaryCategoricalCount: "Esta característica tiene {0} valores únicos.",
    summaryNumericCount:
      "Esta característica numérica abarca de {0} a {1} y se agrupa en {2} rangos.",
    showCategories: "Mostrar todo",
    hideCategories: "Contraer",
    categoriesOverflow: "   y {0} categorías adicionales",
    editBinning: "Editar grupos",
    subgroups: "Subgrupos"
  },
  Metrics: {
    accuracyScore: "Exactitud",
    precisionScore: "Precisión",
    recallScore: "Coincidencia",
    zeroOneLoss: "Pérdida cero-uno",
    specificityScore: "Puntuación de especificidad",
    missRate: "Probabilidad de errores",
    falloutRate: "Probabilidad de efectos colaterales",
    maxError: "Error de máximo",
    meanAbsoluteError: "Error absoluto de media",
    meanSquaredError: " ECM (error cuadrático medio)",
    meanSquaredLogError: "Error logarítmico de cuadrático medio",
    medianAbsoluteError: "Error absoluto de mediana",
    average: "Predicción promedio",
    selectionRate: "Probabilidad de selecciones",
    overprediction: "Sobrepredicción",
    underprediction: "Infrapredicción",
    r2_score: "Puntuación de R cuadrado",
    rms_error: "RECM (raíz del error cuadrático medio)",
    auc: "Área bajo la curva ROC",
    balancedRootMeanSquaredError: "RECM equilibrado",
    balancedAccuracy: "Exactitud equilibrada",
    f1Score: "F1-Score",
    logLoss: "Log Loss",
    accuracyDescription:
      "Fracción de puntos de datos clasificada correctamente.",
    precisionDescription:
      "Fracción de puntos de datos clasificada correctamente entre los clasificados como 1.",
    recallDescription:
      "Fracción de puntos de datos clasificada correctamente entre aquellos cuya etiqueta verdadera es 1. Nombres alternativos: índice de verdaderos positivos, confidencialidad.",
    rmseDescription: "Raíz cuadrada del promedio de errores cuadráticos.",
    mseDescription: "Promedio de errores cuadráticos.",
    meanAbsoluteErrorDescription:
      "Promedio de valores absolutos de errores; más robusto a valores atípicos que ECM.",
    r2Description:
      "Fracción de varianza de las etiquetas explicadas por el modelo.",
    aucDescription:
      "Calidad de las predicciones, vistas como puntuaciones, en la separación de ejemplos positivos de ejemplos negativos.",
    balancedRMSEDescription:
      "Los ejemplos positivos y negativos se vuelven a ponderar para que tengan la misma ponderación total. Esto es adecuado si los datos subyacentes están muy desequilibrados.",
    balancedAccuracyDescription:
      "Los ejemplos positivos y negativos se vuelven a ponderar para que tengan la misma ponderación total. Esto es adecuado si los datos subyacentes están muy desequilibrados.",
    f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall."
  },
  BinDialog: {
    header: "Configuración de rangos",
    makeCategorical: "Tratar como valor categórico",
    save: "Guardar",
    cancel: "Cancelar",
    numberOfBins: "Número de rangos:",
    categoryHeader: "Valores de rangos:"
  }
};

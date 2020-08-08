module.exports = {
  selectPoint: "Selecione um ponto para ver sua explicação local",
  defaultClassNames: "Classe {0}",
  defaultFeatureNames: "Recurso {0}",
  absoluteAverage: "Média do valor absoluto",
  predictedClass: "Classe prevista",
  datasetExplorer: "Explorer do Conjunto de Dados",
  dataExploration: "Exploração do Conjunto de Dados",
  aggregateFeatureImportance: "Importância do Recurso Agregado",
  globalImportance: "Importância Global",
  explanationExploration: "Exploração de Explicação",
  individualAndWhatIf: "Importância do Recurso Individual e Hipótese",
  summaryImportance: "Importância do Resumo",
  featureImportance: "Importância do Recurso",
  featureImportanceOf: "Importância do recurso de {0}",
  perturbationExploration: "Exploração de Perturbação",
  localFeatureImportance: "Importância do Recurso Local",
  ice: "ICE",
  clearSelection: "Limpar seleção",
  feature: "Recurso:",
  intercept: "Interceptação",
  modelPerformance: "Desempenho do Modelo",
  ExplanationScatter: {
    dataLabel: "Dados: {0}",
    importanceLabel: "Importância: {0}",
    predictedY: "Y Previsto",
    index: "Índice",
    dataGroupLabel: "Dados",
    output: "Saída",
    probabilityLabel: "Probabilidade: {0}",
    trueY: "Y verdadeiro",
    class: "classe: ",
    xValue: "Valor X:",
    yValue: "Valor Y:",
    colorValue: "Cor:",
    count: "Contagem"
  },
  CrossClass: {
    label: "Ponderação entre classes:",
    info: "Informações sobre o cálculo entre classes",
    overviewInfo:
      "Os modelos de multiclasse geram um vetor de importância do recurso independente para cada classe. O vetor de importância do recurso de cada classe demonstra quais recursos fizeram uma classe mais ou menos provável. Você pode selecionar como os pesos dos vetores de importância do recurso por classe são resumidos em um único valor:",
    absoluteValInfo:
      "Média do valor absoluto: mostra a soma da importância do recurso em todas as classes possíveis, dividida pelo número de classes",
    predictedClassInfo:
      "Classe prevista: mostra o valor de importância do recurso para a classe prevista de um determinado ponto",
    enumeratedClassInfo:
      "Nomes de classe enumerados: mostra somente os valores de importância do recurso da classe especificada em todos os pontos de dados.",
    close: "Fechar",
    crossClassWeights: "Pesos de classe cruzada"
  },
  AggregateImportance: {
    scaledFeatureValue: "Valor de Recurso Dimensionado",
    low: "Baixa",
    high: "Alta",
    featureLabel: "Recurso: {0}",
    valueLabel: "Valor do recurso: {0}",
    importanceLabel: "Importância: {0}",
    predictedClassTooltip: "Classe Prevista: {0}",
    trueClassTooltip: "Classe Verdadeira: {0}",
    predictedOutputTooltip: "Saída Prevista: {0}",
    trueOutputTooltip: "Saída Verdadeira: {0}",
    topKFeatures: "K Principais Recursos:",
    topKInfo: "Como o k principal é calculado",
    predictedValue: "Valor Previsto",
    predictedClass: "Classe Prevista",
    trueValue: "Valor Verdadeiro",
    trueClass: "Classe Verdadeira",
    noColor: "Nenhuma",
    tooManyRows:
      "O conjunto de dados fornecido é maior do que este gráfico pode dar suporte"
  },
  BarChart: {
    classLabel: "Classe: {0}",
    sortBy: "Classificar por",
    noData: "Nenhum Dado",
    absoluteGlobal: "Global absoluto",
    absoluteLocal: "Local absoluto",
    calculatingExplanation: "Calculando a explicação"
  },
  IcePlot: {
    numericError: "Deve ser numérico",
    integerError: "Precisa ser um número inteiro",
    prediction: "Previsão",
    predictedProbability: "Probabilidade prevista",
    predictionLabel: "Previsão: {0}",
    probabilityLabel: "Probabilidade: {0}",
    noModelError:
      "Forneça um modelo operacionalizado para explorar previsões em gráficos da ICE.",
    featurePickerLabel: "Recurso:",
    minimumInputLabel: "Mínimo:",
    maximumInputLabel: "Máximo:",
    stepInputLabel: "Etapas:",
    loadingMessage: "Carregando dados...",
    submitPrompt: "Enviar um intervalo para exibir um gráfico da ICE",
    topLevelErrorMessage: "Erro no parâmetro",
    errorPrefix: "Erro encontrado: {0}"
  },
  PerturbationExploration: {
    loadingMessage: "Carregando...",
    perturbationLabel: "Perturbação:"
  },
  PredictionLabel: {
    predictedValueLabel: "Valor previsto: {0}",
    predictedClassLabel: "Classe prevista: {0}"
  },
  Violin: {
    groupNone: "Nenhum agrupamento",
    groupPredicted: "Y Previsto",
    groupTrue: "Y verdadeiro",
    groupBy: "Agrupar por"
  },
  FeatureImportanceWrapper: {
    chartType: "Tipo de gráfico:",
    violinText: "Violino",
    barText: "Barra",
    boxText: "Quadrado",
    beehiveText: "Por nuvem",
    globalImportanceExplanation:
      "A importância do recurso global é calculada pela média do valor absoluto da importância do recurso de todos os pontos (normalização de L1). ",
    multiclassImportanceAddendum:
      "Todos os pontos são incluídos no cálculo da importância de um recurso para todas as classes, nenhum peso diferencial é usado. Portanto, um recurso que tenha grande importância negativa para muitos pontos que estimaram que não seja da 'Classe A' aumentará muito a importância de 'Classe A' do recurso."
  },
  Filters: {
    equalComparison: "Igual a",
    greaterThanComparison: "Maior que",
    greaterThanEqualToComparison: "Maior ou igual a",
    lessThanComparison: "Menor que",
    lessThanEqualToComparison: "Menor ou igual a",
    inTheRangeOf: "No intervalo de",
    categoricalIncludeValues: "Valores incluídos:",
    numericValue: "Valor",
    numericalComparison: "Operação",
    minimum: "Mínimo",
    maximum: "Máximo",
    min: "Mínimo: {0}",
    max: "Máximo: {0}",
    uniqueValues: "Nº de valores exclusivos: {0}"
  },
  Columns: {
    regressionError: "Erro de regressão",
    error: "Erro",
    classificationOutcome: "Resultado da classificação",
    truePositive: "Verdadeiro positivo",
    trueNegative: "Verdadeiro negativo",
    falsePositive: "Falso positivo",
    falseNegative: "Falso negativo",
    dataset: "Conjunto de dados",
    predictedProbabilities: "Probabilidades de previsão",
    none: "Contagem"
  },
  WhatIf: {
    closeAriaLabel: "Fechar",
    defaultCustomRootName: "Cópia da linha {0}",
    filterFeaturePlaceholder: "Pesquisar os recursos"
  },
  Cohort: {
    cohort: "Coorte",
    defaultLabel: "Todos os dados"
  },
  GlobalTab: {
    helperText:
      "Explore os principais recursos importantes de k que afetam as suas previsões de modelo gerais (ou seja, a explicação global). Use o controle deslizante para mostrar os valores de importância do recurso de modo decrescente. Selecione até três coortes para ver os valores de importância do recurso deles lado a lado. Clique em qualquer uma das barras de recursos no grafo para ver como os valores do recurso selecionado afetam a previsão de modelo.",
    topAtoB: "Principais {0} – {1} recursos",
    datasetCohorts: "Coortes do conjunto de dados",
    legendHelpText:
      "Ative e desative coortes no gráfico clicando nos itens da legenda.",
    sortBy: "Classificar por",
    viewDependencePlotFor: "Exibir o gráfico de dependência para:",
    datasetCohortSelector: "Selecionar um coorte do conjunto de dados",
    aggregateFeatureImportance: "Importância do Recurso Agregado",
    missingParameters:
      "Esta guia requer que o parâmetro local de importância do recurso seja fornecido.",
    weightOptions: "Pesos de importância de classe",
    dependencePlotTitle: "Gráficos de Dependência",
    dependencePlotHelperText:
      "Este gráfico de dependências mostra a relação entre o valor de um recurso e a importância correspondente do recurso em um coorte.",
    dependencePlotFeatureSelectPlaceholder: "Selecionar o recurso",
    datasetRequired:
      "Os gráficos de dependência exigem o conjunto de dados de avaliação e a matriz local de importância do recurso."
  },
  CohortBanner: {
    dataStatistics: "Estatísticas de Dados",
    datapoints: "{0} pontos de dados",
    features: "{0} recursos",
    filters: "{0} filtros",
    binaryClassifier: "Classificador Binário",
    regressor: "Regressor",
    multiclassClassifier: "Classificador Multiclasse",
    datasetCohorts: "Coortes do Conjunto de Dados",
    editCohort: "Editar o Coorte",
    duplicateCohort: "Duplicar o Coorte",
    addCohort: "Adicionar Coorte",
    copy: " cópia"
  },
  ModelPerformance: {
    helperText:
      "Avalie o desempenho do seu modelo explorando a distribuição dos seus valores de previsão e dos valores das suas métricas de desempenho do modelo. Você pode investigar ainda mais o seu modelo examinando uma análise comparativa do desempenho dele em diferentes coortes ou subgrupos do seu conjunto de dados. Selecione os filtros ao longo do valor y e do valor z para cortar em diferentes dimensões. Selecione a engrenagem no grafo para alterar o tipo de grafo.",
    modelStatistics: "Estatísticas do Modelo",
    cohortPickerLabel:
      "Selecionar um coorte do conjunto de dados a ser explorado",
    missingParameters:
      "Esta guia requer que a matriz de valores previstos do modelo seja fornecida.",
    missingTrueY:
      "As estatísticas de desempenho do modelo exigem que os verdadeiros resultados sejam fornecidos em adição aos resultados previstos"
  },
  Charts: {
    yValue: "Valor Y",
    numberOfDatapoints: "Número de pontos de dados",
    xValue: "Valor X",
    rowIndex: "Índice de linha",
    featureImportance: "Importância do recurso",
    countTooltipPrefix: "Contagem: {0}",
    count: "Contagem",
    featurePrefix: "Recurso",
    importancePrefix: "Importância",
    cohort: "Coorte",
    howToRead: "Como ler este gráfico"
  },
  DatasetExplorer: {
    helperText:
      "Explore as estatísticas do conjunto de dados selecionando filtros diferentes ao longo do eixo X, Y e de cor para dividir os seus dados em dimensões diferentes. Crie conjunto de dados coortes acima para analisar as estatísticas do conjunto de dados com filtros, como resultado previsto, recursos do conjunto de dados e grupos de erros. Use o ícone de engrenagem no canto superior direito do grafo para alterar os tipos de grafo.",
    colorValue: "Valor da cor",
    individualDatapoints: "Pontos de dados individuais",
    aggregatePlots: "Gráficos de agregação",
    chartType: "Tipo de gráfico",
    missingParameters:
      "Esta guia requer que um conjunto de dados de avaliação seja fornecido.",
    noColor: "Nenhum"
  },
  DependencePlot: {
    featureImportanceOf: "Importância do recurso de",
    placeholder:
      "Clique em um recurso no gráfico de barras acima para mostrar o gráfico de dependência"
  },
  WhatIfTab: {
    helperText:
      'Você pode selecionar um ponto de dados clicando no gráfico de dispersão para exibir os valores de importância do recurso local (explicação local) e o gráfico de ICE (expectativa condicional individual) abaixo. Crie um ponto de dados hipotético usando o painel à direita para desorganizar recursos de um ponto de dados conhecido. Os valores de importância do recurso são baseados em muitas aproximações e não são a "causa" das previsões. Sem forte robustez matemática de inferência causal, não aconselhamos os usuários a tomarem decisões de vida real com base nessa ferramenta.',
    panelPlaceholder:
      "Um modelo é necessário para fazer previsões para novos pontos de dados.",
    cohortPickerLabel:
      "Selecionar um coorte do conjunto de dados a ser explorado",
    scatterLegendText:
      "Ative e desative os pontos de dados no gráfico clicando nos itens da legenda.",
    realPoint: "Pontos de dados reais",
    noneSelectedYet: "Nenhum foi selecionado ainda",
    whatIfDatapoints: "Pontos de dados de hipótese",
    noneCreatedYet: "Nenhum foi criado ainda",
    showLabel: "Mostrar:",
    featureImportancePlot: "Gráfico de importância do recurso",
    icePlot: "Gráfico de ICE (expectativa condicional individual)",
    featureImportanceLackingParameters:
      "Forneça as importâncias do recurso local para ver como cada recurso impacta previsões individuais.",
    featureImportanceGetStartedText:
      "Selecione um ponto para exibir a importância do recurso",
    iceLackingParameters:
      "Os gráficos ICE exigem um modelo operacional para fazer previsões para os pontos de extremidade hipotéticos.",
    IceGetStartedText:
      "Selecione um ponto ou crie um ponto de Hipótese para exibir gráficos da ICE",
    whatIfDatapoint: "Ponto de dados de hipótese",
    whatIfHelpText:
      "Selecione um ponto no gráfico ou insira manualmente um índice de ponto de dados conhecido para causar perturbação e salve como um novo ponto de Hipótese.",
    indexLabel: "Índice de dados no qual causar perturbação",
    rowLabel: "Linha {0}",
    whatIfNameLabel: "Nome do ponto de dados de hipótese",
    featureValues: "Valores do recurso",
    predictedClass: "Classe prevista: ",
    predictedValue: "Valor previsto: ",
    probability: "Probabilidade: ",
    trueClass: "Classe verdadeira: ",
    trueValue: "Valor verdadeiro: ",
    "trueValue.comment": "prefixo do rótulo real para regressão",
    newPredictedClass: "Nova classe prevista: ",
    newPredictedValue: "Novo valor previsto: ",
    newProbability: "Nova probabilidade: ",
    saveAsNewPoint: "Salvar como novo ponto",
    saveChanges: "Salvar as alterações",
    loading: "Carregando...",
    classLabel: "Classe: {0}",
    minLabel: "Mín.",
    maxLabel: "Máx.",
    stepsLabel: "Etapas",
    disclaimer:
      'Aviso de isenção de responsabilidade: essas são explicações com base em muitas aproximações e não são a "causa" das previsões. Sem a forte robustez matemática da inferência causal, não aconselhamos os usuários a tomar decisões de vida real com base nesta ferramenta.',
    missingParameters:
      "Esta guia requer que um conjunto de dados de avaliação seja fornecido.",
    selectionLimit: "No máximo três pontos selecionados",
    classPickerLabel: "Classe",
    tooltipTitleMany: "{0} principais classes previstas",
    whatIfTooltipTitle: "Classes previstas de hipótese",
    tooltipTitleFew: "Classes previstas",
    probabilityLabel: "Probabilidade",
    deltaLabel: "Delta",
    nonNumericValue: "O valor deve ser numérico",
    icePlotHelperText:
      "Plotagens de ICE demonstram como os valores de previsão do ponto de dados selecionado são alterados em um intervalo de valores de recurso entre um valor mínimo e um máximo."
  },
  CohortEditor: {
    selectFilter: "Selecionar o Filtro",
    TreatAsCategorical: "Tratar como categórico",
    addFilter: "Adicionar Filtro",
    addedFilters: "Filtros Adicionados",
    noAddedFilters: "Nenhum filtro foi adicionado ainda",
    defaultFilterState:
      "Selecione um filtro para adicionar parâmetros ao coorte do seu conjunto de dados.",
    cohortNameLabel: "Nome do coorte do conjunto de dados",
    cohortNamePlaceholder: "Nomeie o seu coorte",
    save: "Salvar",
    delete: "Excluir",
    cancel: "Cancelar",
    cohortNameError: "Nome do coorte ausente",
    placeholderName: "Coorte {0}"
  },
  AxisConfigDialog: {
    select: "Selecionar",
    ditherLabel: "Deve pontilhar",
    selectFilter: "Selecionar o valor do seu eixo",
    selectFeature: "Selecionar o Recurso",
    binLabel: "Aplicar compartimentalização aos dados",
    TreatAsCategorical: "Tratar como categórico",
    numOfBins: "Número de compartimentos",
    groupByCohort: "Agrupar por coorte",
    selectClass: "Selecionar a classe",
    countHelperText: "Um histograma do número de pontos"
  },
  ValidationErrors: {
    predictedProbability: "Probabilidade prevista",
    predictedY: "Y previsto",
    evalData: "Conjunto de dados de avaliação",
    localFeatureImportance: "Importância do recurso local",
    inconsistentDimensions:
      "Dimensões inconsistentes. {0} tem dimensões {1}, esperava-se {2}",
    notNonEmpty: "A entrada {0} não é uma matriz não vazia",
    varyingLength:
      "Dimensões inconsistentes. {0} tem elementos de comprimento variável",
    notArray: "{0} não é uma matriz. Matriz de dimensão {1} esperada",
    errorHeader:
      "Alguns parâmetros de entrada eram inconsistentes e não serão usados: ",
    datasizeWarning:
      "O conjunto de dados de avaliação é muito grande para ser exibido com eficácia em alguns gráficos. Adicione filtros para diminuir o tamanho do coorte. ",
    datasizeError:
      "O coorte selecionado é muito grande. Adicione filtros para diminuir o tamanho dele.",
    addFilters: "Adicionar filtros"
  },
  FilterOperations: {
    equals: " = {0}",
    lessThan: " < {0}",
    greaterThan: " > {0}",
    lessThanEquals: " <= {0}",
    greaterThanEquals: " >= {0}",
    includes: " inclui {0} ",
    inTheRangeOf: "[ {0} ]",
    overflowFilterArgs: "{0} e {1} outros"
  },
  Statistics: {
    mse: "MSE: {0}",
    rSquared: "R ao quadrado: {0}",
    meanPrediction: "Previsão média {0}",
    accuracy: "Precisão: {0}",
    precision: "Precisão: {0}",
    recall: "Recall: {0}",
    fpr: "FPR: {0}",
    fnr: "FNR: {0}"
  },
  GlobalOnlyChart: {
    helperText:
      "Explore os k principais recursos importantes que afetam suas previsões gerais do modelo. Use o controle deslizante para mostrar as importâncias de recurso em ordem decrescente."
  },
  ExplanationSummary: {
    whatDoExplanationsMean: "O que significam estas explicações?",
    clickHere: "Saiba mais",
    shapTitle: "Valores de Shapley",
    shapDescription:
      'Este explicador usa o SHAP, que é uma abordagem de teoria dos jogos para explicar os modelos, na qual a importância dos conjuntos de recursos é medida "ocultando" esses recursos do modelo por meio de uso marginal. Clique no link abaixo para saber mais.',
    limeTitle:
      "LIME (Explicações Locais Interpretáveis Independentes de Modelo)",
    limeDescription:
      "Este explicativo usa LIME, que fornece uma aproximação linear do modelo. Para obter uma explicação, fazemos o seguinte: desorganizamos a instância, obtemos previsões de modelo e usamos essas previsões como rótulos para aprender um modelo linear esparso que é localmente fiel. Os pesos desse modelo linear são usados como 'importâncias do recurso'. Clique no link abaixo para saber mais.",
    mimicTitle: "Imitação (Explicações Alternativas Globais)",
    mimicDescription:
      "Este explicador se baseia na ideia de treinamento de modelos alternativos globais para imitar modelos de caixa preta. Um modelo alternativo global é um modelo intrinsecamente interpretável que é treinado para aproximar as previsões de qualquer modelo de caixa preta da forma mais exata possível. Os valores de importância do recurso são baseados no seu modelo alternativo subjacente (LightGBM, Regressão Linear, Gradiente Descendente Estocástico ou Árvore de Decisão)",
    pfiTitle: "PFI (Importância do Recurso de Permutação)",
    pfiDescription:
      "Este explicador embaralha aleatoriamente dados de um recurso por vez para todo o conjunto de dados e calcula o quanto a métrica de desempenho do interesse é alterada (métricas de desempenho padrão: medida F para classificação binária, medida F com micro média para classificação de multiclasse e erro médio absoluto para regressão). Quanto maior a alteração, mais importante será o recurso. Este explicador pode esclarecer somente o comportamento geral do modelo subjacente, e não previsões individuais. O valor de importância do recurso representa o delta no desempenho do modelo ao desorganizar esse recurso específico."
  }
};

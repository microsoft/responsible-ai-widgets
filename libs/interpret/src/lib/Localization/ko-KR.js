module.exports = {
  selectPoint: "로컬 설명을 보려면 요소를 선택하세요.",
  defaultClassNames: "클래스 {0}",
  defaultFeatureNames: "기능 {0}",
  absoluteAverage: "절대값의 평균",
  predictedClass: "예측 클래스",
  datasetExplorer: "데이터 세트 탐색기",
  dataExploration: "데이터 세트 탐색",
  aggregateFeatureImportance: "기능 중요도 집계",
  globalImportance: "글로벌 중요도",
  explanationExploration: "설명 탐색",
  individualAndWhatIf: "개별 기능 중요도 및 가상",
  summaryImportance: "요약 중요도",
  featureImportance: "기능 중요도",
  featureImportanceOf: "{0}의 기능 중요도",
  perturbationExploration: "작은 변경 탐색",
  localFeatureImportance: "로컬 기능 중요도",
  ice: "ICE",
  clearSelection: "선택 영역 지우기",
  feature: "기능:",
  intercept: "가로채기",
  modelPerformance: "모델 성능",
  ExplanationScatter: {
    dataLabel: "데이터: {0}",
    importanceLabel: "중요도: {0}",
    predictedY: "예상 Y",
    index: "인덱스",
    dataGroupLabel: "데이터",
    output: "출력",
    probabilityLabel: "가능성: {0}",
    trueY: "True Y",
    class: "클래스: ",
    xValue: "X 값:",
    yValue: "Y 값:",
    colorValue: "색:",
    count: "개수"
  },
  CrossClass: {
    label: "클래스 간 가중치:",
    info: "클래스 간 계산에 대한 정보",
    overviewInfo:
      "다중 클래스 모델은 각 클래스의 독립 기능 중요도 벡터를 생성합니다. 각 클래스의 기능 중요도 벡터는 클래스의 가능성을 높인 기능 또는 그 반대에 해당하는 기능을 보여 줍니다. 클래스별 기능 중요도 벡터의 가중치가 단일 값으로 요약되는 방법을 선택할 수 있습니다.",
    absoluteValInfo:
      "절대값의 평균: 가능한 모든 클래스에서 기능의 중요도 합계를 클래스 수로 나눈 값을 표시합니다.",
    predictedClassInfo:
      "예측 클래스: 지정된 요소의 예측 클래스에 해당하는 기능 중요도 값을 보여 줍니다.",
    enumeratedClassInfo:
      "열거된 클래스 이름: 모든 데이터 요소에서 지정된 클래스의 기능 중요도 값만 표시합니다.",
    close: "닫기",
    crossClassWeights: "클래스 간 가중치"
  },
  AggregateImportance: {
    scaledFeatureValue: "확장된 기능 값",
    low: "저가",
    high: "고가",
    featureLabel: "기능: {0}",
    valueLabel: "기능 값: {0}",
    importanceLabel: "중요도: {0}",
    predictedClassTooltip: "예측 클래스: {0}",
    trueClassTooltip: "True 클래스: {0}",
    predictedOutputTooltip: "예측 출력: {0}",
    trueOutputTooltip: "True 출력: {0}",
    topKFeatures: "상위 K개 기능:",
    topKInfo: "상위 k개를 계산하는 방법",
    predictedValue: "예측 값",
    predictedClass: "예측 클래스",
    trueValue: "True 값",
    trueClass: "True 클래스",
    noColor: "없음",
    tooManyRows: "제공된 데이터 세트가 이 차트에서 지원되는 크기보다 큽니다."
  },
  BarChart: {
    classLabel: "클래스: {0}",
    sortBy: "정렬 기준",
    noData: "데이터 없음",
    absoluteGlobal: "절대 글로벌",
    absoluteLocal: "절대 로컬",
    calculatingExplanation: "설명을 계산하는 중"
  },
  IcePlot: {
    numericError: "숫자여야 합니다.",
    integerError: "정수여야 합니다.",
    prediction: "예측",
    predictedProbability: "예측 가능성",
    predictionLabel: "예측: {0}",
    probabilityLabel: "가능성: {0}",
    noModelError:
      "ICE 플롯에서 예측을 탐색하려면 조작 가능한 모델을 제공하세요.",
    featurePickerLabel: "기능:",
    minimumInputLabel: "최소:",
    maximumInputLabel: "최대:",
    stepInputLabel: "단계:",
    loadingMessage: "데이터 로드 중...",
    submitPrompt: "ICE 플롯을 보려면 범위를 제출하세요.",
    topLevelErrorMessage: "매개 변수 오류",
    errorPrefix: "오류 발생: {0}"
  },
  PerturbationExploration: {
    loadingMessage: "로드 중...",
    perturbationLabel: "작은 변경:"
  },
  PredictionLabel: {
    predictedValueLabel: "예상 값: {0}",
    predictedClassLabel: "예측 클래스: {0}"
  },
  Violin: {
    groupNone: "그룹화 안 함",
    groupPredicted: "예상 Y",
    groupTrue: "True Y",
    groupBy: "그룹화 방법"
  },
  FeatureImportanceWrapper: {
    chartType: "차트 종류:",
    violinText: "바이올린",
    barText: "가로 막대형",
    boxText: "상자",
    beehiveText: "Swarm",
    globalImportanceExplanation:
      "글로벌 기능 중요도는 모든 요소의 기능 중요도 절대값을 평균하여 계산됩니다(L1 정규화). ",
    multiclassImportanceAddendum:
      "모든 요소는 모든 클래스의 기능 중요도를 계산하는 데 포함되며 차등 가중치가 사용되지 않습니다. 따라서 '클래스 A'가 아닌 것으로 예측된 많은 요소의 큰 음수 중요도가 있는 기능은 해당 기능의 '클래스 A' 중요도를 크게 높입니다."
  },
  Filters: {
    equalComparison: "같음",
    greaterThanComparison: "보다 큼",
    greaterThanEqualToComparison: "크거나 같음",
    lessThanComparison: "보다 작음",
    lessThanEqualToComparison: "작거나 같음",
    inTheRangeOf: "다음 범위 내에 있음",
    categoricalIncludeValues: "포함된 값:",
    numericValue: "값",
    numericalComparison: "연산",
    minimum: "최솟값",
    maximum: "최댓값",
    min: "최소: {0}",
    max: "최대: {0}",
    uniqueValues: "고유 값 개수: {0}"
  },
  Columns: {
    regressionError: "회귀 오류",
    error: "오류",
    classificationOutcome: "분류 결과",
    truePositive: "진양성",
    trueNegative: "참 부정",
    falsePositive: "가양성",
    falseNegative: "거짓 부정",
    dataset: "데이터 세트",
    predictedProbabilities: "예측 가능성",
    none: "개수"
  },
  WhatIf: {
    closeAriaLabel: "닫기",
    defaultCustomRootName: "행 {0}의 복사본",
    filterFeaturePlaceholder: "기능 검색"
  },
  Cohort: {
    cohort: "코호트",
    defaultLabel: "모든 데이터"
  },
  GlobalTab: {
    helperText:
      "전체 모델 예측에 영향을 주는 상위 k개의 중요한 기능을 살펴봅니다(예: 전역 설명). 내림차순 기능 중요도 값을 표시하려면 슬라이더를 사용합니다. 최대 3개의 코호트를 선택하여 해당 기능 중요도 값을 나란히 표시할 수 있습니다. 그래프에서 기능 막대를 클릭하여 선택한 기능의 값이 모델 예측에 영향을 주는 방식을 확인하세요.",
    topAtoB: "상위 {0}~{1}개 기능",
    datasetCohorts: "데이터 세트 코호트",
    legendHelpText: "범례 항목을 클릭하여 플롯에서 코호트를 설정/해제합니다.",
    sortBy: "정렬 기준",
    viewDependencePlotFor: "다음의 종속 플롯 보기:",
    datasetCohortSelector: "데이터 세트 코호트 선택",
    aggregateFeatureImportance: "기능 중요도 집계",
    missingParameters:
      "이 탭에서 로컬 기능 중요도 매개 변수를 제공해야 합니다.",
    weightOptions: "클래스 중요도 가중치",
    dependencePlotTitle: "종속 플롯",
    dependencePlotHelperText:
      "이 종속 플롯은 코호트에서 기능 값과 해당 기능 중요도 간의 관계를 보여 줍니다.",
    dependencePlotFeatureSelectPlaceholder: "기능 선택",
    datasetRequired:
      "종속 플롯에는 평가 데이터 세트 및 로컬 기능 중요도 배열이 필요합니다."
  },
  CohortBanner: {
    dataStatistics: "데이터 통계",
    datapoints: "{0}개 데이터 요소",
    features: "{0}개 기능",
    filters: "{0}개 필터",
    binaryClassifier: "이진 분류자",
    regressor: "회귀 변수",
    multiclassClassifier: "다중 클래스 분류자",
    datasetCohorts: "데이터 세트 코호트",
    editCohort: "코호트 편집",
    duplicateCohort: "코호트 복제",
    addCohort: "코호트 추가",
    copy: " 복사"
  },
  ModelPerformance: {
    helperText:
      "예측 값의 분포와 모델 성능 메트릭 값을 탐색하여 모델의 성능을 평가합니다. 데이터 세트의 여러 코호트 또는 하위 그룹에 대한 성능 비교 분석을 확인하여 모델을 추가로 조사할 수 있습니다. 서로 다른 차원에서 잘라낼 y 값과 x 값을 따라 필터를 선택합니다. 그래프 형식을 변경하려면 그래프의 톱니바퀴를 선택합니다.",
    modelStatistics: "모델 통계",
    cohortPickerLabel: "탐색할 데이터 세트 코호트 선택",
    missingParameters: "이 탭에서 모델의 예측 값 배열을 제공해야 합니다.",
    missingTrueY:
      "모델 성능 통계를 사용하려면 예측 결과와 함께 true 결과가 제공되어야 합니다."
  },
  Charts: {
    yValue: "Y 값",
    numberOfDatapoints: "데이터 요소 수",
    xValue: "X 값",
    rowIndex: "행 인덱스",
    featureImportance: "기능 중요도",
    countTooltipPrefix: "개수: {0}",
    count: "개수 계산",
    featurePrefix: "기능",
    importancePrefix: "중요도",
    cohort: "코호트",
    howToRead: "이 차트를 읽는 방법"
  },
  DatasetExplorer: {
    helperText:
      "X, Y 및 색상 축을 따라 다른 필터를 선택하여 데이터를 다른 차원을 따라 분할함으로써 데이터 세트 통계를 살펴봅니다. 예측 결과, 데이터 세트 기능 및 오류 그룹과 같은 필터를 사용하여 데이터 세트 통계를 분석하려면 위의 데이터 세트 코호트를 만드세요. 그래프의 오른쪽 위 모서리에 있는 톱니 모양 아이콘을 사용하여 그래프 유형을 변경합니다.",
    colorValue: "색 값",
    individualDatapoints: "개별 데이터 요소",
    aggregatePlots: "플롯 집계",
    chartType: "차트 종류",
    missingParameters: "이 탭에서 평가 데이터 세트를 제공해야 합니다.",
    noColor: "없음"
  },
  DependencePlot: {
    featureImportanceOf: "다음의 기능 중요도",
    placeholder:
      "해당 종속 플롯을 표시하려면 위의 가로 막대형 차트에서 기능을 클릭"
  },
  WhatIfTab: {
    helperText:
      '산점도를 클릭하여 데이터 요소를 선택한 후 아래에서 해당 로컬 기능 중요도 값(로컬 설명) 및 개별 ICE(조건부 기대 수준) 플롯을 볼 수 있습니다. 오른쪽에 있는 패널을 사용하여 알려진 데이터 요소의 기능을 약간 변경함으로써 가상 데이터 요소를 만듭니다. 기능 중요도 값은 많은 근사치를 기준으로 하며 예측의 "원인"이 아닙니다. 인과 유추의 엄격한 수학적 견고성이 구현되지 않으면 이 도구를 기준으로 하는 실질적인 의사 결정을 사용자에게 권유하지 않습니다.',
    panelPlaceholder:
      "새 데이터 요소에 대해 예측을 수행하려면 모델이 필요합니다.",
    cohortPickerLabel: "탐색할 데이터 세트 코호트 선택",
    scatterLegendText:
      "범례 항목을 클릭하여 플롯에서 데이터 요소를 설정/해제합니다.",
    realPoint: "실제 데이터 요소",
    noneSelectedYet: "아직 선택한 항목 없음",
    whatIfDatapoints: "가상 데이터 요소",
    noneCreatedYet: "아직 만들어진 항목 없음",
    showLabel: "표시:",
    featureImportancePlot: "기능 중요도 플롯",
    icePlot: "ICE(개별 조건부 예상) 플롯",
    featureImportanceLackingParameters:
      "각 기능이 개별 예측에 영향을 주는 방식을 확인하려면 로컬 기능 중요도를 제공하세요.",
    featureImportanceGetStartedText: "기능 중요도를 확인할 요소 선택",
    iceLackingParameters:
      "가상 데이터 요소에 대해 예측하려면 ICE 플롯에 조작 가능한 모델이 필요합니다.",
    IceGetStartedText:
      "ICE 플롯을 보려면 요소를 선택하거나 가상 요소를 만드세요.",
    whatIfDatapoint: "가상 데이터 요소",
    whatIfHelpText:
      "플롯에서 요소를 선택하거나 작은 변경에 대한 알려진 데이터 요소 인덱스를 수동으로 입력하고 새 가상 요소로 저장합니다.",
    indexLabel: "작은 변경에 대한 데이터 인덱스",
    rowLabel: "행 {0}",
    whatIfNameLabel: "가상 데이터 요소 이름",
    featureValues: "기능 값",
    predictedClass: "예측 클래스: ",
    predictedValue: "예측 값: ",
    probability: "확률: ",
    trueClass: "True 클래스: ",
    trueValue: "True 값: ",
    "trueValue.comment": "회귀에 대한 실제 레이블의 접두사",
    newPredictedClass: "새 예측 클래스: ",
    newPredictedValue: "새 예측 값: ",
    newProbability: "새 확률: ",
    saveAsNewPoint: "새 요소로 저장",
    saveChanges: "변경 내용 저장",
    loading: "로드 중...",
    classLabel: "클래스: {0}",
    minLabel: "최소",
    maxLabel: "최대",
    stepsLabel: "단계",
    disclaimer:
      '고지 사항: 이는 많은 근사치를 기반으로 한 설명이며 예측의 "원인"이 아닙니다. 인과 추론의 엄격한 수학적 견고성 없이는 이 도구를 기반으로 하여 실제 의사 결정을 하지 않는 것이 좋습니다.',
    missingParameters: "이 탭에서 평가 데이터 세트를 제공해야 합니다.",
    selectionLimit: "최대 3개 지점 선택",
    classPickerLabel: "클래스",
    tooltipTitleMany: "상위 {0}개의 예측 클래스",
    whatIfTooltipTitle: "가상 예측 클래스",
    tooltipTitleFew: "예측 클래스",
    probabilityLabel: "확률",
    deltaLabel: "델타",
    nonNumericValue: "값은 숫자여야 합니다.",
    icePlotHelperText:
      "ICE 플롯은 선택한 데이터 요소 예측 값이 최솟값과 최댓값 사이의 기능 값 범위를 따라 변경되는 방식을 보여 줍니다."
  },
  CohortEditor: {
    selectFilter: "필터 선택",
    TreatAsCategorical: "범주로 처리",
    addFilter: "필터 추가",
    addedFilters: "추가된 필터",
    noAddedFilters: "아직 추가된 필터 없음",
    defaultFilterState:
      "데이터 세트 코호트에 매개 변수를 추가하려면 필터를 선택하세요.",
    cohortNameLabel: "데이터 세트 코호트 이름",
    cohortNamePlaceholder: "코호트 이름 지정",
    save: "저장",
    delete: "삭제",
    cancel: "취소",
    cohortNameError: "코호트 이름 누락",
    placeholderName: "코호트 {0}"
  },
  AxisConfigDialog: {
    select: "선택",
    ditherLabel: "디더링해야 함",
    selectFilter: "축 값 선택",
    selectFeature: "기능 선택",
    binLabel: "데이터에 범주화 적용",
    TreatAsCategorical: "범주로 처리",
    numOfBins: "bin 수",
    groupByCohort: "코호트로 그룹화",
    selectClass: "클래스 선택",
    countHelperText: "점 수의 히스토그램"
  },
  ValidationErrors: {
    predictedProbability: "예측 가능성",
    predictedY: "예상 Y",
    evalData: "평가 데이터 세트",
    localFeatureImportance: "로컬 기능 중요도",
    inconsistentDimensions:
      "차원이 일관되지 않습니다. {0}은(는) {1}차원인데, {2}차원이어야 합니다.",
    notNonEmpty: "{0} 입력은 비어 있지 않은 배열이 아닙니다.",
    varyingLength:
      "차원이 일관되지 않습니다. {0}에는 다양한 길이의 요소가 포함되어 있습니다.",
    notArray: "{0}은(는) 배열이 아닙니다. {1}차원의 배열이 필요합니다.",
    errorHeader: "일부 입력 매개 변수가 일관되지 않아 사용되지 않음: ",
    datasizeWarning:
      "평가 데이터 세트가 너무 커서 일부 차트에 효과적으로 표시할 수 없습니다. 필터를 추가하여 코호트의 크기를 줄이세요. ",
    datasizeError:
      "선택한 코호트가 너무 큽니다. 필터를 추가하여 코호트의 크기를 줄이세요.",
    addFilters: "필터 추가"
  },
  FilterOperations: {
    equals: " = {0}",
    lessThan: " < {0}",
    greaterThan: " > {0}",
    lessThanEquals: " <= {0}",
    greaterThanEquals: " >= {0}",
    includes: " {0} 포함 ",
    inTheRangeOf: "[ {0} ]",
    overflowFilterArgs: "{0} 외 {1}명"
  },
  Statistics: {
    mse: "MSE: {0}",
    rSquared: "R-제곱: {0}",
    meanPrediction: "평균 예측 {0}",
    accuracy: "정확도: {0}",
    precision: "정밀도: {0}",
    recall: "회수: {0}",
    fpr: "FPR: {0}",
    fnr: "FNR: {0}"
  },
  GlobalOnlyChart: {
    helperText:
      "전체 모델 예측에 영향을 주는 상위 k개의 중요한 기능을 살펴봅니다. 내림차순 기능 중요도를 표시하려면 슬라이더를 사용합니다."
  },
  ExplanationSummary: {
    whatDoExplanationsMean: "이러한 설명은 무엇을 의미하나요?",
    clickHere: "자세한 정보",
    shapTitle: "Shapley 값",
    shapDescription:
      '이 설명자는 모델을 설명하는 게임 이론 방식인 SHAP를 사용합니다. 이 방법은 모델에서 무시를 통해 이러한 기능을 "숨겨" 기능 세트의 중요도를 측정합니다. 자세한 내용을 보려면 아래 링크를 클릭하세요.',
    limeTitle: "LIME(로컬 해석 가능 모델 중립적 설명)",
    limeDescription:
      "이 설명자는 모델의 선형 근사값을 제공하는 LIME을 사용합니다. 설명을 얻으려면 인스턴스를 약간 변경하고, 모델 예측을 가져온 다음, 이러한 예측을 레이블로 사용하여 로컬로 신뢰할 수 있는 스파스 선형 모델을 학습합니다. 이 선형 모델의 가중치는 '기능 중요도'로 사용됩니다. 자세한 내용을 보려면 아래 링크를 클릭하세요.",
    mimicTitle: "모방(전역 서로게이트 설명)",
    mimicDescription:
      "이 설명자는 전역 서로게이트 모델을 학습하여 블랙 박스 모델을 모방하는 개념을 기준으로 합니다. 전역 서로게이트 모델은 모든 블랙 박스 모델 예측 근사치를 가능한 한, 정확하게 구하도록 학습되는 본질적으로 해석 가능한 모델입니다. 기능 중요도 값은 기본 서로게이트 모델(LightGBM, 선형 회귀, 확률적 그라데이션 하강 또는 의사 결정 트리)의 모델 기반 기능 중요도 값입니다.",
    pfiTitle: "PFI(순열 기능 중요도)",
    pfiDescription:
      "이 설명자는 전체 데이터 세트에 대해 한 번에 임의로 데이터의 순서를 섞고 관심 분야 변경의 성능 메트릭(기본 성능 메트릭: 이진 분류의 경우 F1 점수, 다중 클래스 분류의 경우 마이크로 평균이 있는 F1 점수, 회귀의 경우 평균 절대 오차) 크기를 계산합니다. 변경 내용이 클수록 기능은 더 중요합니다. 이 설명자는 기본 모델의 전체 동작도 설명하지만 개별 예측은 설명하지 않습니다. 기능의 기능 중요도 값은 해당 특정 기능을 약간 변경하여 모델 성능의 델타를 나타냅니다."
  }
};

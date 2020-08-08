module.exports = {
  selectPoint: "Wybierz punkt, aby zobaczyć jego lokalne wyjaśnienie",
  defaultClassNames: "Klasa {0}",
  defaultFeatureNames: "Cecha {0}",
  absoluteAverage: "Średnia wartości bezwzględnej",
  predictedClass: "Przewidywana klasa",
  datasetExplorer: "Eksplorator zestawu danych",
  dataExploration: "Eksploracja zestawu danych",
  aggregateFeatureImportance: "Ważność funkcji agregującej",
  globalImportance: "Ważność globalna",
  explanationExploration: "Eksploracja wyjaśnienia",
  individualAndWhatIf: "Ważność poszczególnych funkcji i analiza warunkowa",
  summaryImportance: "Ważność podsumowania",
  featureImportance: "Istotność funkcji",
  featureImportanceOf: "Ważność funkcji {0}",
  perturbationExploration: "Eksploracja perturbacji",
  localFeatureImportance: "Lokalna istotność funkcji",
  ice: "ICE",
  clearSelection: "Wyczyść zaznaczenie",
  feature: "Funkcja:",
  intercept: "Przecięcie",
  modelPerformance: "Wydajność modelu",
  ExplanationScatter: {
    dataLabel: "Dane: {0}",
    importanceLabel: "Ważność: {0}",
    predictedY: "Przewidywana wartość Y",
    index: "Indeks",
    dataGroupLabel: "Dane",
    output: "Wyjściowe",
    probabilityLabel: "Prawdopodobieństwo: {0}",
    trueY: "Prawda Y",
    class: "klasa:",
    xValue: "Wartość X:",
    yValue: "Wartość Y:",
    colorValue: "Kolor:",
    count: "Liczba"
  },
  CrossClass: {
    label: "Waga wieloklasowa:",
    info: "Informacje o obliczeniach obejmujących wiele klas",
    overviewInfo:
      "Modele wieloklasowe generują dla każdej klasy niezależny wektor istotności funkcji. Wektor istotności funkcji każdej klasy wskazuje, które funkcje powodują, że klasa jest mniej lub bardziej prawdopodobna. Możesz wybrać, w jaki sposób wagi wektorów istotności funkcji każdej klasy są podsumowywane do pojedynczej wartości:",
    absoluteValInfo:
      "Średnia wartości bezwzględnej: pokazuje sumę ważności cechy dla wszystkich możliwych klas podzieloną przez liczbę klas",
    predictedClassInfo:
      "Przewidywana klasa: pokazuje wartość istotności funkcji dla przewidywanej klasy danego punktu",
    enumeratedClassInfo:
      "Wyliczane nazwy klas: pokazuje tylko określone wartości istotności funkcji klasy dla wszystkich punktów danych.",
    close: "Zamknij",
    crossClassWeights: "Wagi między klasami"
  },
  AggregateImportance: {
    scaledFeatureValue: "Skalowana wartości cechy",
    low: "Niskie",
    high: "Wysoki",
    featureLabel: "Cecha: {0}",
    valueLabel: "Wartość cechy: {0}",
    importanceLabel: "Ważność: {0}",
    predictedClassTooltip: "Przewidywana klasa: {0}",
    trueClassTooltip: "Prawdziwa klasa: {0}",
    predictedOutputTooltip: "Przewidywane dane wyjściowe: {0}",
    trueOutputTooltip: "Prawdziwe dane wyjściowe: {0}",
    topKFeatures: "Cechy Top K:",
    topKInfo: "Jak jest obliczana najwyższa wartość k",
    predictedValue: "Wartość prognozowana",
    predictedClass: "Przewidywana klasa",
    trueValue: "Wartość Prawda",
    trueClass: "Prawdziwa klasa",
    noColor: "Brak",
    tooManyRows:
      "Podany zestaw danych jest większy niż ten wykres może obsłużyć"
  },
  BarChart: {
    classLabel: "Klasa: {0}",
    sortBy: "Sortuj według",
    noData: "Brak danych",
    absoluteGlobal: "Bezwzględne globalnie",
    absoluteLocal: "Bezwzględne lokalnie",
    calculatingExplanation: "Obliczanie wyjaśnienia"
  },
  IcePlot: {
    numericError: "Musi być liczbą",
    integerError: "Musi być liczbą całkowitą",
    prediction: "Przewidywanie",
    predictedProbability: "Przewidywane prawdopodobieństwo",
    predictionLabel: "Przewidywanie: {0}",
    probabilityLabel: "Prawdopodobieństwo: {0}",
    noModelError:
      "Podaj funkcjonujący model, aby eksplorować przewidywania na wykresach ICE.",
    featurePickerLabel: "Funkcja:",
    minimumInputLabel: "Minimum:",
    maximumInputLabel: "Maksimum:",
    stepInputLabel: "Kroki:",
    loadingMessage: "Trwa ładowanie danych...",
    submitPrompt: "Prześlij zakres, aby wyświetlić wykres ICE",
    topLevelErrorMessage: "Błąd w parametrze",
    errorPrefix: "Wystąpił błąd: {0}"
  },
  PerturbationExploration: {
    loadingMessage: "Trwa ładowanie...",
    perturbationLabel: "Perturbacja:"
  },
  PredictionLabel: {
    predictedValueLabel: "Przewidywana wartość: {0}",
    predictedClassLabel: "Przewidywana klasa: {0}"
  },
  Violin: {
    groupNone: "Brak grupowania",
    groupPredicted: "Przewidywane Y",
    groupTrue: "Prawda Y",
    groupBy: "Grupuj według"
  },
  FeatureImportanceWrapper: {
    chartType: "Typ wykresu:",
    violinText: "Violin",
    barText: "Słupkowy",
    boxText: "Pole",
    beehiveText: "Swarm",
    globalImportanceExplanation:
      "Globalna istotność funkcji jest obliczana przez wyliczenie średniej wartości bezwzględnej istotności funkcji we wszystkich punktach (normalizacja L1). ",
    multiclassImportanceAddendum:
      "Wszystkie punkty są uwzględniane przy obliczaniu ważności cechy dla wszystkich klas, nie są używane żadne wagi różnicujące. W ten sposób cecha, która ma duże negatywne znaczenie dla wielu punktów przewidywanych jako nienależące do klasy „Klasa A”, znacznie zwiększy znaczenie tej cechy w obrębie klasy „Klasa A”."
  },
  Filters: {
    equalComparison: "Równe",
    greaterThanComparison: "Większe niż",
    greaterThanEqualToComparison: "Większe niż lub równe",
    lessThanComparison: "Mniejsze niż",
    lessThanEqualToComparison: "Mniejsze niż lub równe",
    inTheRangeOf: "W zakresie",
    categoricalIncludeValues: "Uwzględnione wartości:",
    numericValue: "Wartość",
    numericalComparison: "Operacja",
    minimum: "Minimum",
    maximum: "Maksimum",
    min: "Min. {0}",
    max: "Maks. {0}",
    uniqueValues: "Liczba unikatowych wartości: {0}"
  },
  Columns: {
    regressionError: "Błąd regresji",
    error: "Błąd",
    classificationOutcome: "Wynik klasyfikacji",
    truePositive: "Wynik prawdziwie dodatni",
    trueNegative: "Wynik prawdziwie ujemny",
    falsePositive: "Wynik fałszywie dodatni",
    falseNegative: "Wynik fałszywie ujemny",
    dataset: "Zestaw danych",
    predictedProbabilities: "Prawdopodobieństwa przewidywania",
    none: "Liczba"
  },
  WhatIf: {
    closeAriaLabel: "Zamknij",
    defaultCustomRootName: "Kopia wiersza {0}",
    filterFeaturePlaceholder: "Wyszukaj funkcje"
  },
  Cohort: {
    cohort: "Kohorta",
    defaultLabel: "Wszystkie dane"
  },
  GlobalTab: {
    helperText:
      "Poznaj pierwsze k najważniejszych cech, które mają wpływ na ogólne przewidywania modelu (inaczej nazywane wyjaśnieniem globalnym). Za pomocą suwaka możesz wyświetlać wartości ważności cech w kolejności malejącej. Wybierz maksymalnie trzy kohorty, aby zobaczyć ich wartości ważności cech obok siebie. Kliknij dowolny pasek cechy na wykresie, aby zobaczyć, jak wartości wybranej cechy wpływają na przewidywania modelu.",
    topAtoB: "Najważniejsze funkcje: {0}–{1}",
    datasetCohorts: "Kohorty zestawów danych",
    legendHelpText:
      "Włącz lub wyłącz kohorty na wykresie, klikając elementy legendy.",
    sortBy: "Sortuj według",
    viewDependencePlotFor: "Wyświetl wykres zależności dla:",
    datasetCohortSelector: "Wybierz kohortę zestawów danych",
    aggregateFeatureImportance: "Ważność funkcji agregującej",
    missingParameters:
      "Na tej karcie musi być podany parametr ważności cechy lokalnej.",
    weightOptions: "Wagi ważności klasy",
    dependencePlotTitle: "Wykresy zależności",
    dependencePlotHelperText:
      "Ten wykres zależności pokazuje relację między wartością cechy a odpowiadającą jej ważnością cechy w kohorcie.",
    dependencePlotFeatureSelectPlaceholder: "Wybierz cechę",
    datasetRequired:
      "Wykresy zależności wymagają zestawu danych oceny i tablicy ważności cech lokalnych."
  },
  CohortBanner: {
    dataStatistics: "Statystyki danych",
    datapoints: "Punkty danych: {0}",
    features: "Funkcje: {0}",
    filters: "Filtry: {0}",
    binaryClassifier: "Klasyfikator binarny",
    regressor: "Regresor",
    multiclassClassifier: "Klasyfikator wieloklasowy",
    datasetCohorts: "Kohorty zestawów danych ",
    editCohort: "Edytuj kohortę",
    duplicateCohort: "Zduplikuj kohortę",
    addCohort: "Dodaj kohortę",
    copy: " kopia"
  },
  ModelPerformance: {
    helperText:
      "Oceń wydajność modelu, badając rozkład wartości prognozowania i wartości metryk wydajności modelu. Możesz dokładniej zbadać model, patrząc na analizę porównawczą jego wydajności w różnych kohortach lub podgrupach zestaw danych. Wybierz filtry wzdłuż wartości y i wartości x, aby przeciąć różne wymiary. Wybierz ikonę koła zębatego na wykresie, aby zmienić typ wykresu.",
    modelStatistics: "Statystyki modelu",
    cohortPickerLabel: "Wybierz kohortę zestawów danych do zbadania",
    missingParameters:
      "Ta karta wymaga, aby była podana tablica przewidywanych wartości z modelu.",
    missingTrueY:
      "Statystyki wydajności modelu wymagają podania prawdziwych wyników oprócz przewidywanych wyników"
  },
  Charts: {
    yValue: "Wartość Y",
    numberOfDatapoints: "Liczba punktów danych",
    xValue: "Wartość X",
    rowIndex: "Indeks wiersza",
    featureImportance: "Ważność funkcji",
    countTooltipPrefix: "Liczba: {0}",
    count: "Liczba",
    featurePrefix: "Funkcja",
    importancePrefix: "Ważność",
    cohort: "Kohorta",
    howToRead: "Jak czytać ten wykres"
  },
  DatasetExplorer: {
    helperText:
      "Eksploruj statystyki zestawów danych, wybierając różne filtry dla osi X, Y i kolorów, aby dzielić dane według różnych wymiarów. Twórz powyżej kohorty zestawów danych, aby analizować statystyki zestawów danych przy użyciu filtrów, takich jak przewidywany wynik, cechy zestawów danych i grupy błędów. Ikona koła zębatego w prawym górnym rogu wykresu umożliwia zmianę typu wykresu.",
    colorValue: "Wartość koloru",
    individualDatapoints: "Poszczególne punkty danych",
    aggregatePlots: "Zagreguj wykresy",
    chartType: "Typ wykresu",
    missingParameters: "Ta karta wymaga dostarczenia zestawu danych oceny.",
    noColor: "Brak"
  },
  DependencePlot: {
    featureImportanceOf: "Ważność funkcji",
    placeholder:
      "Kliknij funkcję na wykresie słupkowym powyżej, aby wyświetlić jej wykres zależności"
  },
  WhatIfTab: {
    helperText:
      "Klikając na wykresie punktowym, możesz wybrać punkt danych, aby wyświetlić poniżej jego lokalne wartości ważności cech (lokalne wyjaśnienie) oraz wykres indywidualnego oczekiwania warunkowego (ICE, individual conditional expectation). Utwórz hipotetyczny, warunkowy punkt danych, korzystając z panelu po prawej stronie w celu zaburzenia cech znanego punktu danych. Wartości ważności cech są oparte na wielu przybliżeniach i nie są „przyczyną” przewidywań. Nie zalecamy użytkownikom podejmowania rzeczywistych decyzji na podstawie informacji z tego narzędzia bez ścisłej matematycznej niezawodności wnioskowania przyczyn.",
    panelPlaceholder:
      "Do utworzenia przewidywań dla nowych punktów danych potrzebny jest model.",
    cohortPickerLabel: "Wybierz kohortę zestawów danych do zbadania",
    scatterLegendText:
      "Włącz lub wyłącz punkty danych na wykresie, klikając elementy legendy.",
    realPoint: "Realne punkty danych",
    noneSelectedYet: "Jeszcze nie wybrano",
    whatIfDatapoints: "Waurnkowe punkty danych",
    noneCreatedYet: "Jeszcze nie utworzono",
    showLabel: "Pokaż:",
    featureImportancePlot: "Wykres ważności funkcji",
    icePlot: "Wykres ICE (individual conditional expectation)",
    featureImportanceLackingParameters:
      "Podaj ważności cech lokalnych, aby zobaczyć, jak każda cecha wpływa na poszczególne przewidywania.",
    featureImportanceGetStartedText:
      "Wybierz punkt, aby wyświetlić ważność funkcji",
    iceLackingParameters:
      "Wykresy ICE wymagają działającego modelu do opracowywania przewidywań dla hipotetycznych punktów danych.",
    IceGetStartedText:
      "Wybierz punkt lub utwórz punkt warunkowy, aby wyświetlić wykresy ICE",
    whatIfDatapoint: "Warunkowy punkt danych",
    whatIfHelpText:
      "Wybierz punkt na wykresie lub ręcznie wprowadź znany indeks punktu danych do zakłócenia i zapisz jako nowy punkt warunkowy.",
    indexLabel: "Indeks danych do zakłócenia",
    rowLabel: "Wiersz {0}",
    whatIfNameLabel: "Nazwa warunkowego punktu danych",
    featureValues: "Wartości funkcji",
    predictedClass: "Przewidywana klasa:",
    predictedValue: "Przewidywana wartość:",
    probability: "Prawdopodobieństwo:",
    trueClass: "Prawdziwa klasa:",
    trueValue: "Prawdziwa wartość:",
    "trueValue.comment":
      "prefiks do rzeczywistej etykiety na potrzeby regresji",
    newPredictedClass: "Nowa przewidywana klasa:",
    newPredictedValue: "Nowa przewidywana wartość: ",
    newProbability: "Nowe prawdopodobieństwo: ",
    saveAsNewPoint: "Zapisz jako nowy punkt",
    saveChanges: "Zapisz zmiany",
    loading: "Trwa ładowanie...",
    classLabel: "Klasa: {0}",
    minLabel: "Minimum",
    maxLabel: "Maksimum",
    stepsLabel: "Kroki",
    disclaimer:
      "Zastrzeżenie: Te wyjaśnienia są oparte na wielu przybliżeniach i nie są „przyczyną” przewidywań. Bez dobrej znajomości matematycznej złożoności wnioskowania przyczynowego nie radzimy użytkownikom podejmować rzeczywistych decyzji w oparciu o to narzędzie.",
    missingParameters: "Ta karta wymaga dostarczenia zestawu danych oceny.",
    selectionLimit: "Maksymalnie 3 wybrane punkty",
    classPickerLabel: "Klasa",
    tooltipTitleMany: "Najważniejsze przewidywane klasy ({0})",
    whatIfTooltipTitle: "Warunkowe przewidywane klasy",
    tooltipTitleFew: "Przewidywane klasy",
    probabilityLabel: "Prawdopodobieństwo",
    deltaLabel: "Delta",
    nonNumericValue: "Wartość powinna być liczbowa",
    icePlotHelperText:
      "Wykresy ICE przedstawiają, jak wartości przewidywań wybranych punktów danych zmieniają się w zależności od wartości cechy z zakresu od minimalnej do maksymalnej."
  },
  CohortEditor: {
    selectFilter: "Wybierz filtr",
    TreatAsCategorical: "Traktuj jako kategorie",
    addFilter: "Dodaj filtr",
    addedFilters: "Dodane filtry",
    noAddedFilters: "Nie dodano jeszcze filtrów",
    defaultFilterState:
      "Wybierz filtr, aby dodać parametry do kohorty zestawów danych.",
    cohortNameLabel: "Nazwa kohorty zestawu danych",
    cohortNamePlaceholder: "Nazwij kohortę",
    save: "Zapisz",
    delete: "Usuń",
    cancel: "Anuluj",
    cohortNameError: "Brak nazwy kohorty",
    placeholderName: "Kohorta {0}"
  },
  AxisConfigDialog: {
    select: "Wybierz",
    ditherLabel: "Powinny być symulowane",
    selectFilter: "Wybierz wartość osi",
    selectFeature: "Wybierz funkcję",
    binLabel: "Zastosuj pakowanie do danych",
    TreatAsCategorical: "Traktuj jako kategorie",
    numOfBins: "Liczba pojemników",
    groupByCohort: "Grupuj według kohorty",
    selectClass: "Wybierz klasę",
    countHelperText: "Histogram liczby punktów"
  },
  ValidationErrors: {
    predictedProbability: "Przewidywane prawdopodobieństwo",
    predictedY: "Przewidywana wartość Y",
    evalData: "Zestaw danych oceny",
    localFeatureImportance: "Istotność cechy lokalnej",
    inconsistentDimensions:
      "Niespójne wymiary. Element {0} ma wymiary {1}, a oczekiwano wymiarów {2}",
    notNonEmpty: "Dane wejściowe {0} nie są niepustą tablicą",
    varyingLength:
      "Niespójne wymiary. Element {0} ma elementy o różnej długości",
    notArray: "Element {0} nie jest tablicą. Oczekiwano tablicy o wymiarze {1}",
    errorHeader:
      "Niektóre parametry wejściowe były niespójne i nie zostaną użyte: ",
    datasizeWarning:
      "Zestaw danych oceny jest za duży, aby można było go efektywnie wyświetlić na niektórych wykresach. Dodaj filtry, aby zmniejszyć rozmiar kohorty. ",
    datasizeError:
      "Wybrana kohorta jest za duża. Dodaj filtry, aby zmniejszyć jej rozmiar.",
    addFilters: "Dodaj filtry"
  },
  FilterOperations: {
    equals: " = {0}",
    lessThan: " < {0}",
    greaterThan: " > {0}",
    lessThanEquals: " <= {0}",
    greaterThanEquals: " >= {0}",
    includes: " obejmuje {0}",
    inTheRangeOf: "[ {0} ]",
    overflowFilterArgs: "{0} i {1} innych"
  },
  Statistics: {
    mse: "Błąd średniokwadratowy: {0}",
    rSquared: "R-kwadrat: {0}",
    meanPrediction: "Średnie przewidywanie {0}",
    accuracy: "Dokładność: {0}",
    precision: "Precyzja: {0}",
    recall: "Kompletność: {0}",
    fpr: "Współczynnik wyników fałszywie dodatnich: {0}",
    fnr: "Współczynnik wyników fałszywie ujemnych: {0}"
  },
  GlobalOnlyChart: {
    helperText:
      "Poznaj „top k” ważnych cech, które wpływają na ogólne przewidywania modelu. Użyj suwaka, aby wyświetlić malejące ważności cech."
  },
  ExplanationSummary: {
    whatDoExplanationsMean: "Co oznaczają te wyjaśnienia?",
    clickHere: "Dowiedz się więcej",
    shapTitle: "Wartości Shapleya",
    shapDescription:
      "Ten element wyjaśniający używa podejścia SHAP, czyli podejścia z zakresu teorii gier do wyjaśniania modeli, w którym ważność cech jest mierzona przez „ukrywanie” tych cech w modelu za pomocą marginalizacji. Kliknij poniższy link, aby dowiedzieć się więcej.",
    limeTitle:
      "Lokalne, interpretowalne wyjaśnienia niezależne od modelu (LIME)",
    limeDescription:
      "Ten element wyjaśniający używa lokalnych, interpretowalnych wyjaśnień niezależnych od modelu (LIME, Local Interpretable Model-Agnostic Explanations), które zapewniają liniową aproksymację modelu. Aby uzyskać wyjaśnienie, wykonujemy następujące czynności: zaburzamy wystąpienie i pobieramy przewidywania modelu, a następnie używamy tych przewidywań jako etykiet, aby nauczyć rozrzedzony model liniowy, który jest wierny lokalnie. Wagi tego modelu liniowego są używane jako ważności cech. Kliknij poniższy link, aby dowiedzieć się więcej.",
    mimicTitle: "Naśladowanie (globalne wyjaśnienia zastępcze)",
    mimicDescription:
      "Ten element wyjaśniający jest oparty na trenowaniu globalnych modeli zastępczych naśladujących modele czarnej skrzynki. Globalny model zastępczy to wewnętrznie interpretowalny model wytrenowany do jak najdokładniejszej aproksymacji przewidywań dowolnego modelu czarnej skrzynki. Wartości ważności cech to oparte na modelu wartości ważności cech podstawowego modelu zastępczego (LightGBM, regresja liniowa, stochastyczny spadek wzdłuż gradientu lub drzewo decyzyjne)",
    pfiTitle: "Ważność cechy za pomocą permutacji",
    pfiDescription:
      "Ten element wyjaśniający losowo zmienia dane, modyfikując po jednej cesze całego zestawu danych i obliczając, jak bardzo zmienia się badana metryka wydajności (domyślne metryki wydajności: F1 w przypadku klasyfikacji binarnej, miara F1 z mikrośrednią w przypadku klasyfikacji wielu klas oraz średni błąd bezwzględny w przypadku regresji). Im większa zmiana, tym ważniejsza jest cecha. Ten element wyjaśniający może wyjaśnić tylko ogólne zachowanie podstawowego modelu, ale nie wyjaśnia poszczególnych przewidywań. Wartość ważności cechy reprezentuje zmianę wydajności modelu spowodowaną zaburzeniem tej konkretnej cechy."
  }
};

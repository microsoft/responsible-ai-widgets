module.exports = {
  selectPoint: "Välj en punkt om du vill se dess lokala förklaring",
  defaultClassNames: "Klass {0}",
  defaultFeatureNames: "Funktionen {0}",
  absoluteAverage: "Genomsnittligt absolutvärde",
  predictedClass: "Förutsagd klass",
  datasetExplorer: "Datauppsättningsutforskaren",
  dataExploration: "Datauppsättningsutforskning",
  aggregateFeatureImportance: "Mängdfunktionsprioritet",
  globalImportance: "Global betydelse",
  explanationExploration: "Förklaringsutforskning",
  individualAndWhatIf: "Enskild funktions prioritet och What If",
  summaryImportance: "Sammanfattningsbetydelse",
  featureImportance: "Funktionsrelevans",
  featureImportanceOf: "Funktionsprioritet för {0}",
  perturbationExploration: "Störningsutforskning",
  localFeatureImportance: "Lokal funktionsrelevans",
  ice: "ICE",
  clearSelection: "Rensa val",
  feature: "Funktion:",
  intercept: "Skärningspunkt",
  modelPerformance: "Modellprestanda",
  ExplanationScatter: {
    dataLabel: "Data: {0}",
    importanceLabel: "Relevans: {0}",
    predictedY: "Förutsade Y",
    index: "Index",
    dataGroupLabel: "Data",
    output: "Utdata",
    probabilityLabel: "Sannolikhet: {0}",
    trueY: "Sant Y",
    class: "klass: ",
    xValue: "X-värde:",
    yValue: "Y-värde:",
    colorValue: "Färg:",
    count: "Antal"
  },
  CrossClass: {
    label: "Klassomfattande vägning:",
    info: "Information om korsklassberäkning",
    overviewInfo:
      "Multiklassmodeller skapar en oberoende funktionsrelevansvektor för varje klass. Varje klass funktionsrelevansvektor visar vilka funktioner som gör klassen mer eller mindre sannolik. Du kan välja hur vikterna i funktionsrelevansvektorerna per klass ska summeras till ett enda värde:",
    absoluteValInfo:
      "Genomsnittligt absolutvärde: Visar summan av funktionens betydelse i alla möjliga klasser, delat med antalet klasser",
    predictedClassInfo:
      "Förutsagd klass: Visar funktionsrelevansvärdet för en angiven punkts förutsagda klass",
    enumeratedClassInfo:
      "Uppräknade klassnamn: Visar endast funktionsrelevansen för alla datapunkter för den angivna klassens funktion.",
    close: "Stäng",
    crossClassWeights: "Vikter över klasser"
  },
  AggregateImportance: {
    scaledFeatureValue: "Skalat funktionsvärde",
    low: "Låg",
    high: "Hög",
    featureLabel: "Funktion: {0}",
    valueLabel: "Funktionsvärde: {0}",
    importanceLabel: "Relevans: {0}",
    predictedClassTooltip: "Förutsagd klass: {0}",
    trueClassTooltip: "Sann klass: {0}",
    predictedOutputTooltip: "Förutsagda utdata: {0}",
    trueOutputTooltip: "Sanna utdata: {0}",
    topKFeatures: "K-toppfunktioner:",
    topKInfo: "Hur beräknas högsta K",
    predictedValue: "Förutsagt värde",
    predictedClass: "Förutsagd klass",
    trueValue: "Sant värde",
    trueClass: "Sann klass",
    noColor: "Inget",
    tooManyRows:
      "Den tillhandhållna datamängden är större än vad det här diagrammet kan stödja"
  },
  BarChart: {
    classLabel: "Klass: {0}",
    sortBy: "Sortera efter",
    noData: "Inga data",
    absoluteGlobal: "Absolut global",
    absoluteLocal: "Absolut lokal",
    calculatingExplanation: "Beräkna förklaring"
  },
  IcePlot: {
    numericError: "Måste vara numeriskt",
    integerError: "Måste vara ett heltal",
    prediction: "Förutsägelse",
    predictedProbability: "Förutsagd sannolikhet",
    predictionLabel: "Förutsägelse: {0}",
    probabilityLabel: "Sannolikhet: {0}",
    noModelError:
      "Ange en driftsmodell för att utforska förutsägelser i ICE-kurvor.",
    featurePickerLabel: "Funktion:",
    minimumInputLabel: "Minimum:",
    maximumInputLabel: "Maximum:",
    stepInputLabel: "Steg:",
    loadingMessage: "Läser in data …",
    submitPrompt: "Skicka ett intervall så att du kan visa en ICE-rityta",
    topLevelErrorMessage: "Fel i parametern",
    errorPrefix: "Ett fel påträffades: {0}"
  },
  PerturbationExploration: {
    loadingMessage: "Läser in...",
    perturbationLabel: "Störning:"
  },
  PredictionLabel: {
    predictedValueLabel: "Förutsagt värde: {0}",
    predictedClassLabel: "Förutsagd klass: {0}"
  },
  Violin: {
    groupNone: "Ingen gruppering",
    groupPredicted: "Förutsagt Y",
    groupTrue: "Sant Y",
    groupBy: "Gruppera efter"
  },
  FeatureImportanceWrapper: {
    chartType: "Diagramtyp:",
    violinText: "Violin",
    barText: "Liggande",
    boxText: "Ruta",
    beehiveText: "Swarm",
    globalImportanceExplanation:
      "Den globala funktionsrelevansen beräknas genom att det absoluta värdet för funktionsrelevansen för alla punkter (L1-normalisering) beräknas. ",
    multiclassImportanceAddendum:
      "Alla punkter tas med vid beräkning av en funktions betydelse för alla klasser. Ingen differentiell vägning används. Så en funktion som har stor negativ betydelse för många punkter, och som förutsägs inte tillhöra klass A, ökar t.ex. relevansen för funktionens klass A."
  },
  Filters: {
    equalComparison: "Lika med",
    greaterThanComparison: "Större än",
    greaterThanEqualToComparison: "Större än eller lika med",
    lessThanComparison: "Mindre än",
    lessThanEqualToComparison: "Mindre än eller lika med",
    inTheRangeOf: "I intervallet",
    categoricalIncludeValues: "Inkluderade värden:",
    numericValue: "Värde",
    numericalComparison: "Åtgärd",
    minimum: "Minimum",
    maximum: "Max",
    min: "Min: {0}",
    max: "Max: {0}",
    uniqueValues: "antal unika värden: {0}"
  },
  Columns: {
    regressionError: "Regressionsfel",
    error: "Fel",
    classificationOutcome: "Klassificeringsutfall",
    truePositive: "Sant positiv identifiering",
    trueNegative: "Sant negativ identifiering",
    falsePositive: "Falsk positiv identifiering",
    falseNegative: "Falsk negativ identifiering",
    dataset: "Datauppsättning",
    predictedProbabilities: "Förutsägelsesannolikheter",
    none: "Antal"
  },
  WhatIf: {
    closeAriaLabel: "Stäng",
    defaultCustomRootName: "Kopia av rad {0}",
    filterFeaturePlaceholder: "Sök efter funktioner"
  },
  Cohort: {
    cohort: "Kohort",
    defaultLabel: "Alla data"
  },
  GlobalTab: {
    helperText:
      "Utforska de viktigaste k funktionerna som påverkar dina övergripande modellförutsägelser (global förklaring). Använd skjutreglaget för att visa fallande funktionsprioriteter. Välj upp till tre kohorter för att visa deras funktionsprioriteter sida vid sida. Klicka på någon av funktionerna i diagrammet om du vill se hur värdena för den valda funktionen påverkar modellförutsägelse.",
    topAtoB: "Främsta {0}–{1} funktioner",
    datasetCohorts: "Datauppsättningskohorter",
    legendHelpText:
      "Växla kohorter på och av i området genom att klicka på förklaringselementen.",
    sortBy: "Sortera efter",
    viewDependencePlotFor: "Visa beroendediagram för:",
    datasetCohortSelector: "Välj en datauppsättningskohort",
    aggregateFeatureImportance: "Mängdfunktionsprioritet",
    missingParameters:
      "På den här fliken måste prioritetsparametern för den lokala funktionen anges.",
    weightOptions: "Vikter för klassbetydelse",
    dependencePlotTitle: "Beroenderitytor",
    dependencePlotHelperText:
      "Den här beroendekurvan visar förhållandet mellan värdet för en funktion och motsvarande betydelse för funktionen i en kohort.",
    dependencePlotFeatureSelectPlaceholder: "Välj funktion",
    datasetRequired:
      "Beroenderitytor kräver utvärderingsdatauppsättningen och den lokala funktionsviktsmatrisen."
  },
  CohortBanner: {
    dataStatistics: "Datastatistik",
    datapoints: "{0} datapunkter",
    features: "{0} funktioner",
    filters: "{0} filter",
    binaryClassifier: "Binär klassificerare",
    regressor: "Regressor",
    multiclassClassifier: "Multiklass-klassificerare",
    datasetCohorts: "Datauppsättningskohorter",
    editCohort: "Redigera kohort",
    duplicateCohort: "Duplicera kohort",
    addCohort: "Lägg till kohort",
    copy: " kopiera"
  },
  ModelPerformance: {
    helperText:
      "Utvärdera modellens prestanda genom att utforska dina förutsägelsevärden och värdena för modellprestandamåtten. Du kan undersöka din modell ytterligare genom att titta på en jämförande analys av dess prestanda över olika kohorter eller undergrupper av din datauppsättning. Välj filter utmed y-värde och x-värde för att skära över olika dimensioner. Välj växeln i diagrammet om du vill ändra diagramtyp.",
    modelStatistics: "Modellstatistik",
    cohortPickerLabel: "Välj en datauppsättningskohort att utforska",
    missingParameters:
      "Den här fliken kräver att matrisen med förutsagda värden från modellen anges.",
    missingTrueY:
      "Statistik för modellprestanda kräver att de verkliga utfallen anges utöver de förväntade utfallen"
  },
  Charts: {
    yValue: "Y-värde",
    numberOfDatapoints: "Antalet datapunkter",
    xValue: "X-värde",
    rowIndex: "Radindex",
    featureImportance: "Funktionsprioritet",
    countTooltipPrefix: "Antal: {0}",
    count: "Antal",
    featurePrefix: "Funktion",
    importancePrefix: "Prioritet",
    cohort: "Kohort",
    howToRead: "Så här läser du det här diagrammet"
  },
  DatasetExplorer: {
    helperText:
      "Utforska din datauppsättningsstatistik genom att välja olika filter längsmed X-, Y- och färgaxeln för att segmentera dina data längs olika dimensioner. Skapa datauppsättningskohorter ovan för att analysera datauppsättningsstatistik med filter som förutsedda resultat, datauppsättningsfunktioner och felgrupper. Använd kugghjulsikonen i det övre högra hörnet i diagrammet för att ändra diagramtyper.",
    colorValue: "Färgvärde",
    individualDatapoints: "Enskilda datapunkter",
    aggregatePlots: "Sammansatta områden",
    chartType: "Diagramtyp",
    missingParameters:
      "En utvärderingsdatauppsättning krävs för den här fliken.",
    noColor: "Inget"
  },
  DependencePlot: {
    featureImportanceOf: "Funktionsprioritet för",
    placeholder:
      "Klicka på en funktion i stapeldiagrammet ovan för att visa dess beroendekurva"
  },
  WhatIfTab: {
    helperText:
      "Du kan välja en datapunkt genom att klicka på punktdiagrammet för att visa dess lokala funktions prioritetsvärden (lokal förklaring) och ett diagram över enskild villkorsstyrd förväntning (ICE) nedan. Skapa en hypotetiskisk What If-datapunkt genom att använda panelen till höger för att rubba funktioner för en känd datapunkt. Funktionens prioritetsvärden baseras på många approximationer och är inte orsaken till förutsägelserna. Utan strikt matematiskt robusthet av orsakssambandet så uppmanas användare att inte fatta verkliga beslut baserat på det här verktyget.",
    panelPlaceholder:
      "En modell krävs för att göra förutsägelser för nya datapunkter.",
    cohortPickerLabel: "Välj en datauppsättningskohort att utforska",
    scatterLegendText:
      "Växla datapunkter på och av i diagrammet genom att klicka på förklaringselementen.",
    realPoint: "Verkliga datapunkter",
    noneSelectedYet: "Inga har markerats ännu",
    whatIfDatapoints: "What If-datapunkter",
    noneCreatedYet: "Inget har skapats ännu",
    showLabel: "Visa:",
    featureImportancePlot: "Funktionsprioritetskurva",
    icePlot: "Diagram över enskild villkorsstyrd förväntan (ICE)",
    featureImportanceLackingParameters:
      "Ange lokal funktionsrelevans för att se hur varje funktion påverkar enskilda förutsägelser.",
    featureImportanceGetStartedText:
      "Välj en punkt för att visa funktionsprioritet",
    iceLackingParameters:
      "ICE-områden kräver en operationell modell för att göra förutsägelser för hypotetiska datapunkter.",
    IceGetStartedText:
      "Välj en punkt eller skapa en What If-punkt för att visa ICE-kurvor",
    whatIfDatapoint: "What If-datapunkt",
    whatIfHelpText:
      "Välj en punkt i diagrammet eller ange ett okänt datapunktsindex manuellt för perturb och spara som en ny konsekvenspunkt.",
    indexLabel: "Dataindex för perturb",
    rowLabel: "Rad {0}",
    whatIfNameLabel: "What If-datapunktsnamn",
    featureValues: "Funktionsvärden",
    predictedClass: "Förutsagd klass: ",
    predictedValue: "Förutsagt värde: ",
    probability: "Sannolikhet: ",
    trueClass: "Sann klass: ",
    trueValue: "Sant värde: ",
    "trueValue.comment": "prefix till faktisk etikett för regression",
    newPredictedClass: "Ny förutsagd klass: ",
    newPredictedValue: "Nytt förutsagt värde: ",
    newProbability: "Ny sannolikhet: ",
    saveAsNewPoint: "Spara som ny punkt",
    saveChanges: "Spara ändringarna",
    loading: "Läser in...",
    classLabel: "Klass: {0}",
    minLabel: "Min",
    maxLabel: "Max",
    stepsLabel: "Steg",
    disclaimer:
      "Ansvarsfriskrivning: dessa är förklaringar som baseras på många approximationer och är inte orsaken till förutsägelser. Utan en strikt matematiskt robusthet av orsakssamband, så rekommenderar vi inte användare att fatta verkliga beslut baserat på det här verktyget.",
    missingParameters:
      "En utvärderingsdatauppsättning krävs för den här fliken.",
    selectionLimit: "Högst 3 valda punkter",
    classPickerLabel: "Klass",
    tooltipTitleMany: "Viktigaste {0} förväntade klasser",
    whatIfTooltipTitle: "What If förväntade klasser",
    tooltipTitleFew: "Förutsagda klasser",
    probabilityLabel: "Sannolikhet",
    deltaLabel: "Delta",
    nonNumericValue: "Värdet måste vara numeriskt",
    icePlotHelperText:
      "ICE-diagram visar hur den valda datapunktens förutsägelsevärden ändras längs ett intervall med funktionsvärden mellan ett minimi- och maxvärde."
  },
  CohortEditor: {
    selectFilter: "Välj filter",
    TreatAsCategorical: "Hantera som kategorisk",
    addFilter: "Lägg till filter",
    addedFilters: "Tillagda filter",
    noAddedFilters: "Inga filter har lagts till ännu",
    defaultFilterState:
      "Välj ett filter för att lägga till parametrar till din datauppsättningskohort.",
    cohortNameLabel: "Datauppsättningens kohortnamn",
    cohortNamePlaceholder: "Namnge din kohort",
    save: "Spara",
    delete: "Ta bort",
    cancel: "Avbryt",
    cohortNameError: "Kohortnamn saknas",
    placeholderName: "Kohort {0}"
  },
  AxisConfigDialog: {
    select: "Välj",
    ditherLabel: "Ska använda raster",
    selectFilter: "Välj axelvärde",
    selectFeature: "Välj funktion",
    binLabel: "Använd gruppering för data",
    TreatAsCategorical: "Hantera som kategorisk",
    numOfBins: "Antal diskretiseringar",
    groupByCohort: "Gruppera efter kohort",
    selectClass: "Välj klass",
    countHelperText: "Ett histogram med antalet punkter"
  },
  ValidationErrors: {
    predictedProbability: "Förutsagd sannolikhet",
    predictedY: "Förutsade Y",
    evalData: "Utvärderingsdatauppsättning",
    localFeatureImportance: "Lokal funktionsrelevans",
    inconsistentDimensions:
      "Inkonsekventa dimensioner. {0} har dimensionerna {1}, förväntade {2}",
    notNonEmpty: "{0} indata är inte en matris som inte är tom",
    varyingLength:
      "Inkonsekventa dimensioner. {0} har element av varierande längd",
    notArray: "{0} är inte en matris. Förväntad matris med dimensionen {1}",
    errorHeader:
      "Vissa indataparametrar var inkonsekventa och kommer inte att användas: ",
    datasizeWarning:
      "Utvärderingsdatauppsättningen är för stor för att kunna visas effektivt i vissa diagram. Lägg till filter för att minska storleken på kohorten. ",
    datasizeError:
      "Den valda kohorten är för stor. Lägg till filter för att minska storleken på kohorten.",
    addFilters: "Lägg till filter"
  },
  FilterOperations: {
    equals: " = {0}",
    lessThan: " < {0}",
    greaterThan: " > {0}",
    lessThanEquals: "<= {0}",
    greaterThanEquals: " >= {0}",
    includes: " inkluderar {0} ",
    inTheRangeOf: "[ {0} ]",
    overflowFilterArgs: "{0} och {1} andra"
  },
  Statistics: {
    mse: "MSE: {0}",
    rSquared: "R-kvadrat: {0}",
    meanPrediction: "Genomsnittlig förutsägelse {0}",
    accuracy: "Noggrannhet: {0}",
    precision: "Precision: {0}",
    recall: "Träffsäkerhet: {0}",
    fpr: "FPR: {0}",
    fnr: "FNR: {0}"
  },
  GlobalOnlyChart: {
    helperText:
      "Utforska de viktigaste k funktionerna som påverkar dina övergripande modellförutsägelser. Använd skjutreglaget för att visa fallande funktionsvikter."
  },
  ExplanationSummary: {
    whatDoExplanationsMean: "Vad betyder dessa förklaringar?",
    clickHere: "Läs mer",
    shapTitle: "Shapley-värden",
    shapDescription:
      "Den här förklaringen använder SHAP, som är ett spelteoretiskt tillvägagångssätt för att förklara modeller, där betydelsen av funktionsuppsättningar mäts genom att dölja de funktionerna från modellen genom marginalisering. Klicka på länken nedan om du vill läsa mer.",
    limeTitle: "LIME (lokala tolkningsbara modellagnostiska förklaringar)",
    limeDescription:
      "Den här förklaringen använder sig av LIME, vilket ger en linjär approximering av modellen. För att få en förklaring så gör vi följande: rubba instansen, Hämta modellförutsägelser och använd dessa förutsägelser som etiketter för att lära en gles linjär modell som är lokalt trogen. Vikterna för den här linjära modellen används som funktionsbetydelser. Klicka på länken nedan om du vill läsa mer.",
    mimicTitle: "Efterlikna (globala surrogatförklaringar)",
    mimicDescription:
      "Den här förklaringen baseras på idén att träna globala surrogatmodeller att efterlikna svart låda-modeller. En global surrogatmodell är en i sig tolkbar modell som tränas att närma sig förutsägelserna för en svart låda-modell så exakt som möjligt. Funktionsprioritetsvärden är modellbaserade funktionsvärden för den underliggande surrogatmodellen (LightGBM, linjär regression, Stochastic Gradient Descent eller beslutsträd)",
    pfiTitle: "Permuteringsfunktionsprioritet (PFI)",
    pfiDescription:
      "Den här förklaringen blandar slumpmässigt data en funktion i taget för hela datauppsättningen och beräknar hur mycket prestandamåttet för ränta ändras (standard prestandamått: F1 för binär klassificering, F1-poäng med mikromedelvärde för multiklass-klassificering och medelvärde för absolut fel för regression). Ju större ändringen är, desto viktigare är funktionen. Den här förklaringen kan bara förklara den underliggande modellens övergripande beteende, men inte enskilda förutsägelser. Funktionsprioritetsvärdet för en funktion representerar delta i modellens prestanda genom att rubba den funktionen."
  }
};

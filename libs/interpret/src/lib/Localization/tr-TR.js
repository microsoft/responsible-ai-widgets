module.exports = {
    selectPoint: "Yerel açıklamasını görmek için bir nokta seçin",
    defaultClassNames: "{0} sınıfı",
    defaultFeatureNames: "Özellik {0}",
    absoluteAverage: "Mutlak değer ortalaması",
    predictedClass: "Tahmin edilen sınıf",
    datasetExplorer: "Veri Kümesi Gezgini",
    dataExploration: "Veri Kümesi Keşfi",
    aggregateFeatureImportance: "Kümelenmiş Özellik Önem Derecesi",
    globalImportance: "Genel Önem Derecesi",
    explanationExploration: "Açıklama Araştırması",
    individualAndWhatIf: "Tek Özellik Önem Derecesi ve Durum Değerlendirmesi",
    summaryImportance: "Özet Önem Derecesi",
    featureImportance: "Özellik Önem Derecesi",
    featureImportanceOf: "{0} özellik önem derecesi",
    perturbationExploration: "Sapma Araştırması",
    localFeatureImportance: "Yerel Özellik Önem Derecesi",
    ice: "ICE",
    clearSelection: "Seçimi temizle",
    feature: "Özellik:",
    intercept: "kesim noktası",
    modelPerformance: "Model Performansı",
    ExplanationScatter: {
        dataLabel: "Veri: {0}",
        importanceLabel: "Önem derecesi: {0}",
        predictedY: "Tahmin edilen Y",
        index: "Dizin",
        dataGroupLabel: "Veri",
        output: "Çıktı",
        probabilityLabel: "Olasılık: {0}",
        trueY: "Doğru Y",
        class: "sınıf: ",
        xValue: "X değeri:",
        yValue: "Y değeri:",
        colorValue: "Renk:",
        count: "Sayı",
    },
    CrossClass: {
        label: "Sınıflar arası ağırlık:",
        info: "Sınıflar arası hesaplama hakkında bilgiler",
        overviewInfo:
            "Çok sınıflı modeller, her sınıf için bağımsız bir özellik önem derecesi vektörü oluşturur. Her sınıfın özellik önem derecesi vektörü, sınıfı hangi özelliklerin daha olası veya daha az olası yaptığını gösterir. Sınıf başına özellik önem derecesi vektörlerinin ağırlığının tek bir değerde nasıl özetleneceğini seçebilirsiniz:",
        absoluteValInfo:
            "Mutlak değer ortalaması: Özelliğin tüm olası sınıflardaki önem derecesi toplamının sınıf sayısına bölümünü gösterir",
        predictedClassInfo:
            "Tahmin edilen sınıf: Belirli bir noktanın tahmin edilen sınıfı için özellik önem derecesi değerini gösterir",
        enumeratedClassInfo:
            "Listelenen sınıf adları: Tüm veri noktalarında yalnızca belirtilen sınıfın özellik önem derecesi değerlerini gösterir.",
        close: "Kapat",
        crossClassWeights: "Sınıflar arası ağırlıklar",
    },
    AggregateImportance: {
        scaledFeatureValue: "Ölçeklendirilmiş Özellik Değeri",
        low: "Düşük",
        high: "Yüksek",
        featureLabel: "Özellik: {0}",
        valueLabel: "Özellik değeri: {0}",
        importanceLabel: "Önem derecesi: {0}",
        predictedClassTooltip: "Tahmin Edilen Sınıf: {0}",
        trueClassTooltip: "Doğru Sınıf: {0}",
        predictedOutputTooltip: "Tahmin Edilen Çıkış: {0}",
        trueOutputTooltip: "Doğru Çıkış: {0}",
        topKFeatures: "En Yüksek K Özellikleri:",
        topKInfo: "İlk k nasıl hesaplanır?",
        predictedValue: "Tahmin Edilen Değer",
        predictedClass: "Tahmin Edilen Sınıf",
        trueValue: "Gerçek Değer",
        trueClass: "Doğru Sınıf",
        noColor: "Yok",
        tooManyRows: "Sağlanan veri kümesi, bu grafiğin destekleyebileceğinden daha büyük",
    },
    BarChart: {
        classLabel: "Sınıf: {0}",
        sortBy: "Sıralama Ölçütü",
        noData: "Veri Yok",
        absoluteGlobal: "Mutlak genel",
        absoluteLocal: "Mutlak yerel",
        calculatingExplanation: "Açıklama hesaplanıyor",
    },
    IcePlot: {
        numericError: "Sayısal bir değer olmalıdır",
        integerError: "Bir tamsayı olmalıdır",
        prediction: "Tahmin",
        predictedProbability: "Tahmin edilen olasılık",
        predictionLabel: "Tahmin: {0}",
        probabilityLabel: "Olasılık: {0}",
        noModelError: "ICE çizimlerindeki tahminleri keşfetmek için lütfen işlevselleştirilmiş bir model belirtin.",
        featurePickerLabel: "Özellik:",
        minimumInputLabel: "Minimum:",
        maximumInputLabel: "Maksimum:",
        stepInputLabel: "Adımlar:",
        loadingMessage: "Veriler yükleniyor...",
        submitPrompt: "ICE çizimini görüntülemek için bir aralık gönderin",
        topLevelErrorMessage: "Parametrede hata",
        errorPrefix: "Hatayla karşılaşıldı: {0}",
    },
    PerturbationExploration: {
        loadingMessage: "Yükleniyor...",
        perturbationLabel: "Sapma:",
    },
    PredictionLabel: {
        predictedValueLabel: "Tahmin edilen değer: {0}",
        predictedClassLabel: "Tahmin edilen sınıf: {0}",
    },
    Violin: {
        groupNone: "Gruplandırma yok",
        groupPredicted: "Tahmin edilen Y",
        groupTrue: "Doğru Y",
        groupBy: "Gruplandır",
    },
    FeatureImportanceWrapper: {
        chartType: "Grafik türü:",
        violinText: "Keman",
        barText: "Çubuk",
        boxText: "Kutu",
        beehiveText: "Swarm",
        globalImportanceExplanation:
            "Genel özellik önem derecesi, tüm noktaların özellik önem derecelerine ait mutlak değerinin ortalaması alınarak hesaplanır (L1 normalleştirme). ",
        multiclassImportanceAddendum:
            "Tüm sınıflar için özelliğin önem derecesi hesaplanırken tüm noktalar dahil edilir ve fark ağırlığı kullanılmaz Bu nedenle, 'A Sınıfı' olmadığı tahmin edilen çok sayıda nokta için büyük negatif önem derecesine sahip bir özellik, bu özelliğin 'A Sınıfı' önem derecesini büyük ölçüde artırır.",
    },
    Filters: {
        equalComparison: "Eşittir",
        greaterThanComparison: "Büyüktür",
        greaterThanEqualToComparison: "Büyük veya eşit",
        lessThanComparison: "Küçüktür",
        lessThanEqualToComparison: "Küçük veya eşit",
        inTheRangeOf: "Şu aralıkta:",
        categoricalIncludeValues: "Eklenen değerler:",
        numericValue: "Değer",
        numericalComparison: "İşlem",
        minimum: "Minimum",
        maximum: "Maksimum",
        min: "En az: {0}",
        max: "En fazla: {0}",
        uniqueValues: "benzersiz değerlerin sayısı: {0}",
    },
    Columns: {
        regressionError: "Regresyon hatası",
        error: "Hata",
        classificationOutcome: "Sınıflandırma sonucu",
        truePositive: "Gerçek pozitif",
        trueNegative: "Gerçek negatif",
        falsePositive: "Hatalı pozitif sonuç",
        falseNegative: "Hatalı negatif sonuç",
        dataset: "Veri kümesi",
        predictedProbabilities: "Tahmin olasılıkları",
        none: "Sayı",
    },
    WhatIf: {
        closeAriaLabel: "Kapat",
        defaultCustomRootName: "{0} satırının kopyası",
        filterFeaturePlaceholder: "Özelliklerde arama yapın",
    },
    Cohort: {
        cohort: "Kohort",
        defaultLabel: "Tüm veriler",
    },
    GlobalTab: {
        helperText:
            "Genel model tahminlerinizi etkileyen en önemli k özelliği (yani genel açıklama) keşfedin. Azalan özellik önem değerlerini görüntülemek için kaydırıcıyı kullanın. Özellik önem değerlerini yan yana görmek için en fazla üç kohort seçin. Seçilen özelliğin değerlerinin model tahminini nasıl etkilediğini görmek için grafik çubuklarından birine tıklayın.",
        topAtoB: "İlk {0}-{1} özellik",
        datasetCohorts: "Veri kümesi kohortları",
        legendHelpText: "Gösterge öğelerine tıklayarak çizimdeki kohortları açıp kapatın.",
        sortBy: "Sıralama ölçütü:",
        viewDependencePlotFor: "Şunun için bağımlılık çizimini görüntüle:",
        datasetCohortSelector: "Veri kümesi kohortu seçin",
        aggregateFeatureImportance: "Kümelenmiş Özellik Önem Derecesi",
        missingParameters: "Bu sekme için yerel özellik önem derecesi parametresinin sağlanması gerekir.",
        weightOptions: "Sınıf önem ağırlıkları",
        dependencePlotTitle: "Bağımlılık Çizimleri",
        dependencePlotHelperText:
            "Bu bağımlılık çizimi, bir özelliğin değeri ile bir kohort arasındaki özelliğin önem derecesi arasındaki ilişkiyi gösterir.",
        dependencePlotFeatureSelectPlaceholder: "Özellik seçin",
        datasetRequired: "Bağımlılık çizimleri için değerlendirme veri kümesi ve yerel özellik önem dizesi gereklidir.",
    },
    CohortBanner: {
        dataStatistics: "Veri İstatistikleri",
        datapoints: "{0} veri noktası",
        features: "{0} özellik",
        filters: "{0} filtre",
        binaryClassifier: "İkili Sınıflandırıcı",
        regressor: "Regresör",
        multiclassClassifier: "Çoklu Sınıf Sınıflandırıcısı",
        datasetCohorts: "Veri Kümesi Kohortları",
        editCohort: "Kohortu Düzenle",
        duplicateCohort: "Yinelenen Kohort",
        addCohort: "Kohort Ekle",
        copy: " kopyası",
    },
    ModelPerformance: {
        helperText:
            "Tahmin değerlerinizin dağılımını ve model performans ölçümlerinizin değerlerini keşfederek modelinizin performansını değerlendirin. Veri kümenizin farklı kohortlarında veya alt gruplarındaki performansının karşılaştırmalı analizine bakarak modelinizi daha ileri düzeyde araştırabilirsiniz. Farklı boyutlarda kesmek için y değeri ve x değeri boyunca filtreleri seçin. Grafik türünü değiştirmek için grafikteki dişliyi seçin.",
        modelStatistics: "Model İstatistikleri",
        cohortPickerLabel: "Keşfedilecek veri kümesi kohortunu seçin",
        missingParameters: "Bu sekme için modeldeki tahmini değerler dizisinin sağlanması gerekir.",
        missingTrueY:
            "Model performans istatistikleri için tahmini sonuçların yanı sıra, doğru sonuçların da sağlanması gerekir",
    },
    Charts: {
        yValue: "Y değeri",
        numberOfDatapoints: "Veri noktası sayısı",
        xValue: "X değeri",
        rowIndex: "Satır dizini",
        featureImportance: "Özelliğin önem derecesi",
        countTooltipPrefix: "Sayı: {0}",
        count: "Sayı",
        featurePrefix: "Özellik",
        importancePrefix: "Önem derecesi",
        cohort: "Kohort",
        howToRead: "Bu grafiği okuma",
    },
    DatasetExplorer: {
        helperText:
            "Verilerinizi farklı boyutlarda dilimlemek için X, Y ve renk ekseni boyunca farklı filtreler seçerek veri kümesi istatistiklerinizi keşfedin. Veri kümesi istatistiklerini tahmin edilen sonuç, veri kümesi özellikleri ve hata grupları gibi filtrelerle analiz etmek için yukarıda veri kümesi kohortları oluşturun. Grafik türlerini değiştirmek için grafiğin sağ üst köşesindeki dişli simgesini kullanın.",
        colorValue: "Renk değeri",
        individualDatapoints: "Ayrı ayrı veri noktaları",
        aggregatePlots: "Kümelenmiş çizimler",
        chartType: "Grafik türü",
        missingParameters: "Bu sekme için değerlendirme veri kümesi sağlanması gerekir.",
        noColor: "Yok",
    },
    DependencePlot: {
        featureImportanceOf: "Özellik önem derecesi:",
        placeholder: "Bağımlılık çizimini görüntülemek için yukarıdaki çubuk grafiğinde bulunan bir özelliğe tıklayın",
    },
    WhatIfTab: {
        helperText:
            'Aşağıda yerel özellik önem değerlerini (yerel açıklama) ve bireysel koşullu beklenti (ICE) çizimini görüntülemek için dağılıma tıklayarak bir veri noktası seçebilirsiniz. Bilinen bir veri noktasının özelliklerini karıştırmak için sağdaki paneli kullanarak varsayımsal bir durum veri noktası oluşturun. Özellik önem değerleri birçok yaklaşıma dayanır ve tahminlerin "nedeni" değildir. Nedensel çıkarıma dayalı katı matematiksel sağlamlık olmadan, kullanıcıların bu araca dayalı olarak gerçek hayata yönelik kararlar vermelerini önermiyoruz.',
        panelPlaceholder: "Yeni veri noktalarına yönelik tahminlerde bulunmak için bir model gerekir.",
        cohortPickerLabel: "Keşfedilecek veri kümesi kohortunu seçin",
        scatterLegendText: "Gösterge öğelerine tıklayarak çizimdeki veri noktalarını açıp kapatın.",
        realPoint: "Gerçek veri noktaları",
        noneSelectedYet: "Henüz seçilmedi",
        whatIfDatapoints: "Durum değerlendirmesi veri noktaları",
        noneCreatedYet: "Henüz oluşturulmadı",
        showLabel: "Göster:",
        featureImportancePlot: "Özellik önem derecesi çizimi",
        icePlot: "Tek koşullu beklenti (ICE) çizimi",
        featureImportanceLackingParameters:
            "Her bir özelliğin tahminleri nasıl etkilediğini görmek için yerel özellik önem derecelerini belirtin.",
        featureImportanceGetStartedText: "Özellik önem derecesini görüntülemek için bir nokta seçin",
        iceLackingParameters:
            "ICE çizimleri, kuramsal veri noktalarına yönelik tahminler yapmak için kullanıma hazır hale getirilmiş bir model gerektirir.",
        IceGetStartedText:
            "ICE çizimlerini görüntülemek için bir nokta seçin veya Durum değerlendirmesi noktası oluşturun",
        whatIfDatapoint: "Durum değerlendirmesi veri noktası",
        whatIfHelpText:
            "Çizimde bir nokta seçin veya saptırmak ve yeni bir Durum değerlendirmesi noktası olarak kaydetmek için bilinen veri noktası dizinini kendiniz girin.",
        indexLabel: "Karıştırılacak veri dizini",
        rowLabel: "{0}. satır ",
        whatIfNameLabel: "Durum değerlendirmesi veri noktası adı",
        featureValues: "Özellik değerleri",
        predictedClass: "Tahmin edilen sınıf: ",
        predictedValue: "Tahmin edilen değer: ",
        probability: "Olasılık: ",
        trueClass: "Doğru sınıf: ",
        trueValue: "Doğru değer: ",
        "trueValue.comment": "gerileme için gerçek etiket ön eki",
        newPredictedClass: "Tahmin edilen yeni sınıf: ",
        newPredictedValue: "Tahmin edilen yeni değer: ",
        newProbability: "Yeni olasılık: ",
        saveAsNewPoint: "Yeni nokta olarak kaydet",
        saveChanges: "Değişiklikleri kaydet",
        loading: "Yükleniyor...",
        classLabel: "Sınıf: {0}",
        minLabel: "Minimum",
        maxLabel: "Maksimum",
        stepsLabel: "Adımlar",
        disclaimer:
            "Yasal uyarı: Bunlar birçok tahmine dayanan açıklamalar olup tahminlerin “nedeni” değildir. Nedensel çıkarımın sağlam matematiksel temeli olmadan kullanıcıların bu araca dayalı olarak gerçek hayata yönelik karar vermeleri önerilmez.",
        missingParameters: "Bu sekme için değerlendirme veri kümesi sağlanması gerekir.",
        selectionLimit: "En fazla 3 nokta seçilebilir",
        classPickerLabel: "Sınıf",
        tooltipTitleMany: "En iyi {0} tahmin edilen sınıf",
        whatIfTooltipTitle: "Durum tahmini sınıfları",
        tooltipTitleFew: "Tahmin edilen sınıflar",
        probabilityLabel: "Olasılık",
        deltaLabel: "Delta",
        nonNumericValue: "Değer sayısal olmalıdır",
        icePlotHelperText:
            "ICE çizimleri, seçilen veri noktasının tahmin değerlerinin en küçük ve en büyük değerler arasındaki özellik değerleri aralığı boyunca nasıl değiştiğini gösterir.",
    },
    CohortEditor: {
        selectFilter: "Filtre Seçin",
        TreatAsCategorical: "Kategorik olarak işle",
        addFilter: "Filtre Ekle",
        addedFilters: "Eklenen Filtreler",
        noAddedFilters: "Henüz filtre eklenmedi",
        defaultFilterState: "Veri kümesi kohortunuza parametre eklemek için bir filtre seçin.",
        cohortNameLabel: "Veri kümesi kohortu adı",
        cohortNamePlaceholder: "Kohortunuzu adlandırın",
        save: "Kaydet",
        delete: "Sil",
        cancel: "İptal",
        cohortNameError: "Kohort adı eksik",
        placeholderName: "{0} kohortu",
    },
    AxisConfigDialog: {
        select: "Seçin",
        ditherLabel: "Titreşmeli",
        selectFilter: "Eksen değerinizi seçin",
        selectFeature: "Özellik Seçin",
        binLabel: "Verilere gruplama uygula",
        TreatAsCategorical: "Kategorik olarak işle",
        numOfBins: "Bölme sayısı",
        groupByCohort: "Kohorta göre gruplandır",
        selectClass: "Sınıf seçin",
        countHelperText: "Nokta sayısının histogramı",
    },
    ValidationErrors: {
        predictedProbability: "Tahmini olasılık",
        predictedY: "Tahmini Y",
        evalData: "Değerlendirme veri kümesi",
        localFeatureImportance: "Yerel özellik önem derecesi",
        inconsistentDimensions: "Boyutlar tutarsız. {0}, {1} boyutlarına sahip. {2} bekleniyordu",
        notNonEmpty: "{0} girişi, boş olmayan bir dizi değil",
        varyingLength: "Boyutlar tutarsız. {0}, çeşitli uzunlukta öğeler içeriyor",
        notArray: "{0}, bir dizi değil. Beklenen boyut dizisi {1}",
        errorHeader: "Bazı giriş parametreleri tutarsız olduğundan kullanılmayacak: ",
        datasizeWarning:
            "Değerlendirme veri kümesi, bazı grafiklerde etkili bir şekilde görüntülenemeyecek kadar büyük. Lütfen kohortun boyutunu azaltmak için filtreler ekleyin. ",
        datasizeError: "Seçilen kohort çok büyük. Kohortun boyutunu azaltmak için lütfen filtre ekleyin.",
        addFilters: "Filtre ekle",
    },
    FilterOperations: {
        equals: " = {0}",
        lessThan: " < {0}",
        greaterThan: " > {0}",
        lessThanEquals: " <= {0}",
        greaterThanEquals: " >= {0}",
        includes: " {0} içerir ",
        inTheRangeOf: "[ {0} ]",
        overflowFilterArgs: "{0} ve diğer {1} kişi",
    },
    Statistics: {
        mse: "MSE: {0}",
        rSquared: "R-kare: {0}",
        meanPrediction: "Ortalama tahmin {0}",
        accuracy: "Doğruluk: {0}",
        precision: "Duyarlık: {0}",
        recall: "Geri çağırma: {0}",
        fpr: "FPR: {0}",
        fnr: "FNR: {0}",
    },
    GlobalOnlyChart: {
        helperText:
            "Genel model tahminlerinizi etkileyen en önemli k özelliği keşfedin. Azalan özellik önceliklerini göstermek için kaydırıcıyı kullanın.",
    },
    ExplanationSummary: {
        whatDoExplanationsMean: "Bu açıklamalar ne anlama geliyor?",
        clickHere: "Daha fazla bilgi",
        shapTitle: "Shapley değerleri",
        shapDescription:
            'Bu açıklayıcı, modelleri açıklamaya yönelik bir oyun teorisi yaklaşımı olan SHAP\'yi kullanır. Bu yöntemde özellik kümelerinin önemi, bu özellikleri marjinalleştirme yoluyla modelden "gizleyerek" ölçülür. Daha fazla bilgi için aşağıdaki bağlantıya tıklayın.',
        limeTitle: "LIME (Yerel Yorumlanabilir Modelden Bağımsız Açıklamalar)",
        limeDescription:
            "Bu açıklayıcı, modelin doğrusal bir yaklaşımını sağlayan LIME kullanır. Bir açıklama almak için, aşağıdakileri yaparız: örneği karıştırır, model tahminleri alır ve yerel olarak sadık olan seyrek bir doğrusal modeli öğrenmek için bu tahminleri etiket olarak kullanırız. Bu doğrusal modelin ağırlıkları 'özellik önemi' olarak kullanılır. Daha fazla bilgi için aşağıdaki bağlantıya tıklayın.",
        mimicTitle: "Taklit (Genel Vekil Açıklamaları)",
        mimicDescription:
            "Bu açıklayıcı, kara kutu modellerini taklit etmek için küresel vekil modellerini eğitme fikrine dayanmaktadır. Küresel bir vekil modeli, herhangi bir kara kutu modelini mümkün olduğunca doğru olarak tahmin etmek için eğitilmiş içsel olarak yorumlanabilir bir modeldir. Özellik önem değerleri, temel vekil modelinizin (LightGBM veya Lineer Regresyon veya Stokastik Gradyan İniş veya Karar Ağacı) model tabanlı özellik önem değerleridir.",
        pfiTitle: "Permütasyon Özelliği Önem Derecesi (PFI)",
        pfiDescription:
            "Bu açıklayıcı, tüm veri kümesi için verileri tek tek özellik bazında rastgele karıştırır ve ilgilenilen performans ölçümündeki değişim oranını hesaplar (varsayılan performans ölçümleri: ikili sınıflandırma için F1, çok sınıflı sınıflandırma için mikro ortalamalı F1 Puanı ve regresyon için ortalama mutlak hata). Değişiklik ne kadar büyükse, bu özellik o kadar önemlidir. Bu açıklayıcı yalnızca temel modelin genel davranışını açıklayabilir, ancak tek tek tahminleri açıklamaz. Bir özelliğin önem değeri, bu özelliği değiştirerek modelin performansında elde edilen deltayı temsil eder.",
    },
};

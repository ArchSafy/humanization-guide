const componentData = [
    {
        "category":  "نطاقات المشاة",
        "components":  [
                           {
                               "color":  "#e0cba8",
                               "default_width_m":  3,
                               "description":  "مساحة الرصيف المخصصة لجلسات المقاهي وعرض البضائع وتفاعل المشاة.",
                               "id":  "commercial_edge",
                               "name":  "حد تجاري"
                           },
                           {
                               "color":  "#4C7B9C",
                               "default_width_m":  3,
                               "description":  "مسار حركة خالي من العوائق ومخصص بالكامل لحركة المشاة.",
                               "id":  "clear_sidewalk",
                               "name":  "رصيف مشاة"
                           },
                           {
                               "color":  "#c4d1c4",
                               "default_width_m":  1.2,
                               "description":  "منطقة عازلة بين قطع الأراضي السكنية ومسارات المشاة العامة.",
                               "id":  "residential_edge",
                               "name":  "حد سكني"
                           },
                           {
                               "color":  "#909C28",
                               "default_width_m":  1,
                               "description":  "يحتوي على الإنارة، سلال النفايات، اللوحات الإرشادية، والمسطحات الخضراء المنخفضة.",
                               "id":  "urban_furniture_buffer",
                               "name":  "نطاق الأثاث الحضري"
                           },
                           {
                               "color":  "#85c3cc",
                               "default_width_m":  0.5,
                               "description":  "واجهة كورنيش بحرية تحتوي على حواجز حماية وإطلالة بحرية، تتكيف تلقائياً حسب موقعها في الشارع.",
                               "id":  "seafront",
                               "name":  "حد بحري"
                           },
                           {
                               "color":  "#7f8c8d",
                               "default_width_m":  0.5,
                               "description":  "حاجز لحماية المشاة ومنع دخول المركبات إلى الأرصفة.",
                               "id":  "bollard",
                               "name":  "حاجز مشاة (بولارد)"
                           }
                       ]
    },
    {
        "category":  "التنقل والبنية التحتية",
        "components":  [
                            {
                                "color":  "#7B8190",
                                "default_width_m":  0.6,
                                "description":  "فاصل مرسوم بالدهان لفصل اتجاهات الحركة المرورية عند عدم وجود جزيرة وسطية مرتفعة.",
                                "id":  "lane_divider",
                                "name":  "فاصل مسارات (دهان)"
                            },
                            {
                               "color":  "#8AC645",
                               "default_width_m":  1.2,
                               "description":  "مسار دراجات أحادي الاتجاه معزول عن حركة السيارات.",
                               "id":  "bike_lane",
                               "name":  "مسار دراجات"
                           },
                           {
                               "color":  "#9a806e",
                               "default_width_m":  2.5,
                               "description":  "مساحة جانبية متعددة الاستخدامات مهيأة للمواقف أو محطات الحافلات أو التشجير.",
                               "id":  "flex_zone",
                               "name":  "النطاق المرن"
                           },
                           {
                               "color":  "#9a806e",
                               "default_width_m":  5,
                               "description":  "مواقف سيارات مائلة بزاوية 45 درجة لزيادة الطاقة الاستيعابية مقارنة بالمواقف الطولية.",
                               "id":  "parking_45",
                               "name":  "مواقف بزاوية 45°"
                           },
                           {
                               "color":  "#9a806e",
                               "default_width_m":  5.5,
                               "description":  "مواقف سيارات عمودية بزاوية 90 درجة تستوعب أكبر عدد ممكن من السيارات بمحاذاة الرصيف.",
                               "id":  "parking_90",
                               "name":  "مواقف بزاوية 90°"
                           },
                           {
                               "color":  "#909C28",
                               "default_width_m":  2,
                               "description":  "فاصل وسطي يحتوي على إنارة الشارع، التشجير، أو مساحة أمان للمشاة.",
                               "id":  "median_island",
                               "name":  "الجزيرة الوسطية"
                           },
                           {
                               "color":  "#8ca6a2",
                               "default_width_m":  2.7,
                               "description":  "موقف مخصص لحافلات النقل الجماعي، يشتمل على مظلة انتظار ومقاعد للمشاة.",
                               "id":  "bus_station",
                               "name":  "موقف حافلات"
                           }
                       ]
    },
    {
        "category":  "مسارات السيارات",
        "components":  [
                           {
                               "color":  "#cac2c0",
                               "default_width_m":  3,
                               "description":  "حارات مرورية قياسية مخصصة لتدفق حركة المركبات المتنوعة.",
                               "id":  "standard_car_lane",
                               "name":  "مسار سيارات"
                           },
                           {
                               "color":  "#d66c5c",
                               "default_width_m":  3.5,
                               "description":  "حارة مرورية مخصصة للحافلات أو مركبات النقل الجماعي لتحسين الحركة.",
                               "id":  "hov_transit_lane",
                               "name":  "مسار حافلات / نقل سريع"
                           }
                       ]
    }
];

const templatesData = {
    "arterial_waterfront":  [
                                {
                                    "id":  "commercial_edge",
                                    "width":  3
                                },
                                {
                                    "id":  "clear_sidewalk",
                                    "width":  2.2
                                },
                                {
                                    "id":  "urban_furniture_buffer",
                                    "width":  1
                                },
                                {
                                    "id":  "flex_zone",
                                    "width":  2.5
                                },
                                {
                                    "id":  "hov_transit_lane",
                                    "width":  3.5
                                },
                                {
                                    "id":  "standard_car_lane",
                                    "width":  3
                                },
                                {
                                    "id":  "median_island",
                                    "width":  3
                                },
                                {
                                    "id":  "standard_car_lane",
                                    "width":  3
                                },
                                {
                                    "id":  "standard_car_lane",
                                    "width":  3
                                },
                                {
                                    "id":  "hov_transit_lane",
                                    "width":  3.5
                                },
                                {
                                    "id":  "bike_lane",
                                    "width":  1.2
                                },
                                {
                                    "id":  "bike_lane",
                                    "width":  1.2
                                },
                                {
                                    "id":  "urban_furniture_buffer",
                                    "width":  1.5
                                },
                                {
                                    "id":  "clear_sidewalk",
                                    "width":  4
                                },
                                {
                                    "id":  "seafront",
                                    "width":  0.5
                                }
                            ],
    "collector_30m":  [
                          {
                              "id":  "residential_edge",
                              "width":  1.2
                          },
                          {
                              "id":  "clear_sidewalk",
                              "width":  3
                          },
                          {
                              "id":  "urban_furniture_buffer",
                              "width":  0.6
                          },
                          {
                              "id":  "bike_lane",
                              "width":  1.2
                          },
                          {
                              "id":  "flex_zone",
                              "width":  2.5
                          },
                          {
                              "id":  "standard_car_lane",
                              "width":  3
                          },
                          {
                              "id":  "standard_car_lane",
                              "width":  3
                          },
                          {
                              "id":  "median_island",
                              "width":  1
                          },
                          {
                              "id":  "standard_car_lane",
                              "width":  3
                          },
                          {
                              "id":  "standard_car_lane",
                              "width":  3
                          },
                          {
                              "id":  "flex_zone",
                              "width":  2.5
                          },
                          {
                              "id":  "bike_lane",
                              "width":  1.2
                          },
                          {
                              "id":  "urban_furniture_buffer",
                              "width":  0.6
                          },
                          {
                              "id":  "clear_sidewalk",
                              "width":  3
                          },
                          {
                              "id":  "residential_edge",
                              "width":  1.2
                          }
                      ],
    "collector_bus_37m": [
        { "id": "commercial_edge", "width": 3 },
        { "id": "clear_sidewalk", "width": 3 },
        { "id": "bike_lane", "width": 1.2 },
        { "id": "bike_lane", "width": 1.2 },
        { "id": "urban_furniture_buffer", "width": 1 },
        { "id": "bus_station", "width": 2.7 },
        { "id": "hov_transit_lane", "width": 3.5 },
        { "id": "standard_car_lane", "width": 3 },
        { "id": "standard_car_lane", "width": 3 },
        { "id": "median_island", "width": 1.9 },
        { "id": "standard_car_lane", "width": 3 },
        { "id": "standard_car_lane", "width": 3 },
        { "id": "flex_zone", "width": 2.5 },
        { "id": "urban_furniture_buffer", "width": 1 },
        { "id": "clear_sidewalk", "width": 3 },
        { "id": "residential_edge", "width": 1 }
    ],
    "commercial_residential_33m":  [
                                       {
                                           "id":  "commercial_edge",
                                           "width":  3
                                       },
                                       {
                                           "id":  "clear_sidewalk",
                                           "width":  3
                                       },
                                       {
                                           "id":  "bike_lane",
                                           "width":  1.2
                                       },
                                       {
                                           "id":  "urban_furniture_buffer",
                                           "width":  1
                                       },
                                       {
                                           "id":  "flex_zone",
                                           "width":  2.5
                                       },
                                       {
                                           "id":  "standard_car_lane",
                                           "width":  3
                                       },
                                       {
                                           "id":  "standard_car_lane",
                                           "width":  3
                                       },
                                       {
                                           "id":  "median_island",
                                           "width":  2
                                       },
                                       {
                                           "id":  "standard_car_lane",
                                           "width":  3
                                       },
                                       {
                                           "id":  "standard_car_lane",
                                           "width":  3
                                       },
                                       {
                                           "id":  "flex_zone",
                                           "width":  2.5
                                       },
                                       {
                                           "id":  "urban_furniture_buffer",
                                           "width":  1
                                       },
                                       {
                                           "id":  "bike_lane",
                                           "width":  1.2
                                       },
                                       {
                                           "id":  "clear_sidewalk",
                                           "width":  2.4
                                       },
                                       {
                                           "id":  "residential_edge",
                                           "width":  1.2
                                       }
                                   ]
};

const templateNames = {
    "arterial_waterfront":  "طريق رئيسي واجهة بحرية",
    "collector_30m":  "شارع تجميعي",
    "collector_bus_37m": "شارع تجميعي مع موقف حافلات",
    "commercial_residential_33m":  "شارع تجاري سكني"
};

// 3 MOMRAH Functional Categories (Movement - Balanced - Place)
const FUNCTIONAL_CATEGORIES = {
    movement: {
        id: 'movement',
        name: 'طرق الحركة',
        shortLabel: 'حركة',
        focus: 'المركبة',
        icon: 'fa-road',
        badgeBg: '#eef2f6',
        badgeColor: '#334155',
        badgeBorder: 'rgba(51, 65, 85, 0.28)',
        summary: 'نقل حركة المرور لمسافات طويلة وبسرعات ثابتة مع تقليل التقاطعات والفصل التام عن الأنشطة الجانبية'
    },
    balanced: {
        id: 'balanced',
        name: 'طرق التوازن',
        shortLabel: 'توازن',
        focus: 'الموازنة',
        icon: 'fa-arrows-left-right',
        badgeBg: '#e6f4f1',
        badgeColor: '#0f6856',
        badgeBorder: 'rgba(15, 104, 86, 0.28)',
        summary: 'حلقة الوصل بين الحركة والمكان لخدمة الكثافات التجارية والسكنية بسرعات متوسطة وأولوية للنقل العام ومعابر آمنة'
    },
    place: {
        id: 'place',
        name: 'طرق المكان',
        shortLabel: 'مكان',
        focus: 'الإنسان',
        icon: 'fa-people-group',
        badgeBg: '#e8f8f0',
        badgeColor: '#1e8449',
        badgeBorder: 'rgba(30, 132, 73, 0.28)',
        summary: 'وجهات حضرية داخل الأحياء والمناطق المفتوحة تركز على المشاة والتفاعل الاجتماعي بسرعات منخفضة وتشجير وأثاث'
    }
};

// 7 Urban Street Classifications grouped under MOMRAH's 3 Functional Categories
const STREET_CLASSIFICATIONS = {
    shared_pedestrian: {
        id: 'shared_pedestrian',
        functionalCategory: 'place',
        name: 'شارع مشترك / ممر مشاة',
        minWidthM: 6,
        maxWidthM: 15,
        targetHumanPct: 80,
        targetVehiclePct: 20,
        tolerance: 8,
        maxHumanPct: 100,
        minMotorizedLanes: 0,
        targetGreenPct: 16,
        weights: { shading: 0.35, safety: 0.25, quality: 0.40 },
        focusText: 'الأولوية التصميمية: تجربة المشاة الكاملة، التظليل الكثيف، وجودة الفراغ العام والجلوس',
        shadingHint: 'يتطلب تغطية ظل كثيفة للمشاة والمتنزهين',
        safetyHint: 'يعتمد على التهدئة القصوى أو منع المرور العابر',
        qualityHint: 'أعلى أولوية لرحابة الأرصفة والأثاث والواجهات'
    },
    tourist_recreational: {
        id: 'tourist_recreational',
        functionalCategory: 'place',
        name: 'شارع سياحي / ترفيهي',
        minWidthM: 16,
        maxWidthM: 36,
        targetHumanPct: 70,
        targetVehiclePct: 30,
        tolerance: 8,
        maxHumanPct: 88,
        minMotorizedLanes: 1,
        targetGreenPct: 15,
        weights: { shading: 0.35, safety: 0.25, quality: 0.40 },
        focusText: 'الأولوية التصميمية: التجربة البصرية والترفيهية، رحابة الممشى، ومسارات الدراجات',
        shadingHint: 'تظليل مستمر للمسارات الترفيهية ومناطق التنزه',
        safetyHint: 'تهدئة السرعة وحماية المشاة والدراجات',
        qualityHint: 'تركيز عالٍ على الإطلالة والأثاث والأنشطة'
    },
    local_residential: {
        id: 'local_residential',
        functionalCategory: 'place',
        name: 'شارع محلي سكني',
        minWidthM: 12,
        maxWidthM: 20,
        targetHumanPct: 60,
        targetVehiclePct: 40,
        tolerance: 8,
        maxHumanPct: 78,
        minMotorizedLanes: 1,
        targetGreenPct: 14,
        weights: { shading: 0.35, safety: 0.35, quality: 0.30 },
        focusText: 'الأولوية التصميمية: سلامة السكان والأطفال، الخصوصية السكنية، والتهدئة المرورية',
        shadingHint: 'تشجير الأرصفة والارتدادات لتلطيف المناخ المحلي',
        safetyHint: 'تهدئة حارات السيارات ومنع السرعات العالية بالحي',
        qualityHint: 'ارتدادات سكنية منظمة وأرصفة آمنة متصلة'
    },
    commercial: {
        id: 'commercial',
        functionalCategory: 'balanced',
        name: 'شارع تجاري',
        minWidthM: 20,
        maxWidthM: 36,
        targetHumanPct: 50,
        targetVehiclePct: 50,
        tolerance: 8,
        maxHumanPct: 68,
        minMotorizedLanes: 1,
        targetGreenPct: 12,
        weights: { shading: 0.30, safety: 0.30, quality: 0.40 },
        focusText: 'الأولوية التصميمية: التوازن المتساوي بين الأرصفة التجارية النشطة وسعة الوصول والمواقف',
        shadingHint: 'تظليل الواجهات التجارية وممرات التسوق',
        safetyHint: 'تنظيم العلاقة بين المواقف، الحافلات، وحركة المشاة',
        qualityHint: 'أرصفة عريضة وحد تجاري نشط للمقاهي والمتاجر'
    },
    collector: {
        id: 'collector',
        functionalCategory: 'balanced',
        name: 'شارع تجميعي',
        minWidthM: 24,
        maxWidthM: 40,
        targetHumanPct: 35,
        targetVehiclePct: 65,
        tolerance: 7,
        maxHumanPct: 52,
        minMotorizedLanes: 2,
        targetGreenPct: 10,
        weights: { shading: 0.30, safety: 0.45, quality: 0.25 },
        focusText: 'الأولوية التصميمية: حلقة الوصل بين الحركة والمكان بانسيابية متوازنة ونقل عام وأرصفة محمية',
        shadingHint: 'صفوف أشجار منتظمة في الأرصفة والجزيرة الوسطية',
        safetyHint: 'فصل واضح للمشاة والدراجات وجزيرة وسطية آمنة',
        qualityHint: 'استمرارية الأرصفة ومحطات انتظار النقل العام'
    },
    arterial: {
        id: 'arterial',
        functionalCategory: 'movement',
        name: 'شارع شرياني رئيسي',
        minWidthM: 36,
        maxWidthM: 60,
        targetHumanPct: 20,
        targetVehiclePct: 80,
        tolerance: 6,
        maxHumanPct: 36,
        minMotorizedLanes: 2,
        targetGreenPct: 7,
        weights: { shading: 0.25, safety: 0.55, quality: 0.20 },
        focusText: 'الأولوية التصميمية: الانسيابية المرورية العالية مع العزل الآمن للمشاة وتشجير الجزر والأطراف',
        shadingHint: 'تشجير الجزيرة الوسطية والأحزمة الجانبية العازلة',
        safetyHint: 'أولوية قصوى للعزل الفيزيائي والجزيرة وحواجز المشاة',
        qualityHint: 'ممرات مشاة خالية من العوائق ومواقف حافلات معزولة'
    },
    urban_expressway: {
        id: 'urban_expressway',
        functionalCategory: 'movement',
        name: 'محور حضري سريع',
        minWidthM: 60,
        maxWidthM: 120,
        targetHumanPct: 10,
        targetVehiclePct: 90,
        tolerance: 5,
        maxHumanPct: 22,
        minMotorizedLanes: 3,
        targetGreenPct: 5,
        weights: { shading: 0.25, safety: 0.65, quality: 0.10 },
        focusText: 'الأولوية التصميمية: الكفاءة المرورية القصوى للمركبات مع أحزمة خضراء وحواجز حماية جانبية',
        shadingHint: 'أحزمة تشجير بيئية لخفض الضوضاء والانبعاثات',
        safetyHint: 'أقصى وزن للسلامة المرورية والفصل التام عن المركبات',
        qualityHint: 'يقتصر على حواجز الحماية ونطاقات العزل الجانبية'
    }
};

const templateClassMap = {
    "arterial_waterfront": "commercial",
    "collector_30m": "collector",
    "collector_bus_37m": "commercial",
    "commercial_residential_33m": "commercial"
};

let currentStreetClass = 'commercial';

function getActiveStreetClass() {
    return STREET_CLASSIFICATIONS[currentStreetClass] || STREET_CLASSIFICATIONS.commercial;
}

function getActiveFunctionalCategory(cls) {
    const targetCls = cls || getActiveStreetClass();
    return FUNCTIONAL_CATEGORIES[targetCls.functionalCategory] || FUNCTIONAL_CATEGORIES.balanced;
}

function updateClassificationBenchmarkUI() {
    const cls = getActiveStreetClass();
    const cat = getActiveFunctionalCategory(cls);
    const selectEl = document.getElementById('isb-street-class');
    if (selectEl && selectEl.value !== cls.id) {
        selectEl.value = cls.id;
    }

    const stripEl = document.getElementById('isb-class-benchmark-strip');
    const funcBadgeEl = document.getElementById('isb-benchmark-func-badge');
    const nameEl = document.getElementById('isb-benchmark-class-name');
    const focusEl = document.getElementById('isb-benchmark-focus');
    const humanPill = document.getElementById('isb-benchmark-human-pill');
    const vehiclePill = document.getElementById('isb-benchmark-vehicle-pill');
    const widthPill = document.getElementById('isb-benchmark-width-pill');

    if (stripEl) {
        stripEl.style.borderRightColor = cat.badgeColor;
    }
    if (funcBadgeEl) {
        funcBadgeEl.innerHTML = `<i class="fas ${cat.icon}"></i> الغرض الوظيفي: ${cat.name} (التركيز: ${cat.focus})`;
        funcBadgeEl.style.background = cat.badgeBg;
        funcBadgeEl.style.color = cat.badgeColor;
        funcBadgeEl.style.borderColor = cat.badgeBorder;
    }
    if (nameEl) nameEl.textContent = `النمط التفصيلي: ${cls.name}`;
    if (focusEl) focusEl.textContent = cls.focusText;
    if (widthPill) widthPill.innerHTML = `<i class="fas fa-arrows-left-right" style="margin-left: 4px;"></i> العرض المتوقع: ${cls.minWidthM} – ${cls.maxWidthM} م`;
    if (humanPill) humanPill.textContent = `${cls.targetHumanPct}% أنسنة`;
    if (vehiclePill) vehiclePill.textContent = `${cls.targetVehiclePct}% مركبات`;

    const evalBadge = document.getElementById('isb-eval-class-badge');
    const cardPill = document.getElementById('isb-card-class-pill');
    const targetSplitLabel = document.getElementById('isb-target-split-label');
    const targetHumanPctEl = document.getElementById('isb-target-human-pct');
    const targetVehiclePctEl = document.getElementById('isb-target-vehicle-pct');
    const targetHumanBar = document.getElementById('isb-target-human-bar');
    const targetMarker = document.getElementById('isb-target-marker');

    if (evalBadge) {
        evalBadge.textContent = `${cat.name} • ${cls.name}`;
        evalBadge.style.background = cat.badgeBg;
        evalBadge.style.color = cat.badgeColor;
    }
    if (cardPill) cardPill.textContent = `${cat.shortLabel} — ${cls.name}`;
    if (targetSplitLabel) targetSplitLabel.textContent = `المعيار المطلوب (${cls.name}):`;
    if (targetHumanPctEl) targetHumanPctEl.textContent = `${cls.targetHumanPct}% أنسنة`;
    if (targetVehiclePctEl) targetVehiclePctEl.textContent = `${cls.targetVehiclePct}% مركبات`;
    if (targetHumanBar) targetHumanBar.style.width = `${cls.targetHumanPct}%`;
    if (targetMarker) targetMarker.style.right = `calc(${cls.targetHumanPct}% - 1.5px)`;

    // Update Sub-Indicator Weight Pills & Hints
    const shadingW = document.getElementById('isb-shading-weight');
    const safetyW = document.getElementById('isb-safety-weight');
    const qualityW = document.getElementById('isb-quality-weight');
    if (shadingW) shadingW.textContent = `الوزن في هذا التصنيف: ${Math.round(cls.weights.shading * 100)}%`;
    if (safetyW) safetyW.textContent = `الوزن في هذا التصنيف: ${Math.round(cls.weights.safety * 100)}%`;
    if (qualityW) qualityW.textContent = `الوزن في هذا التصنيف: ${Math.round(cls.weights.quality * 100)}%`;

    const shadingH = document.getElementById('isb-shading-hint');
    const safetyH = document.getElementById('isb-safety-hint');
    const qualityH = document.getElementById('isb-quality-hint');
    if (shadingH) shadingH.textContent = cls.shadingHint;
    if (safetyH) safetyH.textContent = cls.safetyHint;
    if (qualityH) qualityH.textContent = cls.qualityHint;
}

function getSuggestedClassesForWidth(widthM) {
    const matches = Object.values(STREET_CLASSIFICATIONS)
        .filter(c => widthM >= c.minWidthM && widthM <= c.maxWidthM)
        .map(c => c.name);
    if (matches.length > 0) {
        return matches.slice(0, 2).join(' أو ');
    }
    if (widthM < 6) return 'شارع مشترك / ممر مشاة';
    if (widthM > 120) return 'محور حضري سريع';
    return '';
}

function updateWidthAdvisoryUI(totalWidth) {
    const cls = getActiveStreetClass();
    const totalWidthEl = document.getElementById('isb-total-width');
    const badgeEl = document.getElementById('isb-width-status-badge');
    const bannerEl = document.getElementById('isb-width-advisory-banner');
    const bannerTextEl = document.getElementById('isb-width-advisory-text');

    const w = Number(totalWidth.toFixed(1));

    if (!sequence || sequence.length === 0 || w <= 0) {
        if (totalWidthEl) {
            totalWidthEl.style.borderColor = 'var(--clr-border)';
            totalWidthEl.style.color = 'var(--clr-primary)';
            totalWidthEl.style.background = 'var(--clr-bg)';
        }
        if (badgeEl) {
            badgeEl.textContent = `* صافي الحرم بدون الارتدادات (المتوقع: ${cls.minWidthM} – ${cls.maxWidthM} م)`;
            badgeEl.style.color = 'var(--clr-text-muted)';
        }
        if (bannerEl) bannerEl.style.display = 'none';
        return;
    }

    const isBelow = w < cls.minWidthM;
    const isAbove = w > cls.maxWidthM;

    if (!isBelow && !isAbove) {
        // Within expected ROW width range
        if (totalWidthEl) {
            totalWidthEl.style.borderColor = '#27ae60';
            totalWidthEl.style.color = '#1e8449';
            totalWidthEl.style.background = '#f0fdf4';
        }
        if (badgeEl) {
            badgeEl.textContent = `✓ ضمن النطاق المتوقع للتصنيف (${cls.minWidthM} – ${cls.maxWidthM} م) * بدون الارتدادات`;
            badgeEl.style.color = '#1e8449';
        }
        if (bannerEl) bannerEl.style.display = 'none';
    } else {
        // Advisory Indication: Net width is outside expected ROW range for selected class
        if (totalWidthEl) {
            totalWidthEl.style.borderColor = '#d97706';
            totalWidthEl.style.color = '#b45309';
            totalWidthEl.style.background = '#fffbeb';
        }
        if (badgeEl) {
            badgeEl.textContent = `⚠ خارج النطاق المتوقع للتصنيف (${cls.minWidthM} – ${cls.maxWidthM} م) * بدون الارتدادات`;
            badgeEl.style.color = '#b45309';
        }
        if (bannerEl && bannerTextEl) {
            const suggested = getSuggestedClassesForWidth(w);
            const suggestionClause = suggested ? ` — قد يتناسب هذا العرض أكثر مع «${suggested}» ما لم يكن شارعاً قائماً بوضع خاص.` : '.';
            if (isBelow) {
                bannerTextEl.textContent = `تنبيه أبعاد استرشادي: صافي عرض الشارع الحالي (${w.toFixed(1)} م) أقل من النطاق المتوقع لتصنيف «${cls.name}» (${cls.minWidthM} – ${cls.maxWidthM} م)${suggestionClause}`;
            } else {
                bannerTextEl.textContent = `تنبيه أبعاد استرشادي: صافي عرض الشارع الحالي (${w.toFixed(1)} م) أكبر من النطاق المتوقع لتصنيف «${cls.name}» (${cls.minWidthM} – ${cls.maxWidthM} م)${suggestionClause}`;
            }
            bannerEl.style.display = 'flex';
        }
    }
}

function onStreetClassChange(classId) {
    if (STREET_CLASSIFICATIONS[classId]) {
        currentStreetClass = classId;
        updateClassificationBenchmarkUI();
        const totalWidth = calculateStreetWidth();
        updateEvaluation(totalWidth);
    }
}
window.onStreetClassChange = onStreetClassChange;

const carModels = [
    {
        "back":  "assets/Cars/Car back Alt 01.png",
        "front":  "assets/Cars/Car front Alt 01.png"
    },
    {
        "back":  "assets/Cars/Car back Alt 02.png",
        "front":  "assets/Cars/Car front Alt 02.png"
    },
    {
        "back":  "assets/Cars/Car back Alt 03.png",
        "front":  "assets/Cars/Car front Alt 03.png"
    }
];

let sequence = [];
let zoomLevel = 1.0;
let scale = 40;
let draggedInstanceId = null;
let dragOverIndex = null;
let carDrawCount = 0;

function calculateStreetWidth() {
    let total = 0;
    sequence.forEach(c => {
        if (c.id !== 'commercial_edge' && c.id !== 'residential_edge' && c.id !== 'seafront') {
            total += c.default_width_m;
        }
    });
    return total;
}

function calculateVisualTotalWidth() {
    let total = 0;
    sequence.forEach(c => {
        total += c.default_width_m;
    });
    return total;
}

function updateStreetHeader(totalWidth) {
    const streetInput = document.getElementById('isb-street-name');
    const renderTitle = document.getElementById('isb-render-title');
    if (!renderTitle) return;
    
    const streetName = (streetInput && streetInput.value.trim()) || "شارع غير مسمى";
    renderTitle.textContent = `${streetName} (${totalWidth.toFixed(1)}م)`;
}

function initSidebar() {
    const sidebar = document.getElementById('isb-sidebar');
    
    componentData.forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.className = 'isb-category';
        
        const catTitle = document.createElement('h3');
        catTitle.textContent = cat.category;
        catDiv.appendChild(catTitle);
        
        const compList = document.createElement('div');
        compList.className = 'isb-components';
        
        cat.components.forEach(comp => {
            const compDiv = document.createElement('div');
            compDiv.className = 'isb-component-item';
            compDiv.draggable = true;
            compDiv.dataset.id = comp.id;
            
            const hideInfoIcon = comp.id === 'commercial_edge' || comp.id === 'residential_edge';
            const infoIconHtml = hideInfoIcon ? '' : `
                <span class="isb-info-icon" style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; border: 1px solid var(--clr-primary); border-radius: 50%; color: var(--clr-primary); font-size: 8px; cursor: pointer; background: transparent; transition: background-color 0.2s;" data-id="${comp.id}" title="عرض المرجع الهندسي">
                    <i class="fas fa-info" style="font-size: 8px;"></i>
                </span>
            `;

            compDiv.innerHTML = `
                <div class="isb-component-header">
                    <span class="isb-component-title">${comp.name}</span>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <span class="isb-component-width">${comp.default_width_m}م</span>
                        ${infoIconHtml}
                    </div>
                </div>
                <div class="isb-component-desc">${comp.description}</div>
            `;
            
            compDiv.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', comp.id);
                e.dataTransfer.effectAllowed = 'copy';
            });

            const infoIcon = compDiv.querySelector('.isb-info-icon');
            if (infoIcon) {
                infoIcon.addEventListener('mouseenter', (e) => {
                    showTooltip(e, comp.id);
                });
                infoIcon.addEventListener('mouseleave', () => {
                    hideTooltip();
                });
            }
            
            compDiv.addEventListener('click', () => {
                const instance = { 
                    ...comp, 
                    instanceId: Date.now() + Math.random(),
                    showLight: (comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') ? true : false
                };
                sequence.push(instance);
                renderSequence();
            });
            
            compList.appendChild(compDiv);
        });
        
        catDiv.appendChild(compList);
        sidebar.appendChild(catDiv); 
    });

}

function getComponentById(id) {
    for (let cat of componentData) {
        for (let comp of cat.components) {
            if (comp.id === id) return comp;
        }
    }
    return null;
}

function getDropIndexFromPointer(clientX) {
    const sequenceContainer = document.getElementById('isb-sequence-container');
    const cards = [...sequenceContainer.querySelectorAll('.isb-sequence-item')].filter(card => {
        return card.dataset.instanceId !== String(draggedInstanceId);
    });
    if (!cards.length) return 0;

    const markerWidth = 18; // 6px width + 12px margins

    const index = cards.findIndex((card, i) => {
        const rect = card.getBoundingClientRect();
        let center = rect.left + rect.width / 2;
        
        if (dragOverIndex !== null && dragOverIndex !== undefined && i >= dragOverIndex) {
            center -= markerWidth;
        }
        
        return clientX < center;
    });

    return index === -1 ? cards.length : index;
}

function updateDragMarker() {
    const container = document.getElementById('isb-sequence-container');
    let marker = document.getElementById('isb-drag-marker');
    
    if (dragOverIndex === null || dragOverIndex === undefined) {
        if (marker) marker.remove();
        return;
    }
    
    if (!marker) {
        marker = document.createElement('div');
        marker.id = 'isb-drag-marker';
        marker.className = 'isb-drop-marker';
    }
    marker.style.height = (80 * zoomLevel) + 'px';
    
    const cards = [...container.querySelectorAll('.isb-sequence-item')];
    if (dragOverIndex >= cards.length) {
        container.appendChild(marker);
    } else {
        container.insertBefore(marker, cards[dragOverIndex]);
    }
}

function moveComponentToIndex(instanceId, targetIndex) {
    const fromIndex = sequence.findIndex(c => c.instanceId === instanceId);
    if (fromIndex < 0) return;
    
    const [moved] = sequence.splice(fromIndex, 1);
    const adjustedIndex = fromIndex < targetIndex ? targetIndex - 1 : targetIndex;
    const safeIndex = Math.max(0, Math.min(adjustedIndex, sequence.length));
    
    sequence.splice(safeIndex, 0, moved);
    renderSequence();
}

function initDropzone() {
    const sequenceContainer = document.getElementById('isb-sequence-container');
    
    sequenceContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = draggedInstanceId ? 'move' : 'copy';
        sequenceContainer.classList.add('drag-over');
        
        const index = getDropIndexFromPointer(e.clientX);
        if (index !== dragOverIndex) {
            dragOverIndex = index;
            updateDragMarker();
        }
    });
    
    sequenceContainer.addEventListener('dragleave', () => {
        sequenceContainer.classList.remove('drag-over');
        dragOverIndex = null;
        updateDragMarker();
    });
    
    sequenceContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        sequenceContainer.classList.remove('drag-over');
        
        const sidebarCompId = e.dataTransfer.getData('text/plain');
        const reorderIdStr = e.dataTransfer.getData('isb/reorder-id');
        
        const index = getDropIndexFromPointer(e.clientX);
        
        if (reorderIdStr) {
            const instanceId = parseFloat(reorderIdStr);
            moveComponentToIndex(instanceId, index);
        } else if (sidebarCompId) {
            const comp = getComponentById(sidebarCompId);
            if (comp) {
                const instance = { 
                    ...comp, 
                    instanceId: Date.now() + Math.random(),
                    showLight: (comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') ? true : false
                };
                sequence.splice(index, 0, instance);
                renderSequence();
            }
        }
        
        draggedInstanceId = null;
        dragOverIndex = null;
        updateDragMarker();
    });
}

function removeComponent(instanceId) {
    sequence = sequence.filter(c => c.instanceId !== instanceId);
    renderSequence();
}

function updateComponentWidth(instanceId, val) {
    const width = parseFloat(val);
    if (isNaN(width) || width < 0.5) return;
    
    const comp = sequence.find(c => c.instanceId === instanceId);
    if (comp) {
        comp.default_width_m = width;
        
        const card = document.querySelector(`.isb-sequence-item[data-instance-id="${instanceId}"]`);
        if (card) {
            card.style.width = (Math.max(80, width * 30) * zoomLevel) + 'px';
        }
        
        const totalWidth = calculateStreetWidth();
        document.getElementById('isb-total-width').textContent = `إجمالي عرض الشارع: ${totalWidth.toFixed(1)} م`;
        updateStreetHeader(totalWidth);
        renderDualView(totalWidth);
        updateEvaluation(totalWidth);
    }
}

let adjustWidthInterval = null;
let adjustWidthTimeout = null;

function startAdjustingWidth(instanceId, delta) {
    stopAdjustingWidth();
    adjustComponentWidth(instanceId, delta);
    adjustWidthTimeout = setTimeout(() => {
        adjustWidthInterval = setInterval(() => {
            adjustComponentWidth(instanceId, delta);
        }, 80);
    }, 350);
}

function stopAdjustingWidth() {
    if (adjustWidthTimeout) {
        clearTimeout(adjustWidthTimeout);
        adjustWidthTimeout = null;
    }
    if (adjustWidthInterval) {
        clearInterval(adjustWidthInterval);
        adjustWidthInterval = null;
    }
}

window.addEventListener('mouseup', stopAdjustingWidth);
window.addEventListener('touchend', stopAdjustingWidth);

function adjustComponentWidth(instanceId, delta) {
    const comp = sequence.find(c => c.instanceId === instanceId);
    if (comp) {
        let newWidth = parseFloat((comp.default_width_m + delta).toFixed(1));
        if (newWidth < 0.5) newWidth = 0.5;
        if (newWidth > 15) newWidth = 15;
        comp.default_width_m = newWidth;
        
        const card = document.querySelector(`.isb-sequence-item[data-instance-id="${instanceId}"]`);
        if (card) {
            const input = card.querySelector('input');
            if (input) input.value = newWidth;
            
            card.style.width = (Math.max(80, newWidth * 30) * zoomLevel) + 'px';
        }
        
        const totalWidth = calculateStreetWidth();
        document.getElementById('isb-total-width').textContent = `إجمالي عرض الشارع: ${totalWidth.toFixed(1)} م`;
        if (typeof updateStreetHeader === 'function') {
            updateStreetHeader(totalWidth);
        }
        renderDualView(totalWidth);
        updateEvaluation(totalWidth);
    }
}

function toggleVegetation(instanceId) {
    const comp = sequence.find(c => c.instanceId === instanceId);
    if (comp) {
        comp.showPalm = !comp.showPalm;
        renderSequence();
    }
}

function toggleLighting(instanceId) {
    const comp = sequence.find(c => c.instanceId === instanceId);
    if (comp) {
        comp.showLight = !comp.showLight;
        renderSequence();
    }
}

function toggleBikeLaneLevel(instanceId) {
    const comp = sequence.find(c => c.instanceId === instanceId);
    if (comp) {
        comp.isStreetLevel = !comp.isStreetLevel;
        renderSequence();
    }
}

function isComponentCarGoingAway(comp, index) {
    if (comp.carDir === 'away') return true;
    if (comp.carDir === 'towards') return false;
    const medianIdx = sequence.findIndex(c => c.id === 'median_island' || c.id === 'lane_divider');
    return medianIdx === -1
        ? (index >= Math.ceil(sequence.length / 2))
        : (index > medianIdx);
}

function toggleCarDirection(instanceId) {
    const idx = sequence.findIndex(c => c.instanceId === instanceId);
    if (idx !== -1) {
        const comp = sequence[idx];
        const currentlyAway = isComponentCarGoingAway(comp, idx);
        comp.carDir = currentlyAway ? 'towards' : 'away';
        renderSequence();
    }
}
window.toggleCarDirection = toggleCarDirection;

function renderSequence() {
    const sequenceContainer = document.getElementById('isb-sequence-container');
    const emptyState = document.getElementById('isb-empty-state');
    const renderArea = document.getElementById('isb-render-area');
    const totalWidthEl = document.getElementById('isb-total-width');
    
    const items = sequenceContainer.querySelectorAll('.isb-sequence-item');
    items.forEach(i => i.remove());
    
    if (sequence.length === 0) {
        emptyState.style.display = 'flex';
        renderArea.style.display = 'none';
        totalWidthEl.textContent = 'إجمالي عرض الشارع: 0.0 م';
        updateStreetHeader(0);
        updateEvaluation(0);
        return;
    }
    
    emptyState.style.display = 'none';
    renderArea.style.display = 'flex';
    
    sequenceContainer.style.padding = (10 * zoomLevel) + 'px';
    sequenceContainer.style.gap = (2 * zoomLevel) + 'px';
    sequenceContainer.style.minHeight = (100 * zoomLevel) + 'px';
    
    let totalWidth = 0;
    
    sequence.forEach((comp, seqIndex) => {
        if (comp.id !== 'commercial_edge' && comp.id !== 'residential_edge' && comp.id !== 'seafront') {
            totalWidth += comp.default_width_m;
        }
        
        const item = document.createElement('div');
        item.className = 'isb-sequence-item';
        item.dataset.instanceId = comp.instanceId;
        
        const hasVeg = comp.id === 'median_island' || comp.id === 'urban_furniture_buffer';
        const hasCarDir = comp.id === 'standard_car_lane' || comp.id === 'flex_zone';
        const hasButtons = hasVeg || comp.id === 'median_island' || comp.id === 'urban_furniture_buffer' || comp.id === 'bike_lane' || hasCarDir;
        const baseWidth = Math.max(80, comp.default_width_m * 30);
        item.style.width = (baseWidth * zoomLevel) + 'px';
        item.style.height = (((hasButtons ? 105 : 80) * zoomLevel)) + 'px';
        item.style.fontSize = (12 * zoomLevel) + 'px';
        item.style.padding = '0';
        item.style.backgroundColor = comp.color;
        item.draggable = true;
        item.addEventListener('dragstart', (e) => {
            draggedInstanceId = comp.instanceId;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('isb/reorder-id', comp.instanceId);
            setTimeout(() => item.style.display = 'none', 0);
        });
        
        // Tooltip is now handled by hover on info icon rather than hover on the whole card
        
        item.addEventListener('dragend', () => {
            draggedInstanceId = null;
            dragOverIndex = null;
            const marker = document.getElementById('isb-drag-marker');
            if (marker) marker.remove();
            renderSequence();
        });
        
        let vegBtnHtml = '';
        if (hasVeg) {
            vegBtnHtml = `
                <button class="isb-toggle-veg-btn" onclick="toggleVegetation(${comp.instanceId})" style="margin-top: 5px; padding: 2px 4px; font-size: ${9 * zoomLevel}px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.15); background: rgba(255,255,255,0.85); cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-weight: bold; color: #333; outline: none; line-height: 1; height: ${18 * zoomLevel}px;">
                    ${comp.showPalm ? 'نخلة 🌴' : 'شجرة 🌳'}
                </button>
            `;
        }

        let lightBtnHtml = '';
        if (comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') {
            lightBtnHtml = `
                <button class="isb-toggle-light-btn" onclick="toggleLighting(${comp.instanceId})" style="margin-top: 5px; padding: 2px 4px; font-size: ${9 * zoomLevel}px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.15); background: rgba(255,255,255,0.85); cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-weight: bold; color: #333; outline: none; line-height: 1; height: ${18 * zoomLevel}px;">
                    ${comp.showLight ? 'إنارة 💡' : 'بدون إنارة 🔌'}
                </button>
            `;
        }

        let bikeLevelBtnHtml = '';
        if (comp.id === 'bike_lane') {
            bikeLevelBtnHtml = `
                <button class="isb-toggle-bike-level-btn" onclick="toggleBikeLaneLevel(${comp.instanceId})" style="margin-top: 5px; padding: 2px 4px; font-size: ${9 * zoomLevel}px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.15); background: rgba(255,255,255,0.85); cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-weight: bold; color: #333; outline: none; line-height: 1; height: ${18 * zoomLevel}px;">
                    ${comp.isStreetLevel ? 'مستوى الشارع 🛣️' : 'مستوى الرصيف 🏙️'}
                </button>
            `;
        }

        let carDirBtnHtml = '';
        if (hasCarDir) {
            const isCarAway = isComponentCarGoingAway(comp, seqIndex);
            carDirBtnHtml = `
                <button class="isb-toggle-car-dir-btn" onclick="toggleCarDirection(${comp.instanceId})" title="تبديل اتجاه الحركة المرورية (ذهاب / عودة)" style="margin-top: 5px; padding: 2px 5px; font-size: ${9 * zoomLevel}px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.18); background: rgba(255,255,255,0.9); cursor: pointer; display: inline-flex; align-items: center; gap: 3px; font-weight: bold; color: #222; outline: none; line-height: 1; height: ${18 * zoomLevel}px;">
                    ${isCarAway ? 'ذهاب ↑ 🚗' : 'عودة ↓ 🚘'}
                </button>
            `;
        }

        const hideInfoBtn = comp.id === 'commercial_edge' || comp.id === 'residential_edge';
        const infoBtnHtml = hideInfoBtn ? '' : `
            <button class="info-btn" style="width: ${18 * zoomLevel}px; height: ${18 * zoomLevel}px; font-size: ${10 * zoomLevel}px;" title="عرض المرجع الهندسي"><i class="fas fa-info"></i></button>
        `;

        item.innerHTML = `
            <button class="remove-btn" style="width: ${18 * zoomLevel}px; height: ${18 * zoomLevel}px; font-size: ${10 * zoomLevel}px;" onclick="removeComponent(${comp.instanceId})"><i class="fas fa-times"></i></button>
            ${infoBtnHtml}
            <div class="isb-card-content-wrapper">
                <div class="isb-card-left-col">
                    <span style="font-size: ${12 * zoomLevel}px; line-height: 1.1;">${comp.name}</span>
                    <input type="number" step="0.1" min="0.5" max="15" draggable="false"
                           value="${comp.default_width_m}" class="isb-card-width-input"
                           style="width: ${54 * zoomLevel}px; font-size: ${11 * zoomLevel}px; height: ${20 * zoomLevel}px; padding: 2px;"
                           oninput="updateComponentWidth(${comp.instanceId}, this.value)"
                           onchange="renderSequence()">
                    <div style="display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; width: 100%;">
                        ${vegBtnHtml}
                        ${lightBtnHtml}
                        ${bikeLevelBtnHtml}
                        ${carDirBtnHtml}
                    </div>
                </div>
                <div class="isb-card-right-col" style="width: ${20 * zoomLevel}px;">
                    <button class="isb-card-arrow-btn up" style="font-size: ${9 * zoomLevel}px;" 
                            onmousedown="startAdjustingWidth(${comp.instanceId}, 0.1)" 
                            onmouseup="stopAdjustingWidth()" 
                            ontouchstart="event.preventDefault(); startAdjustingWidth(${comp.instanceId}, 0.1);" 
                            ontouchend="stopAdjustingWidth()"><i class="fas fa-chevron-up"></i></button>
                    <button class="isb-card-arrow-btn down" style="font-size: ${9 * zoomLevel}px;" 
                            onmousedown="startAdjustingWidth(${comp.instanceId}, -0.1)" 
                            onmouseup="stopAdjustingWidth()" 
                            ontouchstart="event.preventDefault(); startAdjustingWidth(${comp.instanceId}, -0.1);" 
                            ontouchend="stopAdjustingWidth()"><i class="fas fa-chevron-down"></i></button>
                </div>
            </div>
        `;
        
        sequenceContainer.appendChild(item);

        // Bind tooltip listeners to info button on canvas element
        const canvasInfoBtn = item.querySelector('.info-btn');
        if (canvasInfoBtn) {
            canvasInfoBtn.addEventListener('mouseenter', (e) => {
                showTooltip(e, comp.id);
            });
            canvasInfoBtn.addEventListener('mouseleave', () => {
                hideTooltip();
            });
            canvasInfoBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showTooltip(e, comp.id);
            });
        }
    });
    
    totalWidthEl.textContent = `إجمالي عرض الشارع: ${totalWidth.toFixed(1)} م`;
    updateStreetHeader(totalWidth);
    renderDualView(totalWidth);
    updateEvaluation(totalWidth);
}

function createSvgElement(tag, attrs) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (let k in attrs) el.setAttribute(k, attrs[k]);
    return el;
}

function renderDualView(totalWidth) {
    const svg = document.getElementById('isb-svg-canvas');
    svg.innerHTML = '';
    
    const visualTotalWidth = calculateVisualTotalWidth();
    
    let carDrawCount = 0;
    const getCarSize = (model) => {
        const isAlt1 = model.front.includes('Alt 01');
        const scaleFactor = isAlt1 ? 1.3 : 1.0;
        return { w: 75 * scaleFactor, h: 54 * scaleFactor };
    };
    
    const scale = 40; // 40px = 1 meter
    const svgWidth = Math.max(800, visualTotalWidth * scale + 100);
    const svgHeight = 820;
    
    svg.setAttribute('viewBox', `-250 -200 ${svgWidth + 500} 1450`);
    svg.style.width = ((svgWidth + 500) * zoomLevel) + 'px';
    
    const defs = createSvgElement('defs', {});
    const grad = createSvgElement('linearGradient', {
        id: 'isb-sky-gradient',
        x1: '0%',
        y1: '100%',
        x2: '0%',
        y2: '0%'
    });
    const stop1 = createSvgElement('stop', {
        offset: '0%',
        'stop-color': '#e8d8c1',
        'stop-opacity': '0.5'
    });
    const stop2 = createSvgElement('stop', {
        offset: '100%',
        'stop-color': '#e8d8c1',
        'stop-opacity': '0'
    });
    grad.appendChild(stop1);
    grad.appendChild(stop2);
    defs.appendChild(grad);
    svg.appendChild(defs);

    const bgGroup = createSvgElement('g', { id: 'isb-bg-group' });
    const treeGroup = createSvgElement('g', { id: 'isb-tree-group' });
    const fgGroup = createSvgElement('g', { id: 'isb-fg-group' });
    svg.appendChild(bgGroup);
    svg.appendChild(fgGroup);
    
    const startX = 50;
    const elevationY = 220;
    const planY = 380;
    const layerThickness = 30;
    const planHeight = 800;
    
    const fenceScaleForBg = (40 / 362) * 1.3;
    const hasSeafront = sequence.length > 0 && (sequence[0].id === 'seafront' || sequence[sequence.length - 1].id === 'seafront');
    
    const blockWallRightOffset = 1120 * fenceScaleForBg;
    const blockWallLeftOffset = 70 * fenceScaleForBg;
    const buildingWidthForBg = 1191 * fenceScaleForBg;
    const seafrontRightExtension = buildingWidthForBg - blockWallLeftOffset;
    
    const skyLeftX = (sequence.length > 0 && sequence[0].id === 'seafront') ? (startX - blockWallRightOffset) : startX;
    const skyRightX = (sequence.length > 0 && sequence[sequence.length - 1].id === 'seafront') ? (startX + visualTotalWidth * scale + seafrontRightExtension) : (startX + visualTotalWidth * scale);
    const skyWidth = skyRightX - skyLeftX;
    
    const skyBottomY = hasSeafront 
        ? (elevationY + 185 * fenceScaleForBg + 2) 
        : (elevationY + 6);
    
    const skyBg = createSvgElement('rect', {
        x: skyLeftX,
        y: -200,
        width: skyWidth,
        height: skyBottomY - (-200),
        fill: 'url(#isb-sky-gradient)'
    });
    bgGroup.appendChild(skyBg);
    bgGroup.appendChild(treeGroup);
    


    // Calculate leftmost boundary of the drawing dynamically to avoid overlapping background building facades
    let minX = startX;
    if (sequence.length > 0) {
        const firstComp = sequence[0];
        if (firstComp.id === 'commercial_edge') {
            minX = Math.min(minX, startX - 78);
        } else if (firstComp.id === 'residential_edge') {
            minX = Math.min(minX, startX - 53);
        } else if (firstComp.id === 'seafront') {
            const fenceScale = (40 / 362) * 1.3;
            const blockWallRightOffset = 1120 * fenceScale;
            minX = Math.min(minX, startX - blockWallRightOffset);
        }
    }
    const labelX = minX - 20;

    // Side labels moved closer
    fgGroup.appendChild(createSvgElement('text', { x: labelX, y: -170, fill: '#555', 'font-weight': 'bold', 'font-family': "'Cairo', 'Tajawal', sans-serif", 'font-size': '16px', 'text-anchor': 'start' })).textContent = 'قطاع الشارع';
    fgGroup.appendChild(createSvgElement('text', { x: labelX, y: planY - 15, fill: '#555', 'font-weight': 'bold', 'font-family': "'Cairo', 'Tajawal', sans-serif", 'font-size': '16px', 'text-anchor': 'start' })).textContent = 'المخطط الأفقي للشارع';
    
    const peopleAssets = [
        { path: 'assets/People/man 1.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/People/woman 1.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/People/child 1.png', w: 26, h: 50, offsetY: 0 },
        { path: 'assets/People/old man 1.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/People/man 2.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/People/woman 2.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/People/child 2.png', w: 26, h: 50, offsetY: 0 },
        { path: 'assets/People/old man 2.png', w: 32, h: 70, offsetY: 0 }
    ];

    const seededRandom = (seed) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };

    const drawPersonSeeded = (group, x, y, laneSeed, personIdx) => {
        const indices = [0, 1, 2, 3, 4, 5, 6, 7];
        let currentSeed = laneSeed;
        for (let i = indices.length - 1; i > 0; i--) {
            currentSeed = currentSeed + i * 17.3;
            const rand = seededRandom(currentSeed);
            const j = Math.floor(rand * (i + 1));
            const temp = indices[i];
            indices[i] = indices[j];
            indices[j] = temp;
        }
        
        const personIndex = indices[personIdx % indices.length];
        const person = peopleAssets[personIndex];
        const yOffset = 0;
        const offsetY = person.offsetY || 0;
        group.appendChild(createSvgElement('image', {
            href: person.path,
            x: x - person.w / 2,
            y: y + yOffset + offsetY - person.h,
            width: person.w,
            height: person.h,
            preserveAspectRatio: 'xMidYMax meet'
        }));
    };
    
    let currentX = startX;
    
    sequence.forEach((comp, index) => {
        const widthPx = comp.default_width_m * scale;
        
        const medianIdx = sequence.findIndex(c => c.id === 'median_island' || c.id === 'lane_divider');
        const isRightSide = medianIdx === -1 
            ? (index >= Math.ceil(sequence.length / 2))
            : (index > medianIdx);
        const isCarAway = isComponentCarGoingAway(comp, index);
        
        let useBackView = isRightSide;
        if (comp.id === 'bike_lane') {
            const isBikeLane = (idx) => idx >= 0 && idx < sequence.length && sequence[idx].id === 'bike_lane';
            const hasAdjacent = isBikeLane(index - 1) || isBikeLane(index + 1);
            if (hasAdjacent) {
                let startIdx = index;
                while (startIdx > 0 && sequence[startIdx - 1].id === 'bike_lane') {
                    startIdx--;
                }
                const offset = index - startIdx;
                useBackView = (offset % 2 === 1);
            } else {
                useBackView = isRightSide;
            }
        }
        
        const curbHeight = 6;
        const isRaised = comp.id === 'commercial_edge' || 
                         comp.id === 'clear_sidewalk' || 
                         comp.id === 'residential_edge' || 
                         (comp.id === 'bike_lane' && comp.isStreetLevel !== true) || 
                         comp.id === 'urban_furniture_buffer' || 
                         comp.id === 'median_island' ||
                         comp.id === 'seafront' ||
                         comp.id === 'bus_station' ||
                         comp.id === 'bollard';
        const compY = isRaised ? elevationY : elevationY + curbHeight;

        const groundHeight = isRaised ? (layerThickness + curbHeight) : layerThickness;
        const ground = createSvgElement('rect', {
            x: currentX, y: compY, width: widthPx, height: groundHeight, fill: comp.color, stroke: '#fff', 'stroke-width': '1'
        });
        bgGroup.appendChild(ground);
        
        bgGroup.appendChild(createSvgElement('line', {
            x1: currentX,
            y1: compY,
            x2: currentX + widthPx,
            y2: compY,
            stroke: '#333',
            'stroke-width': '2'
        }));
        
        if (index > 0) {
            const prevComp = sequence[index - 1];
            const isPrevRaised = prevComp.id === 'commercial_edge' || 
                                 prevComp.id === 'clear_sidewalk' || 
                                 prevComp.id === 'residential_edge' || 
                                 (prevComp.id === 'bike_lane' && prevComp.isStreetLevel !== true) || 
                                 prevComp.id === 'urban_furniture_buffer' || 
                                 prevComp.id === 'median_island' ||
                                 prevComp.id === 'seafront' ||
                                 prevComp.id === 'bus_station' ||
                                 prevComp.id === 'bollard';
            const prevCompY = isPrevRaised ? elevationY : elevationY + curbHeight;
            
            if (compY !== prevCompY) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: currentX,
                    y1: prevCompY,
                    x2: currentX,
                    y2: compY,
                    stroke: '#333',
                    'stroke-width': '2'
                }));
            }
        }
        
        const centerX = currentX + widthPx / 2;
        const centerY = compY + groundHeight / 2;
        
        const isMobility = comp.id === 'bike_lane' || 
                           comp.id === 'flex_zone' || 
                           comp.id === 'parking_45' || 
                           comp.id === 'parking_90' || 
                           comp.id === 'standard_car_lane' || 
                           comp.id === 'hov_transit_lane';
        
        if (isMobility) {
            let arrowAway = isRightSide;
            if (comp.id === 'standard_car_lane' || comp.id === 'flex_zone') {
                arrowAway = isCarAway;
            } else if (comp.id === 'bike_lane') {
                arrowAway = useBackView;
            }
            const triHeadY = arrowAway ? centerY - 10 : centerY - 3;
            const triBaseY = arrowAway ? centerY - 3 : centerY - 10;
            const triPoints = `${centerX},${triHeadY} ${centerX - 5},${triBaseY} ${centerX + 5},${triBaseY}`;
            
            fgGroup.appendChild(createSvgElement('polygon', {
                points: triPoints,
                fill: '#fff'
            }));
            
            const fontSize = widthPx < 40 ? '9px' : '10px';
            const txt = createSvgElement('text', {
                x: centerX,
                y: centerY + 9,
                fill: '#fff',
                'font-size': fontSize,
                'font-weight': 'bold',
                'text-anchor': 'middle',
                'font-family': "'Tajawal', 'Cairo', sans-serif",
                'style': 'direction: ltr; unicode-bidi: embed;'
            });
            txt.textContent = `${comp.default_width_m}م`;
            fgGroup.appendChild(txt);
        } else {
            const fontSize = widthPx < 40 ? '9px' : '10px';
            const txt = createSvgElement('text', {
                x: centerX,
                y: centerY + 4,
                fill: '#fff',
                'font-size': fontSize,
                'font-weight': 'bold',
                'text-anchor': 'middle',
                'font-family': "'Tajawal', 'Cairo', sans-serif",
                'style': 'direction: ltr; unicode-bidi: embed;'
            });
            txt.textContent = `${comp.default_width_m}م`;
            fgGroup.appendChild(txt);
        }
        
        if (comp.id === 'median_island' || comp.id === 'urban_furniture_buffer') {
            const isMedian = comp.id === 'median_island';
            const scaleFactor = isMedian ? 0.9 : 1.0;
            
            const isPalm = comp.showPalm;
            const imgPath = isPalm 
                ? 'assets/Plantation/palm tree elevation.png'
                : 'assets/Plantation/Tree elevation new 01.png';
                
            const treeW = (isPalm 
                ? 225 * scaleFactor * 1.1 * 2.5 * 0.3
                : 290 * scaleFactor * 1.1) * 1.3;
            const treeH = (isPalm 
                ? 360 * scaleFactor * 1.1 * 2.5 * 0.3
                : 180 * scaleFactor * 1.1) * 1.3;
            const yOffset = isPalm ? 10 : 20;
            
            let treeXOffset = 0;
            
            treeGroup.appendChild(createSvgElement('image', {
                href: imgPath,
                x: currentX + widthPx/2 - treeW/2 + 2 + treeXOffset,
                y: compY - treeH + yOffset,
                width: treeW,
                height: treeH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
            
            // Draw custom light pole if enabled in urban furniture buffer or median island
            if ((comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') && comp.showLight) {
                const isMedian = comp.id === 'median_island';
                const scaleFactor = 0.9;
                const poleH = 340 * scaleFactor;
                const poleW = 222 * scaleFactor;
                const poleXOffset = 0; // Centered, no shift
                
                const poleX = currentX + widthPx/2 - poleW/2 + poleXOffset;
                const poleY = compY - poleH + 4;
                const centerX = currentX + widthPx/2 + poleXOffset;
                
                const imgHref = isMedian 
                    ? 'assets/Lights/Light Pole Double 6m new .png'
                    : 'assets/Lights/Light Pole Double Multi 01 new 3-7 & 6 .png';
                
                const poleAttrs = {
                    href: imgHref,
                    x: poleX,
                    y: poleY,
                    width: poleW,
                    height: poleH,
                    preserveAspectRatio: 'xMidYMax meet'
                };
                
                // Horizontally mirror the pole if it is on the right side of the street (so street side faces center)
                if (!isMedian && isRightSide) {
                    poleAttrs.transform = `translate(${centerX}, 0) scale(-1, 1) translate(${-centerX}, 0)`;
                }
                
                treeGroup.appendChild(createSvgElement('image', poleAttrs));
            }
        } else if (comp.id === 'standard_car_lane') {            if (widthPx >= 160) {
                const model1 = carModels[carDrawCount % carModels.length];
                carDrawCount++;
                const size1 = getCarSize(model1);
                fgGroup.appendChild(createSvgElement('image', {
                    href: comp.carDir ? (isCarAway ? model1.back : model1.front) : model1.front,
                    x: currentX + widthPx/4 - size1.w / 2,
                    y: compY - size1.h,
                    width: size1.w,
                    height: size1.h,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
                const model2 = carModels[carDrawCount % carModels.length];
                carDrawCount++;
                const size2 = getCarSize(model2);                fgGroup.appendChild(createSvgElement('image', {
                    href: comp.carDir ? (isCarAway ? model2.back : model2.front) : model2.back,
                    x: currentX + 3 * widthPx/4 - size2.w / 2,
                    y: compY - size2.h,
                    width: size2.w,
                    height: size2.h,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
            } else {            const model = carModels[carDrawCount % carModels.length];
                carDrawCount++;
                const size = getCarSize(model);
                fgGroup.appendChild(createSvgElement('image', {
                    href: isCarAway ? model.back : model.front,
                    x: currentX + widthPx/2 - size.w / 2,
                    y: compY - size.h,
                    width: size.w,
                    height: size.h,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
            }
        } else if (comp.id === 'hov_transit_lane') {
            const busW = 180;
            const busH = 120;
            fgGroup.appendChild(createSvgElement('image', {
                href: isRightSide ? 'assets/bus back.png' : 'assets/bus front new.png',
                x: currentX + widthPx/2 - busW/2,
                y: compY - busH,
                width: busW,
                height: busH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'flex_zone') {
            const newTreeW = 290 * 1.1 * 0.9 * 1.3;
            const newTreeH = 180 * 1.1 * 0.9 * 1.3;
            // Draw tree in treeGroup (background) so it renders behind the car and light poles
            treeGroup.appendChild(createSvgElement('image', {
                href: 'assets/Plantation/Tree%20elevation%20Opacity%2050%25.png',
                x: currentX + widthPx/2 - newTreeW/2,
                y: compY - newTreeH + 6,
                width: newTreeW,
                height: newTreeH,
                preserveAspectRatio: 'xMidYMax meet'
            }));

            const model = carModels[carDrawCount % carModels.length];
            carDrawCount++;
            const size = getCarSize(model);            
            fgGroup.appendChild(createSvgElement('image', {
                href: isCarAway ? model.back : model.front,
                x: currentX + widthPx/2 - size.w / 2,
                y: compY - size.h,
                width: size.w,
                height: size.h,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'parking_45') {
            const imgPath = isRightSide ? 'assets/Cars/Car 45 right.png' : 'assets/Cars/Car 45 left.png';
            const carW = 150;
            const carH = 60;
            fgGroup.appendChild(createSvgElement('image', {
                href: imgPath,
                x: currentX + widthPx/2 - carW / 2,
                y: compY - carH,
                width: carW,
                height: carH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'parking_90') {
            const imgPath = isRightSide ? 'assets/Cars/car 90 right.png' : 'assets/Cars/car 90 left.png';
            const carW = 160;
            const carH = 57;
            fgGroup.appendChild(createSvgElement('image', {
                href: imgPath,
                x: currentX + widthPx/2 - carW / 2,
                y: compY - carH,
                width: carW,
                height: carH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'bike_lane') {
            const bikeW = 24;
            const bikeH = 70;
            fgGroup.appendChild(createSvgElement('image', {
                href: useBackView ? 'assets/bike back 2.png' : 'assets/bike front 2.png',
                x: currentX + widthPx/2 - bikeW/2,
                y: compY - bikeH,
                width: bikeW,
                height: bikeH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'bus_station') {
            // Fixed physical size: station is always drawn at the default 2.7m width (108px at scale=40)
            // so it doesn't grow/shrink when the user changes the lane width — just like cars/bikes.
            const fixedPx = 2.7 * scale;
            const stationH = fixedPx * (1987 / 1698);
            if (isRightSide) {
                const stationW = fixedPx * (3474 / 1698);
                // Shelter occupies pixels [885, 2583] inside the 3474-wide canvas
                // Align the shelter centre (px 1734) with the lane centre
                const shelterCentreRatio = (885 + 1698 / 2) / 3474;
                const laneCentreX = currentX + widthPx / 2;
                fgGroup.appendChild(createSvgElement('image', {
                    href: 'assets/Bus Station right 02.png',
                    x: laneCentreX - stationW * shelterCentreRatio,
                    y: compY - stationH,
                    width: stationW,
                    height: stationH,
                    preserveAspectRatio: 'none'
                }));
            } else {
                const stationW = fixedPx * (2388 / 1698);
                // Shelter occupies pixels [690, 2387] inside the 2388-wide canvas
                // Align the shelter centre with the lane centre
                const shelterCentreRatio = (690 + 1698 / 2) / 2388;
                const laneCentreX = currentX + widthPx / 2;
                fgGroup.appendChild(createSvgElement('image', {
                    href: 'assets/Bus Station left 03.png',
                    x: laneCentreX - stationW * shelterCentreRatio,
                    y: compY - stationH,
                    width: stationW,
                    height: stationH,
                    preserveAspectRatio: 'none'
                }));
            }
        } else if (comp.id === 'bollard') {
            const bollardW = 24;
            const bollardH = 70;
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/Furniture/Bollard.png',
                x: currentX + widthPx/2 - bollardW/2,
                y: compY - bollardH,
                width: bollardW,
                height: bollardH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'lane_divider') {
            fgGroup.appendChild(createSvgElement('rect', {
                x: currentX + widthPx * 0.1,
                y: compY - 1,
                width: widthPx * 0.3,
                height: 2,
                fill: '#FFD740'
            }));
            fgGroup.appendChild(createSvgElement('rect', {
                x: currentX + widthPx * 0.6,
                y: compY - 1,
                width: widthPx * 0.3,
                height: 2,
                fill: '#FFD740'
            }));
        } else if (comp.id.includes('sidewalk') || comp.id.includes('edge') || comp.id.includes('seafront')) {
            const isSeafront = comp.id === 'seafront';
            if (comp.id === 'residential_edge' || comp.id === 'commercial_edge' || isSeafront) {
                const isComm = comp.id === 'commercial_edge';
                const isSeafrontLeft = isSeafront && !isRightSide;
                const isSeafrontRight = isSeafront && isRightSide;
                
                let imgPath = "";
                let buildingWidth = 0;
                let buildingHeight = 374;
                let leftOffset = 0;
                let rightOffset = 0;
                let buildingX = 0;
                let buildingY = 0;
                
                if (isSeafrontLeft || isSeafrontRight) {
                    imgPath = isSeafrontLeft ? 'assets/Seafront left.png' : 'assets/Seafront right.png';
                    
                    // The fence height in the original image is 362px (from Y=0 to Y=362).
                    // We scale the image by S = (40 / 362) * 1.3 to make it 1.3x larger.
                    const fenceScale = (40 / 362) * 1.3;
                    
                    // Original image size is 1191x814.
                    buildingWidth = 1191 * fenceScale;
                    buildingHeight = 814 * fenceScale;
                    
                    // The fence base (top of concrete block) is at Y = 362 in the original image.
                    // We align the fence base with compY.
                    const fenceBaseOffset = 362 * fenceScale;
                    buildingY = compY - fenceBaseOffset;
                    
                    // For seafront right, the concrete block left wall is at X = 70 in original.
                    // We align it with the right boundary of the component: currentX + widthPx.
                    // For seafront left, the concrete block right wall is at X = 1120 in original.
                    // We align it with the left boundary of the component: currentX.
                    const blockWallLeftOffset = 70 * fenceScale;
                    const blockWallRightOffset = 1120 * fenceScale;
                    
                    buildingX = isSeafrontLeft 
                        ? (currentX - blockWallRightOffset) 
                        : (currentX + widthPx - blockWallLeftOffset);
                } else {
                    imgPath = isComm 
                        ? (isRightSide ? 'assets/Edges/Commercial Coffe Right side.png' : 'assets/Edges/Commercial Coffe Left side.png')
                        : (isRightSide ? 'assets/Edges/Residential right side.png' : 'assets/Edges/Residential Left side.png');
                    
                    buildingWidth = isComm ? (isRightSide ? 262 : 209) : 267;
                    buildingHeight = 374;
                    leftOffset = isComm ? 78 : 53;
                    rightOffset = isComm ? 184 : 214;
                    buildingX = isRightSide ? (currentX + widthPx - rightOffset) : (currentX - leftOffset);
                    buildingY = compY - buildingHeight;
                }                
                fgGroup.appendChild(createSvgElement('image', {
                    href: imgPath,
                    x: buildingX,
                    y: buildingY,
                    width: buildingWidth,
                    height: buildingHeight,
                    preserveAspectRatio: 'none'
                }));
            } else {
                const numPeople = Math.min(5, Math.max(1, Math.floor(comp.default_width_m / 2) + 1));
                for (let i = 0; i < numPeople; i++) {
                    const x = currentX + (i + 0.5) * (widthPx / numPeople);
                    drawPersonSeeded(fgGroup, x, compY, comp.instanceId, i);
                }
            }
        }
        
        const label = createSvgElement('text', {
            x: currentX + widthPx/2, y: elevationY + curbHeight + layerThickness + 20, fill: '#666', 'font-size': '12px', 'text-anchor': 'middle', 'font-family': "'Cairo', 'Tajawal', sans-serif"
        });
        let shortName = comp.name;
        if (widthPx < 80 && shortName.length > 10) shortName = shortName.substring(0, 8) + '...';
        label.textContent = shortName;
        fgGroup.appendChild(label);
        
        let planFill = comp.color;
        if (comp.id === 'median_island') {
            planFill = '#d6cfc5';
        } else if (comp.id === 'urban_furniture_buffer') {
            planFill = '#A38D6F';
        } else if (comp.id === 'clear_sidewalk') {
            planFill = '#D6CFC5';
        }
        const plan = createSvgElement('rect', {
            x: currentX, y: planY, width: widthPx, height: planHeight, fill: planFill
        });
        bgGroup.appendChild(plan);

        if (comp.id === 'median_island' || comp.id === 'urban_furniture_buffer') {
            const lineStroke = comp.id === 'urban_furniture_buffer' ? '#8e795f' : '#b5ad9e';
            for (let ix = currentX + 5; ix < currentX + widthPx; ix += 11) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: ix, y1: planY, x2: ix, y2: planY + planHeight, stroke: lineStroke, 'stroke-width': '0.8', opacity: '0.5'
                }));
            }
            for (let iy = planY + 5; iy < planY + planHeight; iy += 11) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: currentX, y1: iy, x2: currentX + widthPx, y2: iy, stroke: lineStroke, 'stroke-width': '0.8', opacity: '0.5'
                }));
            }
        }

        // Helper function to check if a component is a road lane
        const isRoadLane = (c) => {
            if (!c) return false;
            return c.id === 'standard_car_lane' || 
                   c.id === 'hov_transit_lane' || 
                   c.id === 'flex_zone' || 
                   c.id === 'parking_45' || 
                   c.id === 'parking_90';
        };

        // Draw traffic direction arrow on the asphalt for standard and hov lanes
        if (comp.id === 'standard_car_lane' || comp.id === 'hov_transit_lane') {
            const cx = currentX + widthPx / 2;
            const cy = planY + planHeight / 2;
            const arrowColor = 'rgba(255, 255, 255, 0.6)'; // semi-transparent white pavement paint
            
            if (isRightSide) {
                // Pointing UP (traffic coming forward/towards)
                // Draw shaft
                bgGroup.appendChild(createSvgElement('line', {
                    x1: cx, y1: cy + 25, x2: cx, y2: cy - 10,
                    stroke: arrowColor, 'stroke-width': '4.5', 'stroke-linecap': 'round'
                }));
                // Draw head
                bgGroup.appendChild(createSvgElement('polygon', {
                    points: `${cx - 9},${cy - 8} ${cx},${cy - 22} ${cx + 9},${cy - 8}`,
                    fill: arrowColor
                }));
            } else {
                // Pointing DOWN (traffic going forward/away)
                // Draw shaft
                bgGroup.appendChild(createSvgElement('line', {
                    x1: cx, y1: cy - 25, x2: cx, y2: cy + 10,
                    stroke: arrowColor, 'stroke-width': '4.5', 'stroke-linecap': 'round'
                }));
                // Draw head
                bgGroup.appendChild(createSvgElement('polygon', {
                    points: `${cx - 9},${cy + 8} ${cx},${cy + 22} ${cx + 9},${cy + 8}`,
                    fill: arrowColor
                }));
            }
        }

        // Draw left boundary of the very first element
        if (index === 0) {
            bgGroup.appendChild(createSvgElement('line', {
                x1: currentX,
                y1: planY,
                x2: currentX,
                y2: planY + planHeight,
                stroke: '#fff',
                'stroke-width': '1.5'
            }));
        }

        // Draw boundary line between components
        const nextComp = sequence[index + 1];
        if (isRoadLane(comp) && isRoadLane(nextComp)) {
            // Draw a dashed white paint line separating traffic lanes (thicker and longer dashes)
            bgGroup.appendChild(createSvgElement('line', {
                x1: currentX + widthPx,
                y1: planY,
                x2: currentX + widthPx,
                y2: planY + planHeight,
                stroke: '#fff',
                'stroke-width': '4.5',
                'stroke-dasharray': '50,35'
            }));
        } else {
            // Draw a solid separator line (outer border or curb)
            bgGroup.appendChild(createSvgElement('line', {
                x1: currentX + widthPx,
                y1: planY,
                x2: currentX + widthPx,
                y2: planY + planHeight,
                stroke: '#fff',
                'stroke-width': '1.5'
            }));
        }
        
        if (comp.id === 'median_island' || comp.id === 'urban_furniture_buffer') {
            const treeSize = 180 * 0.9;
            const treeW = treeSize * 1.24; // To prevent clipping of the wider shadow of tree plan 4
            const treeH = treeSize;
            
            let treeXOffset = 0;
            
            // Draw planting basins (beds) around the tree areas first (so they are below the trees)
            const bedW = Math.max(16, widthPx * 0.76);
            const bedH = 110;
            
            // Top planting bed
            fgGroup.appendChild(createSvgElement('rect', {
                x: currentX + widthPx/2 - bedW/2,
                y: planY + 26,
                width: bedW,
                height: bedH,
                fill: '#7c8a24', // Rich grass green
                stroke: '#a4b53c', // Light green border
                'stroke-width': '1.5',
                rx: '6',
                ry: '6'
            }));

            // Middle planting bed (new addition for 3-tree density)
            fgGroup.appendChild(createSvgElement('rect', {
                x: currentX + widthPx/2 - bedW/2,
                y: planY + planHeight/2 - bedH/2,
                width: bedW,
                height: bedH,
                fill: '#7c8a24',
                stroke: '#a4b53c',
                'stroke-width': '1.5',
                rx: '6',
                ry: '6'
            }));

            // Bottom planting bed
            fgGroup.appendChild(createSvgElement('rect', {
                x: currentX + widthPx/2 - bedW/2,
                y: planY + planHeight - 26 - bedH,
                width: bedW,
                height: bedH,
                fill: '#7c8a24', // Rich grass green
                stroke: '#a4b53c', // Light green border
                'stroke-width': '1.5',
                rx: '6',
                ry: '6'
            }));
            
            // Top tree
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/tree plan 5.png',
                x: currentX + widthPx/2 - treeW/2 + treeXOffset,
                y: planY,
                width: treeW,
                height: treeH,
                preserveAspectRatio: 'xMidYMid meet'
            }));            
            
            // Middle tree (new addition for 3-tree density)
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/tree plan 5.png',
                x: currentX + widthPx/2 - treeW/2 + treeXOffset,
                y: planY + planHeight/2 - treeH/2,
                width: treeW,
                height: treeH,
                preserveAspectRatio: 'xMidYMid meet'
            }));            

            // Bottom tree
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/tree plan 5.png',
                x: currentX + widthPx/2 - treeW/2 + treeXOffset,
                y: planY + planHeight - treeH,
                width: treeW,
                height: treeH,
                preserveAspectRatio: 'xMidYMid meet'
            }));

            // Draw bench and trash bin in urban furniture buffer (staggered in the lower gap, planHeight=800)
            if (comp.id === 'urban_furniture_buffer') {
                const furnY = planY + 560; // Placed at the midpoint of the bottom gap (between middle and bottom tree)
                const benchW = Math.max(14, widthPx * 0.45);
                const benchH = 50; // seat length along Y-axis
                const benchX = currentX + widthPx/2 - benchW/2;
                
                // Bench Base
                fgGroup.appendChild(createSvgElement('rect', {
                    x: benchX,
                    y: furnY - benchH/2,
                    width: benchW,
                    height: benchH,
                    fill: '#a08060', // Warm wood brown
                    stroke: '#5c4538',
                    'stroke-width': '1.5',
                    rx: '2',
                    ry: '2'
                }));
                
                // Bench slats (lines to show wood texture)
                for (let sx = benchX + 3; sx < benchX + benchW; sx += 4) {
                    fgGroup.appendChild(createSvgElement('line', {
                        x1: sx,
                        y1: furnY - benchH/2 + 2,
                        x2: sx,
                        y2: furnY + benchH/2 - 2,
                        stroke: '#5c4538',
                        'stroke-width': '0.8',
                        opacity: '0.5'
                    }));
                }
                
                // Bench Armrests (top & bottom)
                fgGroup.appendChild(createSvgElement('rect', {
                    x: benchX - 2,
                    y: furnY - benchH/2,
                    width: benchW + 4,
                    height: 4,
                    fill: '#333',
                    rx: '1'
                }));
                fgGroup.appendChild(createSvgElement('rect', {
                    x: benchX - 2,
                    y: furnY + benchH/2 - 4,
                    width: benchW + 4,
                    height: 4,
                    fill: '#333',
                    rx: '1'
                }));

                // Trash Bin (placed slightly below the bench)
                const binY = furnY + benchH/2 + 15;
                const binX = currentX + widthPx/2;
                // Outer circle
                fgGroup.appendChild(createSvgElement('circle', {
                    cx: binX,
                    cy: binY,
                    r: 8,
                    fill: '#7f8c8d', // Grey metallic bin
                    stroke: '#333',
                    'stroke-width': '1.5'
                }));
                // Inner lid opening
                fgGroup.appendChild(createSvgElement('circle', {
                    cx: binX,
                    cy: binY,
                    r: 4.5,
                    fill: '#2c3e50'
                }));
            }

            // Draw custom light pole top-view symbol if enabled
            if ((comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') && comp.showLight) {
                const isMedian = comp.id === 'median_island';
                const poleXOffset = 0; // Centered, no shift
                const poleCenterX = currentX + widthPx/2 + poleXOffset;
                const poleCenterY = planY + 240; // Shifted to the midpoint of the top gap (between top and middle tree) to avoid overlap
                
                // Draw a small central circle for the main pole body
                fgGroup.appendChild(createSvgElement('circle', {
                    cx: poleCenterX,
                    cy: poleCenterY,
                    r: 4.5,
                    fill: '#333',
                    stroke: '#fff',
                    'stroke-width': 1
                }));
                
                if (isMedian) {
                    // Symmetrical double-arm for the median island (pointing left and right)
                    const armLength = 25;
                    
                    // Left arm line
                    fgGroup.appendChild(createSvgElement('line', {
                        x1: poleCenterX,
                        y1: poleCenterY,
                        x2: poleCenterX - armLength,
                        y2: poleCenterY,
                        stroke: '#333',
                        'stroke-width': 2.5
                    }));
                    
                    // Right arm line
                    fgGroup.appendChild(createSvgElement('line', {
                        x1: poleCenterX,
                        y1: poleCenterY,
                        x2: poleCenterX + armLength,
                        y2: poleCenterY,
                        stroke: '#333',
                        'stroke-width': 2.5
                    }));
                    
                    // Left bulb
                    fgGroup.appendChild(createSvgElement('circle', {
                        cx: poleCenterX - armLength,
                        cy: poleCenterY,
                        r: 4,
                        fill: '#F7C86B',
                        stroke: '#333',
                        'stroke-width': 1
                    }));
                    
                    // Right bulb
                    fgGroup.appendChild(createSvgElement('circle', {
                        cx: poleCenterX + armLength,
                        cy: poleCenterY,
                        r: 4,
                        fill: '#F7C86B',
                        stroke: '#333',
                        'stroke-width': 1
                    }));
                } else {
                    // Staggered double-arm for the sidewalk buffer
                    const streetArmLength = 25;
                    const sidewalkArmLength = 12;
                    
                    const streetArmDir = isRightSide ? -1 : 1;
                    const sidewalkArmDir = isRightSide ? 1 : -1;
                    
                    // Street-side arm line
                    fgGroup.appendChild(createSvgElement('line', {
                        x1: poleCenterX,
                        y1: poleCenterY,
                        x2: poleCenterX + streetArmLength * streetArmDir,
                        y2: poleCenterY,
                        stroke: '#333',
                        'stroke-width': 2.5
                    }));
                    
                    // Sidewalk-side arm line
                    fgGroup.appendChild(createSvgElement('line', {
                        x1: poleCenterX,
                        y1: poleCenterY,
                        x2: poleCenterX + sidewalkArmLength * sidewalkArmDir,
                        y2: poleCenterY,
                        stroke: '#333',
                        'stroke-width': 2
                    }));
                    
                    // Street-side bulb
                    fgGroup.appendChild(createSvgElement('circle', {
                        cx: poleCenterX + streetArmLength * streetArmDir,
                        cy: poleCenterY,
                        r: 4,
                        fill: '#F7C86B',
                        stroke: '#333',
                        'stroke-width': 1
                    }));
                    
                    // Sidewalk-side bulb
                    fgGroup.appendChild(createSvgElement('circle', {
                        cx: poleCenterX + sidewalkArmLength * sidewalkArmDir,
                        cy: poleCenterY,
                        r: 3,
                        fill: '#F7C86B',
                        stroke: '#333',
                        'stroke-width': 1
                    }));
                }
            }
        } else if (comp.id === 'standard_car_lane') {
            const carW = 76;
            const carH = 154;
            const carImgPath = isCarAway ? 'assets/Cars/Car Plan right.png' : 'assets/Cars/Car Plan left.png';
            if (widthPx >= 160) {
                const car1X = currentX + widthPx/4;
                const car1Y = planY + planHeight/4;
                fgGroup.appendChild(createSvgElement('image', {
                    href: carImgPath,
                    x: car1X - carW/2,
                    y: car1Y - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet'
                }));
                
                const car2X = currentX + 3*widthPx/4;
                const car2Y = planY + 3*planHeight/4;
                fgGroup.appendChild(createSvgElement('image', {
                    href: carImgPath,
                    x: car2X - carW/2,
                    y: car2Y - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet'
                }));
            } else {                const carX = currentX + widthPx/2;
                const carY = (index % 2 === 0) ? (planY + planHeight * 0.7) : (planY + planHeight * 0.3);                fgGroup.appendChild(createSvgElement('image', {
                    href: carImgPath,
                    x: carX - carW/2,
                    y: carY - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet'
                }));
            }
        } else if (comp.id === 'hov_transit_lane') {
            const busW = 140;
            const busH = 364;
            const busX = currentX + widthPx/2;
            const busY = planY + planHeight/2;
            const busImgPath = isRightSide ? 'assets/bus top Right.png' : 'assets/bus top left.png';
            fgGroup.appendChild(createSvgElement('image', {
                href: busImgPath,
                x: busX - busW/2,
                y: busY - busH/2,
                width: busW,
                height: busH,
                preserveAspectRatio: 'xMidYMid meet'
            }));

            const symbolW = 90;
            const symbolH = symbolW * (557 / 924);
            const symbolX = currentX + widthPx/2;
            const symbolY = isRightSide ? (planY + planHeight * 0.2) : (planY + planHeight * 0.8);
            const symbolRotation = isRightSide ? 90 : 270;
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/Bus Stop Floor Symbol.png',
                x: symbolX - symbolW/2,
                y: symbolY - symbolH/2,
                width: symbolW,
                height: symbolH,
                preserveAspectRatio: 'xMidYMid meet',
                transform: `rotate(${symbolRotation} ${symbolX} ${symbolY})`
            }));
        } else if (comp.id === 'flex_zone') {
            // Draw interlock tiles (smaller spacing: 8px)
            const lineStroke = '#6d5d47';
            for (let ix = currentX + 4; ix < currentX + widthPx; ix += 8) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: ix, y1: planY, x2: ix, y2: planY + planHeight, stroke: lineStroke, 'stroke-width': '0.8', opacity: '0.6'
                }));
            }
            for (let iy = planY + 4; iy < planY + planHeight; iy += 8) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: currentX, y1: iy, x2: currentX + widthPx, y2: iy, stroke: lineStroke, 'stroke-width': '0.8', opacity: '0.6'
                }));
            }

            const carW = 76;
            const carH = 154;
            const carX = currentX + widthPx/2;
            const carImgPath = isCarAway ? 'assets/Cars/Car Plan right.png' : 'assets/Cars/Car Plan left.png';
            
            const car1Y = planY + planHeight * 0.25;
            fgGroup.appendChild(createSvgElement('image', {
                href: carImgPath,
                x: carX - carW/2,
                y: car1Y - carH/2,
                width: carW,
                height: carH,
                preserveAspectRatio: 'xMidYMid meet'
            }));            
            const car2Y = planY + planHeight * 0.75;
            fgGroup.appendChild(createSvgElement('image', {
                href: carImgPath,
                x: carX - carW/2,
                y: car2Y - carH/2,
                width: carW,
                height: carH,
                preserveAspectRatio: 'xMidYMid meet'
            }));
        } else if (comp.id === 'parking_45') {
            // Draw parking slot lines (clipped to the lane rect)
            
            // Generate clip path dynamically
            const clipPathId = `clip-parking-${comp.instanceId}`;
            const clipPath = createSvgElement('clipPath', { id: clipPathId });
            clipPath.appendChild(createSvgElement('rect', {
                x: currentX,
                y: planY,
                width: widthPx,
                height: planHeight
            }));
            defs.appendChild(clipPath);

            // Draw parking lines synchronized with planY
            for (let i = -1; i <= 8; i++) {
                const y = planY + i * 120;
                let x1 = currentX;
                let y1 = isRightSide ? y : y + widthPx;
                let x2 = currentX + widthPx;
                let y2 = isRightSide ? y - widthPx : y;
                
                bgGroup.appendChild(createSvgElement('line', {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    stroke: 'rgba(255, 255, 255, 0.85)',
                    'stroke-width': '2.2',
                    'clip-path': `url(#${clipPathId})`
                }));
            }            
            
            // Draw 3 top-view cars and wheel stoppers parked at 45 degrees
            const carW = 76;
            const carH = 154;
            const cx = currentX + widthPx / 2;
            
            // Angle of rotation:
            // Right Side: 45 degrees (car image is vertical, rotate by 45 clockwise to face top-right).
            // Left Side: -135 degrees (rotate by 135 counter-clockwise to face bottom-left).
            const rotation = isRightSide ? 45 : -135;
            
            // Angle of heading (used for the 2D shift vector of the stopper in front of the car):
            // Right Side: -45 degrees (top-right direction).
            // Left Side: 135 degrees (bottom-left direction).
            const heading = isRightSide ? -45 : 135;
            
            // Centers of the slots (using line Y centers)
            const slotCentersY = [
                planY + 180,
                planY + 420,
                planY + 660
            ];            
            
            slotCentersY.forEach(ySlot => {
                // Calculate exact cy of the car along the angled slot line:
                // Right Side: cy = ySlot - widthPx / 2
                // Left Side: cy = ySlot + widthPx / 2
                const cy = isRightSide ? (ySlot - widthPx / 2) : (ySlot + widthPx / 2);
                const carImgPath = isRightSide ? 'assets/Cars/Car Plan right.png' : 'assets/Cars/Car Plan left.png';
                
                // Draw car (clipped to lane rect)
                const carImg = createSvgElement('image', {
                    href: carImgPath,
                    x: cx - carW / 2,
                    y: cy - carH / 2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: `rotate(45 ${cx} ${cy})`,
                    'clip-path': `url(#${clipPathId})`
                });
                fgGroup.appendChild(carImg);

                // Draw custom wheel stopper (concrete block)
                // Perpendicular to car, placed exactly in front of the front bumper
                const stopperW = 6;
                const stopperH = 34;
                const rad = heading * Math.PI / 180;
                const shiftDist = 75; // shifted to be visible in front of the car's hood
                const sx = cx + shiftDist * Math.cos(rad);
                const sy = cy + shiftDist * Math.sin(rad);

                const stopper = createSvgElement('rect', {
                    x: sx - stopperW / 2,
                    y: sy - stopperH / 2,
                    width: stopperW,
                    height: stopperH,
                    fill: '#d1cdc7',
                    stroke: '#777',
                    'stroke-width': '0.8',
                    rx: '2',
                    transform: `rotate(${rotation} ${sx} ${sy})`,
                    'clip-path': `url(#${clipPathId})`
                });
                fgGroup.appendChild(stopper);
            });
        } else if (comp.id === 'parking_90') {
            // Draw perpendicular parking slot lines
            const lineSpacing = 100; // Spacing of lines along Y-axis
            for (let y = planY; y <= planY + planHeight; y += lineSpacing) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: currentX,
                    y1: y,
                    x2: currentX + widthPx,
                    y2: y,
                    stroke: 'rgba(255, 255, 255, 0.85)',
                    'stroke-width': '2'
                }));
            }
            // Draw 4 top-view cars parked at 90 degrees
            const carW = 76;
            const carH = 154;
            const carX = currentX + widthPx / 2;
            const rotation = isRightSide ? 90 : -90;
            
            const carPositionsY = [
                planY + lineSpacing * 0.5,
                planY + lineSpacing * 1.5,
                planY + lineSpacing * 2.5,
                planY + lineSpacing * 3.5
            ];
            const carImgPath = isRightSide ? 'assets/Cars/Car Plan right.png' : 'assets/Cars/Car Plan left.png';
            carPositionsY.forEach(carY => {
                fgGroup.appendChild(createSvgElement('image', {
                    href: carImgPath,
                    x: carX - carW / 2,
                    y: carY - carH / 2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: `rotate(90 ${carX} ${carY})`
                }));
            });
        } else if (comp.id === 'bike_lane') {
            const bikeH = 94;
            const bikeW = useBackView ? (bikeH * 735 / 1561) : (bikeH * 774 / 1561);
            const bikeX = currentX + widthPx/2;
            const bikeImg = useBackView ? 'assets/bike top right.png' : 'assets/bike top left.png';
            const symbolRotation = useBackView ? 90 : 270;
            
            // Staggered Y positions for bikes and symbols to avoid side-by-side overlap in double lanes
            const bike1Y = useBackView ? (planY + planHeight * 0.15) : (planY + planHeight * 0.35);
            const symbolY = useBackView ? (planY + planHeight * 0.40) : (planY + planHeight * 0.60);
            const bike2Y = useBackView ? (planY + planHeight * 0.65) : (planY + planHeight * 0.85);
            
            fgGroup.appendChild(createSvgElement('image', {
                href: bikeImg,
                x: bikeX - bikeW/2,
                y: bike1Y - bikeH/2,
                width: bikeW,
                height: bikeH,
                preserveAspectRatio: 'xMidYMid meet'
            }));            

            // Pavement Bicycle Symbol in the middle
            const symH = 40;
            const symW = symH * 1.58;
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/bicycle symbol.png',
                x: bikeX - symW / 2,
                y: symbolY - symH / 2,
                width: symW,
                height: symH,
                preserveAspectRatio: 'xMidYMid meet',
                transform: `rotate(${symbolRotation} ${bikeX} ${symbolY})`
            }));

            fgGroup.appendChild(createSvgElement('image', {
                href: bikeImg,
                x: bikeX - bikeW/2,
                y: bike2Y - bikeH/2,
                width: bikeW,
                height: bikeH,
                preserveAspectRatio: 'xMidYMid meet'
            }));
        } else if (comp.id === 'bus_station') {
            // 1. Draw tile lines (pavement texture)
            for (let ix = currentX + 10; ix < currentX + widthPx; ix += 20) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: ix, y1: planY, x2: ix, y2: planY + planHeight, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }
            for (let iy = planY + 10; iy < planY + planHeight; iy += 20) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: currentX, y1: iy, x2: currentX + widthPx, y2: iy, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }
            
            // 2. Draw bus shelter plan representation
            const shelterW = widthPx * 0.8;
            const shelterDepth = 80;
            const shelterX = currentX + widthPx * 0.1;
            const shelterY = planY + planHeight / 2 - shelterDepth / 2;
            
            // Draw a concrete base pad for the shelter
            fgGroup.appendChild(createSvgElement('rect', {
                x: shelterX - 5,
                y: shelterY - 5,
                width: shelterW + 10,
                height: shelterDepth + 10,
                fill: '#d0cfca',
                stroke: '#a09f9a',
                'stroke-width': '1.5',
                rx: '4'
            }));
            
            // Draw the bench inside the shelter
            const benchW = 12;
            const benchH = shelterDepth * 0.6;
            const benchX = isRightSide 
                ? (shelterX + shelterW - benchW - 8) 
                : (shelterX + 8);
            const benchY = shelterY + (shelterDepth - benchH) / 2;
            
            fgGroup.appendChild(createSvgElement('rect', {
                x: benchX,
                y: benchY,
                width: benchW,
                height: benchH,
                fill: '#8c6d58',
                stroke: '#5c4538',
                'stroke-width': '1',
                rx: '2'
            }));
            
            // Draw shelter roof (semi-transparent glass/metal)
            fgGroup.appendChild(createSvgElement('rect', {
                x: shelterX,
                y: shelterY,
                width: shelterW,
                height: shelterDepth,
                fill: 'rgba(235, 245, 255, 0.75)',
                stroke: '#5a7a9a',
                'stroke-width': '2',
                rx: '3'
            }));
            
            // Draw roof structure cross lines
            fgGroup.appendChild(createSvgElement('line', {
                x1: shelterX, y1: shelterY, x2: shelterX + shelterW, y2: shelterY + shelterDepth, stroke: 'rgba(90, 122, 154, 0.25)', 'stroke-width': '1.5'
            }));
            fgGroup.appendChild(createSvgElement('line', {
                x1: shelterX + shelterW, y1: shelterY, x2: shelterX, y2: shelterY + shelterDepth, stroke: 'rgba(90, 122, 154, 0.25)', 'stroke-width': '1.5'
            }));
            
            // Draw support columns
            const colRadius = 3.5;
            const cols = [
                { x: shelterX + 4, y: shelterY + 4 },
                { x: shelterX + shelterW - 4, y: shelterY + 4 },
                { x: shelterX + 4, y: shelterY + shelterDepth - 4 },
                { x: shelterX + shelterW - 4, y: shelterY + shelterDepth - 4 }
            ];
            cols.forEach(c => {
                fgGroup.appendChild(createSvgElement('circle', {
                    cx: c.x,
                    cy: c.y,
                    r: colRadius,
                    fill: '#3a4a5a',
                    stroke: '#202a35',
                    'stroke-width': '1'
                }));
            });
        } else if (comp.id === 'bollard') {
            for (let ix = currentX + 10; ix < currentX + widthPx; ix += 20) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: ix, y1: planY, x2: ix, y2: planY + planHeight, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }
            for (let iy = planY + 10; iy < planY + planHeight; iy += 20) {
                bgGroup.appendChild(createSvgElement('line', {
                    x1: currentX, y1: iy, x2: currentX + widthPx, y2: iy, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }

            const bollardRadius = 5;
            const spacing = 100;
            for (let y = planY + spacing / 2; y < planY + planHeight; y += spacing) {
                fgGroup.appendChild(createSvgElement('circle', {
                    cx: currentX + widthPx / 2,
                    cy: y,
                    r: bollardRadius,
                    fill: '#7f8c8d',
                    stroke: '#2c3e50',
                    'stroke-width': '1.5'
                }));
            }
        } else if (comp.id === 'lane_divider') {
            fgGroup.appendChild(createSvgElement('rect', {
                x: currentX,
                y: planY,
                width: 8,
                height: planHeight,
                fill: '#FFD740'
            }));
            fgGroup.appendChild(createSvgElement('rect', {
                x: currentX + 16,
                y: planY,
                width: 8,
                height: planHeight,
                fill: '#FFD740'
            }));
        } else if (comp.id.includes('sidewalk') || comp.id.includes('edge') || comp.id.includes('seafront')) {
            for (let ix = currentX + 7; ix < currentX + widthPx; ix += 14) {                bgGroup.appendChild(createSvgElement('line', {
                    x1: ix, y1: planY, x2: ix, y2: planY + planHeight, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }
            for (let iy = planY + 7; iy < planY + planHeight; iy += 14) {                bgGroup.appendChild(createSvgElement('line', {
                    x1: currentX, y1: iy, x2: currentX + widthPx, y2: iy, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }

            // Draw top-down pedestrians on sidewalks, edges, and seafronts
            const numPeople = Math.min(4, Math.max(1, Math.floor(comp.default_width_m / 1.1)));
            
            // Seeded random for consistent placements across redraws
            let seed = comp.instanceId ? (typeof comp.instanceId === 'number' ? comp.instanceId : parseInt(comp.instanceId) || 12345) : 12345;
            const seededRandom = () => {
                seed = (seed * 9301 + 49297) % 233280;
                return seed / 233280;
            };

            const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            
            for (let i = 0; i < numPeople; i++) {
                // Ensure they walk slightly away from boundaries
                const paddingX = Math.min(widthPx / 2 - 2, 20);
                const px = currentX + paddingX + seededRandom() * (widthPx - paddingX * 2);
                const py = planY + 40 + seededRandom() * (planHeight - 80);
                
                // Pick a unique person from the pool to avoid duplicates on the same sidewalk
                const idx = Math.floor(seededRandom() * pool.length);
                const personNum = pool.splice(idx, 1)[0];
                
                const personImg = `assets/People/person${personNum}.png`;
                // Make person 2 and 10 (with dogs) 2.0x larger, and others 1.2x larger
                const personSize = (personNum === 2 || personNum === 10) ? 72 : 43.2;
                
                fgGroup.appendChild(createSvgElement('image', {
                    href: personImg,
                    x: px - personSize/2,
                    y: py - personSize/2,
                    width: personSize,
                    height: personSize,
                    preserveAspectRatio: 'xMidYMid meet'
                }));
            }
        }
        
        bgGroup.appendChild(createSvgElement('line', {
            x1: currentX + widthPx, y1: 20, x2: currentX + widthPx, y2: planY + planHeight + 20, stroke: '#ddd', 'stroke-dasharray': '5,5'
        }));
        
        currentX += widthPx;
    });
}

function mirrorSequence() {
    if (sequence.length === 0) return;
    
    const lastItem = sequence[sequence.length - 1];
    let itemsToMirror = [];
    
    if (lastItem.id === 'median_island' || lastItem.id === 'lane_divider') {
        itemsToMirror = sequence.slice(0, -1);
    } else {
        itemsToMirror = sequence.slice();
    }
    
    const mirrored = itemsToMirror
        .slice()
        .reverse()
        .map(comp => {
            const flippedDir = comp.carDir === 'away' ? 'towards' : (comp.carDir === 'towards' ? 'away' : undefined);
            return {
                ...comp,
                carDir: flippedDir,
                instanceId: Date.now() + Math.random()
            };
        });
        
    sequence = [...sequence, ...mirrored];
    renderSequence();
}

function adjustZoom(delta) {
    setZoom(zoomLevel + delta);
}

function setZoom(level) {
    zoomLevel = Math.max(0.2, Math.min(2.0, level));
    const zoomValEl = document.getElementById('isb-zoom-level');
    if (zoomValEl) {
        zoomValEl.textContent = Math.round(zoomLevel * 100) + '%';
    }
    renderSequence();
}

function zoomToFit() {
    const totalWidth = calculateVisualTotalWidth();
    if (totalWidth === 0) return;
    
    const container = document.getElementById('isb-dropzone');
    if (!container) return;
    
    const containerWidth = container.clientWidth - 64;
    const scale = 40;
    const svgWidth = Math.max(800, totalWidth * scale + 100);
    
    const fitZoom = containerWidth / (svgWidth + 500);
    setZoom(fitZoom);
}

function clearSequence() {
    const modal = document.getElementById('isb-confirm-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function confirmClear(shouldClear) {
    const modal = document.getElementById('isb-confirm-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    if (shouldClear) {
        sequence = [];
        zoomLevel = 1.0;
        const zoomValEl = document.getElementById('isb-zoom-level');
        if (zoomValEl) {
            zoomValEl.textContent = '100%';
        }
        const streetInput = document.getElementById('isb-street-name');
        if (streetInput) {
            streetInput.value = '';
        }
        renderSequence();
    }
}

function exportDesign() {
    if (sequence.length === 0) {
        alert("برجاء إضافة عناصر أولاً لتتمكن من نسخ تصميم الشارع.");
        return;
    }
    const designCode = sequence.map(comp => ({        id: comp.id,
        width: comp.default_width_m
    }));
    navigator.clipboard.writeText(JSON.stringify(designCode, null, 2))
        .then(() => {
            alert("تم نسخ كود التصميم بنجاح إلى الحافظة! يمكنك الآن لصقه وإرساله لي في المحادثة.");
        })
        .catch(err => {
            console.error("Failed to copy design code: ", err);
            alert("حدث خطأ أثناء نسخ الكود. يمكنك نسخ النص التالي يدوياً:\n\n" + JSON.stringify(designCode));
        });
}

function loadTemplate(type) {
    const template = templatesData[type];
    if (!template) return;
    
    const applyTemplate = () => {
        const streetInput = document.getElementById('isb-street-name');
        if (streetInput && templateNames[type]) {
            streetInput.value = templateNames[type];
        }
        if (templateClassMap[type]) {
            currentStreetClass = templateClassMap[type];
            updateClassificationBenchmarkUI();
        }
        
        sequence = template.map(item => {
            const comp = getComponentById(item.id);
            if (!comp) return null;
            return {
                ...comp,
                default_width_m: item.width,
                showLight: (comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') ? true : false,
                instanceId: Date.now() + Math.random()
            };
        }).filter(item => item !== null);
        
        zoomLevel = 1.0;
        const zoomValEl = document.getElementById('isb-zoom-level');
        if (zoomValEl) {
            zoomValEl.textContent = '100%';
        }
        
        renderSequence();
        
        setTimeout(zoomToFit, 100);
    };
    
    if (sequence.length > 0) {
        const modal = document.getElementById('isb-template-modal');
        const confirmBtn = document.getElementById('confirm-template-btn');
        if (modal && confirmBtn) {
            modal.style.display = 'flex';
            confirmBtn.onclick = () => {
                modal.style.display = 'none';
                applyTemplate();
            };
        } else {
            if (confirm("سيتم استبدال التصميم الحالي بالنموذج المختار. هل أنت متأكد؟")) {
                applyTemplate();
            }
        }
    } else {
        applyTemplate();
    }
}

function closeTemplateModal() {
    const modal = document.getElementById('isb-template-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function prepareClonedSvg(svg) {
    const clonedSvg = svg.cloneNode(true);
    
    const streetInput = document.getElementById('isb-street-name');
    const streetName = (streetInput && streetInput.value.trim()) || "شارع غير مسمى";
    const primaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--clr-primary').trim() || '#A57F61';
    
    const totalWidth = calculateStreetWidth();
    
    const textEl = createSvgElement('text', {
        x: '50', // startX is 50
        y: '-800',
        fill: primaryColor,
        'font-weight': '900',
        'font-family': "'Cairo', 'Tajawal', sans-serif",
        'font-size': '22px'
    });
    textEl.textContent = `${streetName} (${totalWidth.toFixed(1)}م)`;
    
    const clonedFg = clonedSvg.querySelector('#isb-fg-group');
    if (clonedFg) {
        clonedFg.appendChild(textEl);
    }
    
    return clonedSvg;
}

async function exportToPng() {
    const svg = document.getElementById('isb-svg-canvas');
    if (!svg || sequence.length === 0) {
        alert("برجاء إضافة عناصر أولاً لتتمكن من تصدير القطاع.");
        return;
    }
    
    const streetInput = document.getElementById('isb-street-name');
    const streetName = (streetInput && streetInput.value.trim()) || "قطاع الشارع الحصري";
    
    // Check if running locally via file:// protocol
    const isFileProtocol = window.location.protocol === 'file:';
    
    if (isFileProtocol) {
        try {
            const clonedSvg = prepareClonedSvg(svg);
            
            // Resolve relative image URLs to absolute local file:/// URLs
            const images = clonedSvg.querySelectorAll('image');
            images.forEach(img => {
                const href = img.getAttribute('href') || img.getAttribute('xlink:href');
                if (href && !href.startsWith('http') && !href.startsWith('data:') && !href.startsWith('blob:')) {
                    const absoluteUrl = new URL(href, window.location.href).href;
                    img.setAttribute('href', absoluteUrl);
                    img.removeAttribute('xlink:href');
                }
            });
            
            const viewBox = svg.getAttribute('viewBox').split(' ');
            const width = parseFloat(viewBox[2]);
            const height = parseFloat(viewBox[3]);
            clonedSvg.setAttribute('width', width);
            clonedSvg.setAttribute('height', height);
            
            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(clonedSvg);
            
            const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            const trigger = document.createElement('a');
            trigger.href = url;
            trigger.download = `${streetName}.svg`;
            document.body.appendChild(trigger);
            trigger.click();
            document.body.removeChild(trigger);
            URL.revokeObjectURL(url);
            
            alert("بسبب قيود الأمان في المتصفح عند تشغيل الملفات محلياً (file://)، تم تحميل التصميم بصيغة SVG متوافقة عالية الدقة. يمكنك فتح هذا الملف في المتصفح وطباعته مباشرة بكامل تفاصيله وبجودة ممتازة!");
        } catch (err) {
            console.error("SVG export failed: ", err);
            alert("حدث خطأ أثناء تصدير الملف.");
        }
        return;
    }
    
    // Show a loading indicator/message since inlining images might take a moment
    const exportBtn = document.getElementById('isb-export-image-btn');
    const originalText = exportBtn ? exportBtn.innerHTML : '';
    if (exportBtn) {
        exportBtn.disabled = true;
        exportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التصدير...';
    }
    
    try {
        // 1. Clone the SVG element and add the title
        const clonedSvg = prepareClonedSvg(svg);
        
        // 2. Inline all relative images as Base64 Data URLs
        const images = Array.from(clonedSvg.querySelectorAll('image'));
        await Promise.all(images.map(async (img) => {
            const href = img.getAttribute('href') || img.getAttribute('xlink:href');
            if (href && !href.startsWith('data:') && !href.startsWith('blob:')) {
                try {
                    const absoluteUrl = new URL(href, window.location.href).href;
                    const response = await fetch(absoluteUrl);
                    const blob = await response.blob();
                    const dataUrl = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.onerror = reject;
                        reader.readAsDataURL(blob);
                    });
                    img.setAttribute('href', dataUrl);
                    img.removeAttribute('xlink:href'); // Clear deprecated namespace attribute just in case
                } catch (e) {                
                    console.error(`Failed to inline image: ${href}`, e);
                }
            }        }));

        // 3. Get width and height from viewBox
        const viewBox = svg.getAttribute('viewBox').split(' ');
        const width = parseFloat(viewBox[2]);
        const height = parseFloat(viewBox[3]);
        
        clonedSvg.setAttribute('width', width);
        clonedSvg.setAttribute('height', height);
        
        // 4. Serialize to XML string
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(clonedSvg);
        
        // 5. Create Blob and Object URL
        const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        // 6. Create Image object
        const img = new Image();
        img.onload = function() {            // Create canvas
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            
            // Draw white background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);
            
            // Draw SVG image
            ctx.drawImage(img, 0, 0);
            
            // 7. Trigger download
            const dataUrl = canvas.toDataURL('image/png');
            const trigger = document.createElement('a');
            trigger.href = dataUrl;
            trigger.download = `${streetName}.png`;
            document.body.appendChild(trigger);
            trigger.click();
            document.body.removeChild(trigger);
            
            // Revoke URL
            URL.revokeObjectURL(url);
            
            // Restore button
            if (exportBtn) {
                exportBtn.disabled = false;
                exportBtn.innerHTML = originalText;
            }
        };
        
        img.onerror = function(err) {
            console.error("Failed to load SVG into Image: ", err);
            alert("حدث خطأ أثناء تصدير الصورة. يرجى التأكد من تشغيل الموقع عبر خادم محلي (Local Server).");
            URL.revokeObjectURL(url);
            if (exportBtn) {
                exportBtn.disabled = false;
                exportBtn.innerHTML = originalText;
            }
        };
        
        img.src = url;
    } catch (err) {        console.error("Export process failed: ", err);
        alert("حدث خطأ غير متوقع أثناء معالجة الصورة.");
        if (exportBtn) {
            exportBtn.disabled = false;
            exportBtn.innerHTML = originalText;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initDropzone();
    
    const streetInput = document.getElementById('isb-street-name');
    if (streetInput) {
        streetInput.addEventListener('input', () => {
            const totalWidth = calculateStreetWidth();
            updateStreetHeader(totalWidth);
        });
    }

    updateClassificationBenchmarkUI();
    updateWidthAdvisoryUI(0);
    loadRoadFromDb();
});

// ─── Supabase Save / Load ────────────────────────────────────────────────────

let currentRoadId = null;

async function loadRoadById(id) {
    if (!id) return;

    const statusEl = document.getElementById('isb-save-status');
    if (statusEl) statusEl.textContent = 'جاري التحميل...';

    try {
        const record = await window.roadSectionApi.getById(id);
        if (!record) {
            if (statusEl) statusEl.textContent = 'الطريق غير موجود';
            return;
        }
        currentRoadId = record.id;

        const streetInput = document.getElementById('isb-street-name');
        if (streetInput) streetInput.value = record.name || '';

        if (record.data && record.data.streetClass && STREET_CLASSIFICATIONS[record.data.streetClass]) {
            currentStreetClass = record.data.streetClass;
        }
        updateClassificationBenchmarkUI();

        const lanes = (record.data && Array.isArray(record.data.lanes)) ? record.data.lanes : [];
        sequence = lanes.map(item => {
            const comp = getComponentById(item.id);
            if (!comp) return null;
            return {
                ...comp,
                default_width_m: typeof item.width === 'number' ? item.width : comp.default_width_m,
                showPalm: !!item.showPalm,
                showLight: item.showLight !== undefined ? !!item.showLight : ((comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') ? true : false),
                isStreetLevel: !!item.isStreetLevel,
                carDir: (item.carDir === 'away' || item.carDir === 'towards') ? item.carDir : undefined,
                instanceId: Date.now() + Math.random()
            };
        }).filter(Boolean);

        renderSequence();
        
        const totalWidth = calculateStreetWidth();
        if (statusEl) statusEl.textContent = 'تم التحميل';
        updateStreetHeader(totalWidth);
        setTimeout(zoomToFit, 100);
    } catch (err) {
        console.error('loadRoadById error:', err);
        if (statusEl) statusEl.textContent = 'خطأ في التحميل';
    }
}

async function loadRoadFromDb() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
        await loadRoadById(id);
    }
}

// ─── Library Modal Functions ───────────────────────────────────────────────

function closeLibraryModal() {
    const modal = document.getElementById('isb-library-modal');
    if (modal) modal.style.display = 'none';
}

async function openLibraryModal() {
    const modal = document.getElementById('isb-library-modal');
    const grid = document.getElementById('isb-library-modal-grid');
    const status = document.getElementById('isb-library-modal-status');
    
    if (!modal || !grid || !status) return;
    
    modal.style.display = 'flex';
    status.textContent = 'جاري تحميل المشاريع...';
    grid.innerHTML = '';
    
    try {
        const rows = await window.roadSectionApi.list();
        if (!rows || !rows.length) {
            status.textContent = 'لا توجد عناصر محفوظة بعد';
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--clr-text-muted);">
                    <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; color: var(--clr-border);"></i>
                    <p style="font-size: 1.1rem; font-weight: bold; margin: 0 0 1rem 0; font-family: 'Cairo', sans-serif;">لا توجد شوارع محفوظة في مكتبتك الشخصية بعد</p>
                    <p style="font-size: 0.9rem; margin: 0;">صمم مقطعاً واضغط على زر "حفظ الطريق" ليظهر هنا لاحقاً.</p>
                </div>
            `;
            return;
        }
        
        status.textContent = `${rows.length} مشروع محفوظ`;
        
        rows.forEach(item => {
            const payload = item.data || {};
            const lanes = Array.isArray(payload.lanes) ? payload.lanes : [];
            const totalWidth = typeof payload.totalWidth === 'number'
                ? `${payload.totalWidth.toFixed(1)} م`
                : `${lanes.reduce((sum, l) => sum + Number(l.width || 0), 0).toFixed(1)} م`;
                
            const card = document.createElement('div');
            card.style.cssText = 'background: var(--clr-surface); border: 1px solid var(--clr-border); border-radius: var(--border-radius); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, box-shadow 0.2s; cursor: default;';
            card.onmouseenter = () => {
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = 'var(--shadow-md)';
                card.style.borderColor = 'var(--clr-primary)';
            };
            card.onmouseleave = () => {
                card.style.transform = 'none';
                card.style.boxShadow = 'none';
                card.style.borderColor = 'var(--clr-border)';
            };
            
            card.innerHTML = `
                <div style="margin-bottom: 1rem; text-align: right;">
                    <h4 style="font-family: 'Cairo', sans-serif; font-size: 1.1rem; margin: 0 0 0.5rem 0; color: var(--clr-text); font-weight: 800;">${item.name || 'بدون اسم'}</h4>
                    <p style="font-size: 0.85rem; color: var(--clr-text-muted); margin: 0; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.description || 'مقطع طريق محفوظ وجاهز للتعديل.'}</p>
                </div>
                
                <div style="display: flex; justify-content: space-between; border-top: 1px solid var(--clr-border); border-bottom: 1px solid var(--clr-border); padding: 0.5rem 0; margin-bottom: 1rem; font-size: 0.8rem; color: var(--clr-text-muted); direction: rtl;">
                    <div>العرض: <strong style="color: var(--clr-text);">${totalWidth}</strong></div>
                    <div>العناصر: <strong style="color: var(--clr-text);">${lanes.length}</strong></div>
                </div>
                
                <button onclick="loadRoadFromLibrary('${item.id}')" class="isb-btn" style="background-color: var(--clr-primary); border-color: var(--clr-primary); color: var(--clr-surface); width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.5rem; font-size: 0.9rem;">
                    <i class="fas fa-pen-ruler"></i> فتح وتعديل
                </button>
            `;
            grid.appendChild(card);
        });
    } catch (err) {
        console.error('openLibraryModal error:', err);
        status.textContent = 'تعذّر تحميل المكتبة';
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #d9534f;">
                <i class="fas fa-circle-exclamation" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p style="font-size: 1.1rem; font-weight: bold; margin: 0 0 0.5rem 0; font-family: 'Cairo', sans-serif;">خطأ في تحميل قاعدة البيانات</p>
                <p style="font-size: 0.9rem; margin: 0;">تعذر قراءة المكتبة من Supabase. تأكد من إنشاء الجدول وتفعيل صلاحيات القراءة والكتابة له.</p>
            </div>
        `;
    }
}

async function loadRoadFromLibrary(id) {
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?id=${id}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    await loadRoadById(id);
    closeLibraryModal();
}

function openCapacitySourceModal() {
    const modal = document.getElementById('isb-capacity-source-modal');
    if (modal) modal.style.display = 'flex';
}

function closeCapacitySourceModal() {
    const modal = document.getElementById('isb-capacity-source-modal');
    if (modal) modal.style.display = 'none';
}

async function saveRoad() {
    const statusEl = document.getElementById('isb-save-status');
    const streetInput = document.getElementById('isb-street-name');
    const name = (streetInput && streetInput.value.trim()) || 'طريق بدون اسم';

    if (statusEl) statusEl.textContent = 'جاري الحفظ...';

    const lanes = sequence.map(c => ({
        id: c.id,
        width: c.default_width_m,
        label: c.name,
        showPalm: !!c.showPalm,
        showLight: !!c.showLight,
        isStreetLevel: !!c.isStreetLevel,
        carDir: c.carDir
    }));
    const totalWidth = Number(lanes.filter(l => l.id !== 'commercial_edge' && l.id !== 'residential_edge' && l.id !== 'seafront').reduce((s, l) => s + Number(l.width), 0).toFixed(1));

    const cls = getActiveStreetClass();
    const cat = getActiveFunctionalCategory(cls);
    const payload = {
        name,
        description: `${cat.name} (${cls.name}) — مقطع مصمم تفاعلياً بعرض ${totalWidth} م`,
        data: { lanes, totalWidth, streetClass: currentStreetClass }
    };

    try {
        let record;
        if (currentRoadId) {
            record = await window.roadSectionApi.update(currentRoadId, payload);
        } else {
            record = await window.roadSectionApi.create(payload);
        }
        if (record && record.id) {
            currentRoadId = record.id;
            window.history.replaceState({}, '', `${window.location.pathname}?id=${record.id}`);
        }
        if (statusEl) {
            statusEl.textContent = 'تم الحفظ بنجاح!';
            statusEl.style.color = '#27ae60';
            setTimeout(() => { statusEl.textContent = 'جاهز للعمل'; statusEl.style.color = ''; }, 3000);
        }
    } catch (err) {
        console.error('saveRoad error:', err);
        if (statusEl) { statusEl.textContent = 'فشل الحفظ!'; statusEl.style.color = '#d9534f'; }
    }
}

window.saveRoad = saveRoad;
window.toggleBikeLaneLevel = toggleBikeLaneLevel;

function updateEvaluation(totalWidth) {
    const panel = document.getElementById('isb-evaluation-panel');
    if (!panel) return;

    const cls = getActiveStreetClass();
    updateClassificationBenchmarkUI();
    updateWidthAdvisoryUI(totalWidth);

    const visualTotalWidth = calculateVisualTotalWidth();

    if (sequence.length === 0 || visualTotalWidth <= 0) {
        // Reset everything to zero
        document.getElementById('isb-car-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-bus-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-bike-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-pedestrian-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-total-person-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-humanization-score').textContent = `0%`;
        document.getElementById('isb-humanization-bar').style.width = `0%`;
        const ratingEl = document.getElementById('isb-humanization-rating');
        if (ratingEl) {
            ratingEl.textContent = `تحليل المقطع...`;
            ratingEl.style.color = '';
            ratingEl.style.background = '';
            ratingEl.style.borderColor = '';
        }
        const actualHEl = document.getElementById('isb-actual-human-pct');
        const actualVEl = document.getElementById('isb-actual-vehicle-pct');
        const actualBar = document.getElementById('isb-actual-human-bar');
        if (actualHEl) actualHEl.textContent = `0% أنسنة`;
        if (actualVEl) actualVEl.textContent = `0% مركبات`;
        if (actualBar) actualBar.style.width = `0%`;

        document.getElementById('isb-shading-score').textContent = `0%`;
        document.getElementById('isb-safety-score').textContent = `0%`;
        document.getElementById('isb-quality-score').textContent = `0%`;
        
        panel.style.display = 'none';
        return;
    }

    panel.style.display = 'block';

    // 1. Capacity Calculations (Based on NACTO Minimum Values Reference)
    const carLanesCount = sequence.filter(c => c.id === 'standard_car_lane').length;
    const carCapacity = carLanesCount * 600; // 600 people/hour per lane (NACTO Min)

    const busLanesCount = sequence.filter(c => c.id === 'hov_transit_lane').length;
    const busCapacity = busLanesCount * 1000; // 1000 people/hour per lane (NACTO Min)

    const sidewalkWidth = sequence.filter(c => c.id === 'clear_sidewalk').reduce((sum, c) => sum + c.default_width_m, 0);
    const pedestrianCapacity = Math.round(sidewalkWidth * 2667);

    const bikeLanesCount = sequence.filter(c => c.id === 'bike_lane').length;
    const bikeCapacity = bikeLanesCount * 3250;
    const totalPersonCapacity = Math.round(carCapacity + busCapacity + pedestrianCapacity + bikeCapacity);

    // Update Capacity UI
    document.getElementById('isb-car-capacity').textContent = `${carCapacity.toLocaleString('ar-SA')} شخص/ساعة`;
    document.getElementById('isb-bus-capacity').textContent = `${busCapacity.toLocaleString('ar-SA')} شخص/ساعة`;
    document.getElementById('isb-bike-capacity').textContent = `${bikeCapacity.toLocaleString('ar-SA')} شخص/ساعة`;
    document.getElementById('isb-pedestrian-capacity').textContent = `${pedestrianCapacity.toLocaleString('ar-SA')} شخص/ساعة`;
    document.getElementById('isb-total-person-capacity').textContent = `${totalPersonCapacity.toLocaleString('ar-SA')} شخص/ساعة`;

    // 2. Spatial Split: Human & Sustainable Space vs. Motorized Vehicle Space
    const humanIds = [
        'commercial_edge',
        'clear_sidewalk',
        'residential_edge',
        'urban_furniture_buffer',
        'seafront',
        'bollard',
        'bike_lane',
        'median_island',
        'bus_station'
    ];
    const humanWidth = sequence.filter(c => humanIds.includes(c.id)).reduce((sum, c) => sum + c.default_width_m, 0);
    const greenWidth = sequence.filter(c => ['urban_furniture_buffer', 'median_island'].includes(c.id)).reduce((sum, c) => sum + c.default_width_m, 0);

    const rawHumanPct = (humanWidth / visualTotalWidth) * 100;
    const actualHumanPct = Math.min(100, Math.max(0, Math.round(rawHumanPct)));
    const actualVehiclePct = 100 - actualHumanPct;
    const greenPct = (greenWidth / visualTotalWidth) * 100;
    const motorizedLanes = carLanesCount + busLanesCount;

    // Update Current Design Spatial Split UI
    const actualHEl = document.getElementById('isb-actual-human-pct');
    const actualVEl = document.getElementById('isb-actual-vehicle-pct');
    const actualBar = document.getElementById('isb-actual-human-bar');
    if (actualHEl) actualHEl.textContent = `${actualHumanPct}% أنسنة`;
    if (actualVEl) actualVEl.textContent = `${actualVehiclePct}% مركبات`;
    if (actualBar) actualBar.style.width = `${actualHumanPct}%`;

    // 3. Context-Aware Sub-Indicators (Dynamic by Street Classification)
    // 3a. Shading & Climate Response
    const greenRatioScore = Math.min(72, Math.round((greenPct / Math.max(1, cls.targetGreenPct)) * 72));
    const hasTrees = sequence.some(c => ['urban_furniture_buffer', 'median_island'].includes(c.id) && !c.showPalm);
    const hasPalms = sequence.some(c => ['urban_furniture_buffer', 'median_island'].includes(c.id) && c.showPalm);
    const greenZonesCount = sequence.filter(c => ['urban_furniture_buffer', 'median_island'].includes(c.id)).length;
    let shadingScore = greenRatioScore;
    if (hasTrees) shadingScore += 20;
    if (hasPalms) shadingScore += 10;
    if (greenZonesCount >= 2) shadingScore += 8;
    shadingScore = Math.min(100, Math.max(0, shadingScore));
    document.getElementById('isb-shading-score').textContent = `${shadingScore}%`;

    // 3b. Traffic Safety & Pedestrian Protection (Adapts to Road Speed & Class)
    let safetyScore = 20;
    const hasSidewalk = sequence.some(c => c.id === 'clear_sidewalk');
    const hasBuffer = sequence.some(c => ['urban_furniture_buffer', 'bollard'].includes(c.id));
    const hasMedian = sequence.some(c => c.id === 'median_island');
    const hasDivider = sequence.some(c => c.id === 'lane_divider');
    const hasBike = sequence.some(c => c.id === 'bike_lane');

    if (hasSidewalk) safetyScore += 25;
    if (hasBuffer) safetyScore += 25;
    if (hasBike) safetyScore += 15;

    if (['arterial', 'urban_expressway', 'collector'].includes(cls.id)) {
        // High/medium-speed corridors require physical separation & central refuge
        if (hasMedian) safetyScore += 25;
        else if (hasDivider) safetyScore += 10;
        if (sequence.some(c => c.id === 'bollard')) safetyScore += 10;
        if (motorizedLanes >= 4 && !hasMedian) safetyScore -= 20;
    } else {
        // Calm/local/tourist/shared streets prioritize low lane count & traffic calming
        if (motorizedLanes <= 2) safetyScore += 25;
        else if (motorizedLanes === 3) safetyScore += 5;
        else safetyScore -= 20; // Penalty for arterial-scale lanes inside calm street
        if (hasMedian || hasDivider) safetyScore += 10;
    }
    safetyScore = Math.min(100, Math.max(10, safetyScore));
    document.getElementById('isb-safety-score').textContent = `${safetyScore}%`;

    // 3c. Public Space & Urban Furniture Quality
    let qualityScore = Math.min(60, Math.round((actualHumanPct / Math.max(10, cls.targetHumanPct)) * 60));
    if (sequence.some(c => c.id === 'urban_furniture_buffer')) qualityScore += 20;
    if (sequence.some(c => ['commercial_edge', 'seafront', 'residential_edge'].includes(c.id))) qualityScore += 12;
    if (sequence.some(c => ['bus_station', 'bike_lane', 'bollard'].includes(c.id))) qualityScore += 12;
    qualityScore = Math.min(100, Math.max(0, qualityScore));
    document.getElementById('isb-quality-score').textContent = `${qualityScore}%`;

    // Weighted Sub-Indicator Composite using Class Weights
    const weightedSubScore = Math.round(
        shadingScore * cls.weights.shading +
        safetyScore * cls.weights.safety +
        qualityScore * cls.weights.quality
    );

    // 4. Overall Classification Compliance Score & Bidirectional Engineering Alert
    const diff = actualHumanPct - cls.targetHumanPct;
    let humanizationScore = 0;
    let ratingText = '';
    let ratingColor = '';
    let ratingBg = '';
    let ratingBorder = '';

    const hasSevereVehicleDeficit = (cls.minMotorizedLanes > 0 && motorizedLanes === 0) || (actualHumanPct > cls.maxHumanPct);

    if (hasSevereVehicleDeficit) {
        // Bidirectional Warning: Excessive Humanization / Insufficient Vehicular Capacity for Road Class
        const excess = Math.max(5, actualHumanPct - cls.maxHumanPct);
        const spatialScore = (cls.minMotorizedLanes > 0 && motorizedLanes === 0)
            ? 28
            : Math.max(35, Math.round(78 - excess * 1.15));
        humanizationScore = Math.min(72, Math.round(spatialScore * 0.8 + weightedSubScore * 0.2));
        ratingColor = '#d35400';
        ratingBg = 'rgba(211, 84, 0, 0.08)';
        ratingBorder = 'rgba(211, 84, 0, 0.30)';

        if (cls.minMotorizedLanes > 0 && motorizedLanes === 0) {
            ratingText = `تنبيه وظيفي مروري: التصميم يخلو من مسارات المركبات، وهو ما يتعارض مع الوظيفة التشغيلية لـ (${cls.name} — المطلوب ${cls.targetVehiclePct}% مركبات).`;
        } else {
            ratingText = `تنبيه وظيفي مروري: حيز المركبات الحالي (${actualVehiclePct}%) أقل من المتطلب الوظيفي لـ (${cls.name}: ${cls.targetVehiclePct}% مركبات) وقد يسبب اختناقاً مرورياً.`;
        }
    } else if (actualHumanPct >= cls.targetHumanPct - cls.tolerance) {
        // Optimal Match within Target Band for Selected Classification
        const closeness = Math.max(0, 1 - Math.abs(diff) / (cls.tolerance + 14));
        const spatialScore = Math.round(88 + closeness * 12);
        humanizationScore = Math.min(100, Math.round(spatialScore * 0.75 + weightedSubScore * 0.25));
        ratingColor = '#1e8449';
        ratingBg = 'rgba(39, 174, 96, 0.09)';
        ratingBorder = 'rgba(39, 174, 96, 0.30)';
        ratingText = `ممتاز — تصميمك يحقق التوازن المعياري المستهدف لـ (${cls.name}: ${cls.targetHumanPct}% أنسنة | ${cls.targetVehiclePct}% مركبات).`;
    } else if (actualHumanPct >= cls.targetHumanPct - 20) {
        // Moderate Deficit Below Classification Target
        const deficit = cls.targetHumanPct - actualHumanPct;
        const span = Math.max(1, 20 - cls.tolerance);
        const spatialScore = Math.round(62 + ((20 - deficit) / span) * 22);
        humanizationScore = Math.round(spatialScore * 0.75 + weightedSubScore * 0.25);
        ratingColor = '#b9770e';
        ratingBg = 'rgba(243, 156, 18, 0.10)';
        ratingBorder = 'rgba(243, 156, 18, 0.35)';
        ratingText = `قريب من المعيار — يحتاج التصميم رفع عناصر الأنسنة بنحو (+${deficit}%) للوصول للمستهدف المثالي لـ (${cls.name}: ${cls.targetHumanPct}%).`;
    } else {
        // Severe Humanization Deficit Below Classification Target
        const spatialScore = Math.max(12, Math.round((actualHumanPct / Math.max(1, cls.targetHumanPct)) * 62));
        humanizationScore = Math.min(58, Math.round(spatialScore * 0.8 + weightedSubScore * 0.2));
        ratingColor = '#c0392b';
        ratingBg = 'rgba(217, 83, 79, 0.09)';
        ratingBorder = 'rgba(217, 83, 79, 0.30)';
        ratingText = `غير مطابق لـ (${cls.name}) — طغيان لمسارات المركبات (${actualVehiclePct}%) مقابل (${actualHumanPct}%) فقط للإنسان (المطلوب ${cls.targetHumanPct}% أنسنة).`;
    }

    // Update Humanization Score & Bar UI
    const scoreEl = document.getElementById('isb-humanization-score');
    const barEl = document.getElementById('isb-humanization-bar');
    const ratingEl = document.getElementById('isb-humanization-rating');

    if (scoreEl) {
        scoreEl.textContent = `${humanizationScore}%`;
        scoreEl.style.color = ratingColor;
    }
    if (barEl) {
        barEl.style.width = `${humanizationScore}%`;
        barEl.style.backgroundColor = ratingColor;
    }
    if (ratingEl) {
        ratingEl.textContent = ratingText;
        ratingEl.style.color = ratingColor;
        ratingEl.style.background = ratingBg;
        ratingEl.style.borderColor = ratingBorder;
    }
}

// 14. References & Standards Database
const referencesDB = {
    "commercial_edge": "<strong>الحد التجاري:</strong> الحد الأدنى للعرض هو 3.0م في الشوارع التجارية لتسهيل حركة المارة وجلسات المقاهي - <em>المعايير التوجيهية لأنسنة المدن (وزارة البلديات والإسكان)</em>.",
    "clear_sidewalk": "<strong>رصيف المشاة:</strong> الحد الأدنى لعرض مسار المشاة الخالي من العوائق هو 1.8م لضمان حركة سلسة للمشاة والكراسي المتحركة - <em>دليل الوصول الشامل (APD) وكود البناء السعودي SBC 201</em>.",
    "residential_edge": "<strong>الحد السكني:</strong> يوصى بعرض 1.2م إلى 1.5م كمنطقة ارتداد وحرم بين المباني السكنية والرصيف العام لخصوصية السكان وتوفير ممرات خدمات - <em>المعايير التوجيهية لأنسنة المدن (وزارة البلديات والإسكان)</em>.",
    "urban_furniture_buffer": "<strong>نطاق الأثاث الحضري:</strong> يجب ألا يقل عن 1.0م ويخصص لوضع الأعمدة، والأشجار، وسلال المهملات لحماية المشاة - <em>دليل تصميم الشوارع بوزارة البلديات والإسكان</em>.",
    "seafront": "<strong>الحد البحري:</strong> حد حماية الكورنيش والواجهات البحرية - متوافق مع <em>دليل أمانة المنطقة الشرقية لتطوير الكورنيش والواجهات</em> لضمان السلامة واستمرارية الوصول البصري للماء.",
    "bollard": "<strong>حاجز مشاة (بولارد):</strong> تثبت الحواجز بارتفاع 80-90سم وتباعد 1.2م لمنع دخول السيارات للأرصفة مع السماح بعبور الكراسي المتحركة - <em>دليل الوصول الشامل (APD)</em>.",
    "lane_divider": "<strong>فاصل مسارات (دهان):</strong> فاصل مسارات مرن أو مطلي، يُسهم في التهدئة المرورية وتوجيه الحركة بحد أدنى لعرض الخط 15سم - <em>دليل تصميم الطرق والشوارع (وزارة البلديات والإسكان)</em>.",
    "bike_lane": "<strong>مسار دراجات:</strong> عرض مسار الدراجات أحادي الاتجاه هو 1.2م إلى 1.5م مع توفير حيز عزل أمان 0.5م عن مسار السيارات - <em>أدلة تصميم مسارات الدراجات العالمية (NACTO) والمحلية</em>.",
    "flex_zone": "<strong>النطاق المرن:</strong> عرض 2.5م يتيح الاستخدام المرن لوضع مواقف سيارات طولية أو أحواض تشجير أو محطات انتظار حافلات - <em>دليل NACTO للشوارع الحضرية</em>.",
    "parking_45": "<strong>مواقف بزاوية 45°:</strong> عرض الموقف المائل هو 5.0م، ويسهم في زيادة الطاقة الاستيعابية للمواقف وتسهيل الدوران - <em>دليل تصميم الطرق والشوارع بوزارة البلديات والإسكان</em>.",
    "parking_90": "<strong>مواقف بزاوية 90°:</strong> عرض الموقف العمودي هو 5.5م، ويستوعب أقصى كثافة للسيارات شريطة توفير مساحة ارتداد كافية للمناورة - <em>دليل أمانة المنطقة الشرقية وكود البناء السعودي</em>.",
    "median_island": "<strong>الجزيرة الوسطية:</strong> العرض الموصى به هو 2.0م لتوفير ملاذ آمن للمشاة أثناء عبور الشارع وتثبيت الإنارة والتشجير - <em>دليل تصميم الطرق والشوارع بوزارة البلديات والإسكان</em>.",
    "bus_station": "<strong>موقف حافلات:</strong> يتطلب عرضاً لا يقل عن 2.7م لاستيعاب حارة توقف الحافلات ومظلة الانتظار ومقاعد المشاة دون إعاقة رصيف حركة المشاة الرئيسي - <em>أدلة النقل الجماعي وكود البناء السعودي</em>.",
    "standard_car_lane": "<strong>مسار سيارات:</strong> العرض القياسي لمسار السيارات هو 3.0م في الشوارع الحضرية لتهدئة السرعة وتقليل مساحات الأسفلت غير المستغلة، ويمكن أن يقل لـ 2.75م في المناطق السكنية - <em>دليل تصميم الطرق والشوارع ودليل NACTO</em>.",
    "hov_transit_lane": "<strong>مسار حافلات / نقل سريع:</strong> الحد الأدنى لعرض مسار الحافلات المخصص هو 3.5م لضمان سلامة الحركة للحافلات عريضة الهيكل وسرعة ترددها - <em>دليل NACTO لتصميم الشوارع الحضرية</em>."
};

function showTooltip(e, id) {
    const tooltip = document.getElementById('isb-floating-tooltip');
    if (!tooltip || !referencesDB[id]) return;
    
    tooltip.innerHTML = referencesDB[id];
    tooltip.style.display = 'block';
    
    // Position the tooltip to the left of the hovered element
    const rect = e.currentTarget.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth > 50 ? tooltip.offsetWidth : 300;
    const tooltipHeight = tooltip.offsetHeight > 30 ? tooltip.offsetHeight : 180;
    
    let left = rect.left - tooltipWidth - 15;
    
    // Align tooltip bottom with the parent card's bottom to prevent scroll glitches
    let top;
    const parentCard = e.currentTarget.closest('.isb-sequence-item') || e.currentTarget.closest('.isb-component-item');
    if (parentCard) {
        const cardRect = parentCard.getBoundingClientRect();
        top = cardRect.bottom + window.scrollY - tooltipHeight;
    } else {
        top = rect.bottom + window.scrollY - tooltipHeight;
    }
    
    // Capping boundaries to keep the tooltip fully in the viewport
    const maxTop = window.scrollY + window.innerHeight - tooltipHeight - 20;
    if (top > maxTop) {
        top = maxTop;
    }
    if (left < 10) {
        left = rect.right + 15;
    }
    if (top < window.scrollY + 10) {
        top = window.scrollY + 10;
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.style.opacity = '1';
    
    // Also update the static sidebar reference panel if it exists
    const el = document.getElementById('isb-reference-content');
    if (el) {
        el.innerHTML = referencesDB[id];
    }
}

function hideTooltip() {
    const tooltip = document.getElementById('isb-floating-tooltip');
    if (!tooltip) return;
    tooltip.style.opacity = '0';
    tooltip.style.display = 'none';
}

function showReference(id) {
    const el = document.getElementById('isb-reference-content');
    if (el && referencesDB[id]) {
        el.innerHTML = referencesDB[id];
    }
}

// ==========================================
// 15. AI 3D Render Simulator Integration
// ==========================================

let aiGenTimeout = null;

function openAiRenderModal() {
    const modal = document.getElementById('isb-ai-render-modal');
    if (!modal) return;
    
    modal.style.display = 'flex';
    
    // 1. Reset Modal UI States
    document.getElementById('ai-render-placeholder').style.display = 'flex';
    document.getElementById('ai-generating-container').style.display = 'none';
    document.getElementById('ai-result-container').style.display = 'none';
    
    // 2. Generate Prompt dynamically
    const promptContent = document.getElementById('ai-prompt-content');
    if (promptContent) {
        promptContent.textContent = buildDynamicAiPrompt();
    }
}

function closeAiRenderModal() {
    const modal = document.getElementById('isb-ai-render-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    // Clear any active timeout
    if (aiGenTimeout) {
        clearTimeout(aiGenTimeout);
        aiGenTimeout = null;
    }
}

function buildDynamicAiPrompt() {
    if (!sequence || sequence.length === 0) {
        return `// AI Prompt Generator\n\n[Warning]: No street elements added yet.\nAdd street components on the canvas to generate a custom prompt.`;
    }

    // Map component IDs to English prompt terms
    const termMap = {
        "commercial_edge": "active commercial buffer edge with shop entrances and cafes",
        "clear_sidewalk": "pedestrian sidewalk paved with light concrete pavers",
        "residential_edge": "residential buffer edge next to modern villas",
        "urban_furniture_buffer": "street furniture zone featuring leafy green trees and street lighting poles",
        "seafront": "seafront waterfront promenade with safety steel barrier",
        "bollard": "protective security bollards separating walkway from street",
        "lane_divider": "painted asphalt separator line",
        "bike_lane": "green asphalt cycling lane with bicycle pavement symbol",
        "flex_zone": "flexible zone featuring small interlock pavers and seating elements",
        "parking_45": "angled 45-degree car parking spaces with concrete stopper blocks",
        "parking_90": "perpendicular 90-degree car parking spaces with wheel stoppers",
        "median_island": "raised central green median island with palm trees",
        "bus_station": "modern public bus transit stop shelter with seating bench",
        "standard_car_lane": "standard asphalt vehicular driving lane",
        "hov_transit_lane": "red asphalt dedicated priority bus lane"
    };

    let componentsDesc = [];
    sequence.forEach(c => {
        const desc = termMap[c.id] || c.id;
        componentsDesc.push(`- ${c.default_width_m}m ${desc}`);
    });

    const streetName = document.getElementById('isb-street-name')?.value || "unnamed street";

    let promptText = `// Visual Parameters\n`;
    promptText += `Theme: Modern Humanized Street Design\n`;
    promptText += `Location Concept: ${streetName}\n`;
    promptText += `Perspective: Eye-level Photorealistic 3D Architectural Render\n`;
    promptText += `Lighting: Soft Warm Golden Hour Sunlight\n\n`;
    promptText += `// Street Components Sequence:\n`;
    promptText += componentsDesc.join('\n');
    promptText += `\n\n// Compiled AI System Prompt:\n`;
    
    // Compile clean inline prompt
    const cleanList = sequence.map(c => termMap[c.id] || c.id).join(', ');
    promptText += `"A photorealistic eye-level 3D architectural rendering of a beautiful modern humanized urban street. The street design features: ${cleanList}. Active public space, lush green trees casting realistic soft shadows, warm volumetric sunlight, high-resolution architectural visual, clean layout."`;

    return promptText;
}

function startAiGenerationSim() {
    const placeholder = document.getElementById('ai-render-placeholder');
    const loading = document.getElementById('ai-generating-container');
    const result = document.getElementById('ai-result-container');
    const statusHeading = document.getElementById('ai-status-heading');
    const statusDesc = document.getElementById('ai-status-desc');
    
    placeholder.style.display = 'none';
    loading.style.display = 'flex';
    
    const steps = [
        { heading: "جارٍ تحليل المقطع العرضي...", desc: "قراءة ترتيب المسارات والمكونات الهندسية" },
        { heading: "جارٍ صياغة التوجيه البصري (Prompt)...", desc: "بناء الوصف الفني لمحرك التوليد" },
        { heading: "جارٍ تطبيق الخامات والإضاءة...", desc: "محاكاة ظلال الأشجار والإنارة الواقعية" },
        { heading: "جارٍ إنهاء اللقطة المعمارية ثلاثية الأبعاد...", desc: "تطبيق التنعيم والمعالجة البصرية الأخيرة" }
    ];
    
    let currentStep = 0;
    
    function runLoaderStep() {
        if (currentStep < steps.length) {
            statusHeading.textContent = steps[currentStep].heading;
            statusDesc.textContent = steps[currentStep].desc;
            currentStep++;
            aiGenTimeout = setTimeout(runLoaderStep, 1200);
        } else {
            // Determine render image based on design components
            let selectedImage = 'assets/ai-renders/shared_street_3d.png'; // Default
            
            const hasSeafront = sequence.some(c => c.id === 'seafront');
            const hasTransit = sequence.some(c => ['hov_transit_lane', 'bus_station', 'median_island'].includes(c.id));
            const hasResidential = sequence.some(c => c.id === 'residential_edge');
            const hasCommercial = sequence.some(c => c.id === 'commercial_edge');
            
            if (hasSeafront) {
                selectedImage = 'assets/ai-renders/waterfront_commercial_3d.png';
            } else if (hasTransit) {
                selectedImage = 'assets/ai-renders/transit_corridor_3d.png';
            } else if (hasResidential) {
                selectedImage = 'assets/ai-renders/local_residential_3d.png';
            } else if (hasCommercial) {
                selectedImage = 'assets/ai-renders/waterfront_commercial_3d.png';
            } else if (sequence.some(c => ['standard_car_lane', 'parking_45', 'parking_90'].includes(c.id))) {
                selectedImage = 'assets/ai-renders/local_residential_3d.png';
            }
            
            // Set image source & download link
            const resultImg = document.getElementById('ai-result-image');
            const downloadLink = document.getElementById('ai-download-link');
            if (resultImg) resultImg.src = selectedImage;
            if (downloadLink) {
                downloadLink.href = selectedImage;
                downloadLink.download = `${document.getElementById('isb-street-name')?.value || 'street'}-3d-render.png`;
            }
            
            // Toggle container display
            loading.style.display = 'none';
            result.style.display = 'flex';
        }
    }
    
    runLoaderStep();
}



// ==========================================
// 16. Official Engineering Approval Report Generator (PDF / Print)
// ==========================================

async function exportEngineeringReport() {
    const svg = document.getElementById('isb-svg-canvas');
    if (!svg || !sequence || sequence.length === 0) {
        alert("برجاء إضافة عناصر لتصميم الشارع أولاً قبل إصدار تقرير الاعتماد الهندسي.");
        return;
    }

    const streetName = (document.getElementById('isb-street-name')?.value || '').trim() || 'شارع حضري مقترح';
    const netWidth = calculateStreetWidth();
    const grossWidth = calculateVisualTotalWidth();
    const refNumber = `SHQ-ENG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const dateStr = new Date().toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });

    // Read current evaluation metrics & street classification from DOM / State
    const activeCls = getActiveStreetClass();
    const activeCat = getActiveFunctionalCategory(activeCls);
    const actualHumanText = document.getElementById('isb-actual-human-pct')?.textContent || '0% أنسنة';
    const actualVehicleText = document.getElementById('isb-actual-vehicle-pct')?.textContent || '0% مركبات';
    const humanizationScore = document.getElementById('isb-humanization-score')?.textContent || '0%';
    const humanizationRating = document.getElementById('isb-humanization-rating')?.textContent || '-';
    const shadingScore = document.getElementById('isb-shading-score')?.textContent || '0%';
    const safetyScore = document.getElementById('isb-safety-score')?.textContent || '0%';
    const qualityScore = document.getElementById('isb-quality-score')?.textContent || '0%';

    const carCap = document.getElementById('isb-car-capacity')?.textContent || '0';
    const busCap = document.getElementById('isb-bus-capacity')?.textContent || '0';
    const bikeCap = document.getElementById('isb-bike-capacity')?.textContent || '0';
    const pedCap = document.getElementById('isb-pedestrian-capacity')?.textContent || '0';
    const totalCap = document.getElementById('isb-total-person-capacity')?.textContent || '0';

    // Clone SVG and resolve relative image URLs to absolute URLs for the report window
    const clonedSvg = svg.cloneNode(true);
    const images = clonedSvg.querySelectorAll('image');
    images.forEach(img => {
        const href = img.getAttribute('href') || img.getAttribute('xlink:href');
        if (href && !href.startsWith('http') && !href.startsWith('data:') && !href.startsWith('blob:')) {
            const absoluteUrl = new URL(href, window.location.href).href;
            img.setAttribute('href', absoluteUrl);
            img.removeAttribute('xlink:href');
        }
    });
    clonedSvg.style.width = '100%';
    clonedSvg.style.height = 'auto';
    clonedSvg.style.maxHeight = '460px';
    const svgHtml = new XMLSerializer().serializeToString(clonedSvg);

    // Minimum standard widths for automated code compliance audit
    const minStandards = {
        clear_sidewalk: 1.8,
        commercial_edge: 3.0,
        residential_edge: 1.2,
        urban_furniture_buffer: 1.0,
        bike_lane: 1.2,
        flex_zone: 2.5,
        parking_45: 5.0,
        parking_90: 5.5,
        median_island: 1.5,
        bus_station: 2.7,
        standard_car_lane: 2.75,
        hov_transit_lane: 3.5
    };

    const rowsHtml = sequence.map((item, idx) => {
        const w = Number(item.default_width_m || 0);
        const pct = grossWidth > 0 ? ((w / grossWidth) * 100).toFixed(1) : '0.0';
        const minW = minStandards[item.id];
        const isCompliant = !minW || w >= minW;
        const statusBadge = isCompliant
            ? `<span style="background:#e8f8f0;color:#1e8449;padding:3px 8px;border-radius:12px;font-weight:700;font-size:0.75rem;display:inline-block;">✓ مطابق للكود</span>`
            : `<span style="background:#fef5e7;color:#b9770e;padding:3px 8px;border-radius:12px;font-weight:700;font-size:0.75rem;display:inline-block;">⚠ أقل من الموصى (${minW}م)</span>`;
        const refText = (referencesDB[item.id] || 'معايير وزارة البلديات والإسكان وكود البناء السعودي').replace(/<strong>.*?<\/strong>\s*/g, '');

        return `
            <tr>
                <td style="text-align:center;font-weight:bold;">${idx + 1}</td>
                <td><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${item.color};margin-left:6px;"></span><strong>${item.name}</strong></td>
                <td style="text-align:center;font-weight:bold;">${w.toFixed(1)} م</td>
                <td style="text-align:center;">${pct}%</td>
                <td style="text-align:center;">${statusBadge}</td>
                <td style="font-size:0.78rem;color:#444;line-height:1.45;">${refText}</td>
            </tr>
        `;
    }).join('');

    // Automatically determine required Execution Shop Drawings based on street elements
    const shopDrawings = [];
    const hasSidewalk = sequence.some(c => ['clear_sidewalk', 'commercial_edge', 'residential_edge', 'seafront'].includes(c.id));
    const hasGreen = sequence.some(c => ['urban_furniture_buffer', 'median_island'].includes(c.id));
    const hasBike = sequence.some(c => c.id === 'bike_lane');
    const hasRoad = sequence.some(c => ['standard_car_lane', 'hov_transit_lane', 'parking_45', 'parking_90', 'flex_zone'].includes(c.id));

    if (hasSidewalk) {
        shopDrawings.push({ code: 'SD-001', title: 'مخطط تركيب بلاط الجرانيت للأرصفة والممرات', file: '001- GRANITE PAVING.pdf' });
        shopDrawings.push({ code: 'SD-004', title: 'تفاصيل تركيب بلاط الإنترلوك مسبق الصنع وطبقات التأسيس', file: '004- PRECAST INTERLOCK PAVING.pdf' });
    }
    if (hasRoad) {
        shopDrawings.push({ code: 'SD-005', title: 'تفاصيل تركيب بلدورات الطرق الفاصلة (Precast Road Curb)', file: '005- PRECAST ROAD CURB.pdf' });
    }
    if (hasGreen) {
        shopDrawings.push({ code: 'SD-012', title: 'مخطط إنشائي لأحواض الأشجار وعزل الجذور والري بالتنقيط', file: '012-Tree Pit.pdf' });
        shopDrawings.push({ code: 'SD-006', title: 'تفاصيل بلدورات الحدائق والفراغات المزروعة (Landscape Curb)', file: '006- PRECAST LS CURB.pdf' });
    }
    if (hasBike) {
        shopDrawings.push({ code: 'SD-013', title: 'تفاصيل تنفيذ الأسفلت الأخضر لمسارات الدراجات', file: '013- Green Asphalt.pdf' });
    }

    const shopDrawingsHtml = shopDrawings.map(sd => {
        const pdfUrl = new URL(`details pdf/${sd.file}`, window.location.href).href;
        return `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#f8f9fa;border:1px solid #e2e6ea;border-radius:6px;font-size:0.82rem;">
                <div>
                    <span style="background:#8C6D46;color:#fff;padding:2px 7px;border-radius:4px;font-weight:bold;font-size:0.72rem;margin-left:8px;">${sd.code}</span>
                    <strong>${sd.title}</strong>
                </div>
                <a href="${pdfUrl}" target="_blank" style="color:#1e6b52;font-weight:bold;text-decoration:none;font-size:0.78rem;">معاينة المخطط التنفيذي ↗</a>
            </div>
        `;
    }).join('');

    const logoUrl = new URL('logo.svg', window.location.href).href;

    const reportWindow = window.open('', '_blank');
    if (!reportWindow) {
        alert("يرجى السماح بالنوافذ المنبثقة (Pop-ups) في المتصفح لعرض وطباعة التقرير الهندسي.");
        return;
    }

    reportWindow.document.write(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>تقرير الاعتماد الهندسي - ${streetName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: 'Tajawal', 'Cairo', sans-serif;
            margin: 0;
            padding: 0;
            background: #eef1f5;
            color: #1f2937;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        .no-print-bar {
            position: sticky;
            top: 0;
            z-index: 100;
            background: #1f2937;
            color: #fff;
            padding: 12px 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            font-family: 'Cairo', sans-serif;
        }
        .btn-print {
            background: #1e6b52;
            color: #fff;
            border: none;
            padding: 8px 20px;
            border-radius: 6px;
            font-family: 'Cairo', sans-serif;
            font-weight: 800;
            font-size: 0.92rem;
            cursor: pointer;
            margin-left: 10px;
        }
        .btn-close {
            background: #4b5563;
            color: #fff;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-family: 'Cairo', sans-serif;
            font-weight: 700;
            font-size: 0.88rem;
            cursor: pointer;
        }
        .report-page {
            max-width: 1100px;
            margin: 24px auto;
            background: #fff;
            padding: 36px 42px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border-radius: 8px;
        }
        .report-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid #8C6D46;
            padding-bottom: 18px;
            margin-bottom: 24px;
        }
        .brand-box {
            display: flex;
            align-items: center;
            gap: 14px;
        }
        .brand-box img {
            height: 58px;
        }
        .brand-box h1 {
            font-family: 'Cairo', sans-serif;
            font-size: 1.45rem;
            margin: 0;
            color: #1f2937;
            font-weight: 900;
        }
        .brand-box p {
            margin: 2px 0 0 0;
            font-size: 0.85rem;
            color: #8C6D46;
            font-weight: 700;
        }
        .meta-box {
            text-align: left;
            font-size: 0.83rem;
            line-height: 1.6;
            background: #f9f7f4;
            padding: 10px 16px;
            border-radius: 6px;
            border-right: 4px solid #8C6D46;
        }
        .section-title {
            font-family: 'Cairo', sans-serif;
            font-size: 1.08rem;
            font-weight: 800;
            color: #8C6D46;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 6px;
            margin: 24px 0 14px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 12px;
            margin-bottom: 20px;
        }
        .kpi-card {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        }
        .kpi-card.highlight {
            background: #fdfaf6;
            border-color: #8C6D46;
        }
        .kpi-value {
            font-family: 'Cairo', sans-serif;
            font-size: 1.55rem;
            font-weight: 900;
            color: #8C6D46;
        }
        .kpi-label {
            font-size: 0.78rem;
            color: #4b5563;
            font-weight: 700;
            margin-top: 4px;
        }
        .svg-box {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 14px;
            background: #fff;
            text-align: center;
            overflow: hidden;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.84rem;
            margin-bottom: 18px;
        }
        th {
            background: #2c3e50;
            color: #fff;
            font-family: 'Cairo', sans-serif;
            font-weight: 700;
            padding: 9px 10px;
            border: 1px solid #2c3e50;
            text-align: right;
        }
        td {
            padding: 8px 10px;
            border: 1px solid #e5e7eb;
            vertical-align: middle;
        }
        tr:nth-child(even) { background: #fcfcfd; }
        .capacity-strip {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            background: #f4f6f9;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #dce1e7;
            text-align: center;
        }
        .signoff-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-top: 28px;
            padding-top: 18px;
            border-top: 2px dashed #d1d5db;
        }
        .signoff-box {
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 12px 14px;
            background: #fafafa;
            font-size: 0.82rem;
        }
        .signoff-box h5 {
            font-family: 'Cairo', sans-serif;
            margin: 0 0 8px 0;
            color: #1f2937;
            font-size: 0.88rem;
        }
        @media print {
            body { background: #fff; }
            .no-print-bar { display: none !important; }
            .report-page {
                margin: 0;
                padding: 15px 20px;
                box-shadow: none;
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="no-print-bar">
        <div>
            <strong>وثيقة الاعتماد الهندسي وتقييم الأنسنة</strong> — جاهزة للطباعة أو الحفظ بصيغة PDF
        </div>
        <div>
            <button class="btn-print" onclick="window.print()">🖨️ طباعة / حفظ كملف PDF</button>
            <button class="btn-close" onclick="window.close()">إغلاق</button>
        </div>
    </div>

    <div class="report-page">
        <div class="report-header">
            <div class="brand-box">
                <img src="${logoUrl}" alt="شعار أمانة المنطقة الشرقية">
                <div>
                    <h1>تقرير الاعتماد الهندسي وتقييم كفاءة أنسنة الشارع</h1>
                    <p>منصة أنسنة الشرقية — نظام التوليد والتدقيق الكودي الآلي للمجال العام</p>
                </div>
            </div>
            <div class="meta-box">
                <div><strong>الرقم المرجعي:</strong> ${refNumber}</div>
                <div><strong>تاريخ الإصدار:</strong> ${dateStr}</div>
                <div><strong>الإطار المرجعي:</strong> منهجية وزارة البلديات والإسكان</div>
            </div>
        </div>

        <table style="margin-bottom: 18px; border: 1.5px solid #8C6D46; border-radius: 6px; overflow: hidden;">
            <thead>
                <tr>
                    <th colspan="4" style="background: #f9f7f4; color: #8C6D46; border-color: #e5dfd5; font-size: 0.9rem; padding: 8px 12px;">
                        جدول بيانات المشروع والتصنيف الوظيفي المعتمد
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="width: 22%; background: #fcfbf9; font-weight: 800; color: #374151;">اسم الطريق / المشروع</td>
                    <td style="width: 28%; font-weight: 700;">${streetName}</td>
                    <td style="width: 24%; background: #fcfbf9; font-weight: 800; color: #374151;">الغرض الوظيفي (وفق منهجية الوزارة)</td>
                    <td style="width: 26%;">
                        <span style="display:inline-block; background:${activeCat.badgeBg}; color:${activeCat.badgeColor}; border:1px solid ${activeCat.badgeBorder}; padding:3px 10px; border-radius:14px; font-family:'Cairo',sans-serif; font-weight:800; font-size:0.82rem;">
                            ${activeCat.shortLabel} — ${activeCat.name} (التركيز: ${activeCat.focus})
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style="background: #fcfbf9; font-weight: 800; color: #374151;">النمط التفصيلي المعتمد</td>
                    <td><strong>${activeCls.name}</strong> <span style="color:#6b7280; font-size:0.78rem;">(${activeCls.targetHumanPct}% أنسنة | ${activeCls.targetVehiclePct}% مركبات)</span></td>
                    <td style="background: #fcfbf9; font-weight: 800; color: #374151;">توزيع التصميم الفعلي</td>
                    <td style="font-weight: 700;">${actualHumanText} &nbsp;|&nbsp; ${actualVehicleText}</td>
                </tr>
                <tr>
                    <td style="background: #fcfbf9; font-weight: 800; color: #374151;">صافي عرض الحرم التصميمي</td>
                    <td colspan="3">
                        <strong>${netWidth.toFixed(1)} م</strong> — ${(netWidth >= activeCls.minWidthM && netWidth <= activeCls.maxWidthM) ? `<span style="color:#1e8449;font-weight:bold;">✓ ضمن النطاق القياسي للتصنيف (${activeCls.minWidthM}–${activeCls.maxWidthM} م)</span>` : `<span style="color:#b45309;font-weight:bold;">⚠ خارج النطاق المعتاد للتصنيف (${activeCls.minWidthM}–${activeCls.maxWidthM} م — ملاحظة استرشادية)</span>`}
                        <span style="color:#6b7280; font-size:0.8rem; margin-right:8px;">(العرض الكلي شاملاً الارتدادات: ${grossWidth.toFixed(1)} م)</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="section-title">
            <span>1. ملخص مؤشرات كفاءة الأنسنة والامتثال المعياري</span>
            <span style="font-size:0.82rem;color:#1e8449;font-weight:bold;">الحالة التقييمية: ${humanizationRating}</span>
        </div>
        <div class="kpi-grid">
            <div class="kpi-card highlight">
                <div class="kpi-value">${humanizationScore}</div>
                <div class="kpi-label">مطابقة معيار التصنيف (${activeCls.name})</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value" style="color:#27ae60;">${shadingScore}</div>
                <div class="kpi-label">الاستجابة للمناخ والظل</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value" style="color:#2980b9;">${safetyScore}</div>
                <div class="kpi-label">سلامة الحركة وحماية المشاة</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value" style="color:#8e44ad;">${qualityScore}</div>
                <div class="kpi-label">جودة الفراغ العام والأثاث</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-value" style="color:#2c3e50;">${sequence.length}</div>
                <div class="kpi-label">إجمالي القطاعات التصميمية</div>
            </div>
        </div>

        <div class="section-title">
            <span>2. التوليد الهندسي الآلي للمقطع العرضي والمسقط الأفقي (Cross-Section & Plan View)</span>
            <span style="font-size:0.78rem;color:#6b7280;">مقياس رسم هندسي متجهي (Vector SVG)</span>
        </div>
        <div class="svg-box">
            ${svgHtml}
        </div>

        <div class="section-title">
            <span>3. تحليل القدرة الاستيعابية للتدفق الساعي (وفق مرجعية NACTO العالمية)</span>
            <span style="font-size:0.78rem;color:#6b7280;">وحدة القياس: شخص / ساعة</span>
        </div>
        <div class="capacity-strip">
            <div><div style="font-size:0.76rem;color:#6b7280;">السيارات الخاصة</div><strong style="font-size:0.95rem;color:#1f2937;">${carCap}</strong></div>
            <div><div style="font-size:0.76rem;color:#6b7280;">النقل الجماعي (حافلات)</div><strong style="font-size:0.95rem;color:#d66c5c;">${busCap}</strong></div>
            <div><div style="font-size:0.76rem;color:#6b7280;">مسارات الدراجات</div><strong style="font-size:0.95rem;color:#2980b9;">${bikeCap}</strong></div>
            <div><div style="font-size:0.76rem;color:#6b7280;">أرصفة المشاة</div><strong style="font-size:0.95rem;color:#8e44ad;">${pedCap}</strong></div>
            <div style="background:#e8f8f0;border-radius:6px;padding:4px;"><div style="font-size:0.76rem;color:#1e8449;font-weight:bold;">إجمالي سعة التدفق</div><strong style="font-size:1.05rem;color:#1e8449;">${totalCap}</strong></div>
        </div>

        <div class="section-title">
            <span>4. جدول تفكيك عناصر الشارع ومطابقة الكود الهندسي (Code Compliance Audit)</span>
            <span style="font-size:0.78rem;color:#6b7280;">مرتب من اليسار إلى اليمين حسب المقطع</span>
        </div>
        <table>
            <thead>
                <tr>
                    <th style="width:40px;text-align:center;">#</th>
                    <th style="width:160px;">العنصر التصميمي</th>
                    <th style="width:85px;text-align:center;">العرض (م)</th>
                    <th style="width:75px;text-align:center;">النسبة</th>
                    <th style="width:130px;text-align:center;">حالة المطابقة</th>
                    <th>المرجعية التنظيمية والكود الهندسي المعتمد</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>

        <div class="section-title">
            <span>5. حزمة المخططات التنفيذية الموصى بإرفاقها للمقاول (Linked Shop Drawings)</span>
            <span style="font-size:0.78rem;color:#6b7280;">مرتبطة آلياً بمكونات المقطع لضبط جودة التنفيذ الميداني</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:10px;">
            ${shopDrawingsHtml || '<p style="font-size:0.85rem;color:#666;">لا توجد مخططات تفصيلية إضافية مطلوبة.</p>'}
        </div>

        <div class="signoff-grid">
            <div class="signoff-box">
                <h5>إعداد المكتب الهندسي / المصمم</h5>
                <div>الاسم: .................................................</div>
                <div style="margin-top:6px;">التوقيع: ...............................................</div>
            </div>
            <div class="signoff-box">
                <h5>تدقيق إدارة التصميم الحضري والأنسنة</h5>
                <div>حالة الفحص الآلي: <strong>مكتمل (${humanizationScore})</strong></div>
                <div style="margin-top:6px;">المراجع: ...............................................</div>
            </div>
            <div class="signoff-box">
                <h5>اعتماد صاحب الصلاحية</h5>
                <div>القرار: [ &nbsp; ] معتمد للتنفيذ &nbsp; [ &nbsp; ] معتمد بملاحظات</div>
                <div style="margin-top:6px;">الختم الرسمي: .......................................</div>
            </div>
        </div>
    </div>
</body>
</html>
    `);
    reportWindow.document.close();
}

window.exportEngineeringReport = exportEngineeringReport;

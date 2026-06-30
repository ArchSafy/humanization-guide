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
                               "color":  "#dcdedd",
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
                               "color":  "#b8a392",
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
                           }
                       ]
    },
    {
        "category":  "التنقل والبنية التحتية",
        "components":  [
                           {
                               "color":  "#8AC645",
                               "default_width_m":  1.2,
                               "description":  "مسار دراجات أحادي الاتجاه معزول عن حركة السيارات.",
                               "id":  "bike_lane",
                               "name":  "مسار دراجات"
                           },
                           {
                               "color":  "#d2a747",
                               "default_width_m":  2.5,
                               "description":  "مساحة جانبية متعددة الاستخدامات مهيأة للمواقف أو محطات الحافلات أو التشجير.",
                               "id":  "flex_zone",
                               "name":  "النطاق المرن"
                           },
                           {
                               "color":  "#d2a747",
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
                               "color":  "#9bb39b",
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
    "collector_bus_37m": "شارع تجميعي مع موقف حافلات (37 متر)",
    "commercial_residential_33m":  "شارع تجاري سكني"
};

const carModels = [
    {
        "back":  "assets/cars/Car back Alt 01.png",
        "front":  "assets/cars/Car front Alt 01.png"
    },
    {
        "back":  "assets/cars/Car back Alt 02.png",
        "front":  "assets/cars/Car front Alt 02.png"
    },
    {
        "back":  "assets/cars/Car back Alt 03.png",
        "front":  "assets/cars/Car front Alt 03.png"
    }
];

let sequence = [];
let zoomLevel = 1.0;
let scale = 40;
let draggedInstanceId = null;
let dragOverIndex = null;
let carDrawCount = 0;

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
            
            compDiv.innerHTML = `
                <div class="isb-component-header">
                    <span class="isb-component-title">${comp.name}</span>
                    <span class="isb-component-width">${comp.default_width_m}م</span>
                </div>
                <div class="isb-component-desc">${comp.description}</div>
            `;
            
            compDiv.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', comp.id);
                e.dataTransfer.effectAllowed = 'copy';
            });
            
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
        
        let totalWidth = 0;
        sequence.forEach(c => totalWidth += c.default_width_m);
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
        
        let totalWidth = 0;
        sequence.forEach(c => totalWidth += c.default_width_m);
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
    
    sequence.forEach(comp => {
        totalWidth += comp.default_width_m;
        
        const item = document.createElement('div');
        item.className = 'isb-sequence-item';
        item.dataset.instanceId = comp.instanceId;
        
        const hasVeg = comp.id === 'median_island' || comp.id === 'urban_furniture_buffer';
        const hasButtons = hasVeg || comp.id === 'median_island' || comp.id === 'urban_furniture_buffer' || comp.id === 'bike_lane';
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

        item.innerHTML = `
            <button class="remove-btn" style="width: ${18 * zoomLevel}px; height: ${18 * zoomLevel}px; font-size: ${10 * zoomLevel}px;" onclick="removeComponent(${comp.instanceId})"><i class="fas fa-times"></i></button>
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
    
    let carDrawCount = 0;
    const getCarSize = (model) => {
        const isAlt1 = model.front.includes('Alt 01');
        const scaleFactor = isAlt1 ? 1.3 : 1.0;
        return { w: 75 * scaleFactor, h: 54 * scaleFactor };
    };
    
    const scale = 40; // 40px = 1 meter
    const svgWidth = Math.max(800, totalWidth * scale + 100);
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
    const skyRightX = (sequence.length > 0 && sequence[sequence.length - 1].id === 'seafront') ? (startX + totalWidth * scale + seafrontRightExtension) : (startX + totalWidth * scale);
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
        { path: 'assets/people/man 1.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/people/woman 1.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/people/child 1.png', w: 26, h: 50, offsetY: 0 },
        { path: 'assets/people/old man 1.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/people/man 2.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/people/woman 2.png', w: 32, h: 70, offsetY: 0 },
        { path: 'assets/people/child 2.png', w: 26, h: 50, offsetY: 0 },
        { path: 'assets/people/old man 2.png', w: 32, h: 70, offsetY: 0 }
    ];

    const seededRandom = (seed) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };

    const drawPersonSeeded = (group, x, y, laneSeed, personIdx) => {
        const seed = laneSeed + personIdx * 13.7;
        const rand = seededRandom(seed);
        const personIndex = Math.floor(rand * peopleAssets.length);
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
        
        const medianIdx = sequence.findIndex(c => c.id === 'median_island');
        const isRightSide = medianIdx === -1 
            ? (index >= Math.ceil(sequence.length / 2))
            : (index > medianIdx);
        
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
            const triHeadY = isRightSide ? centerY - 10 : centerY - 3;
            const triBaseY = isRightSide ? centerY - 3 : centerY - 10;
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
                ? 'assets/Plantation/palm elevation 01.png'
                : 'assets/Plantation/Tree elevation new 01.png';
                
            const treeW = (isPalm 
                ? 225 * scaleFactor * 1.1 * 2.5
                : 290 * scaleFactor * 1.1) * 1.3;
            const treeH = (isPalm 
                ? 360 * scaleFactor * 1.1 * 2.5
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
                    href: model1.front,
                    x: currentX + widthPx/4 - size1.w / 2,
                    y: compY - size1.h,
                    width: size1.w,
                    height: size1.h,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
                const model2 = carModels[carDrawCount % carModels.length];
                carDrawCount++;
                const size2 = getCarSize(model2);                fgGroup.appendChild(createSvgElement('image', {
                    href: model2.back,
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
                    href: isRightSide ? model.back : model.front,
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
                href: isRightSide ? model.back : model.front,
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
                        ? (isRightSide ? 'assets/edges/Commercial Coffe Right side.png' : 'assets/edges/Commercial Coffe Left side.png')
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
        
        const plan = createSvgElement('rect', {
            x: currentX, y: planY, width: widthPx, height: planHeight, fill: comp.color, stroke: '#fff', 'stroke-width': '1'
        });
        bgGroup.appendChild(plan);
        
        if (comp.id === 'median_island' || comp.id === 'urban_furniture_buffer') {
            const treeSize = 180 * 0.9;
            
            let treeXOffset = 0;
            
            // Top tree: placed fully inside the plan band, touching the top cut line
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/tree plan3.png',
                x: currentX + widthPx/2 - treeSize/2 + treeXOffset,
                y: planY,
                width: treeSize,
                height: treeSize,
                preserveAspectRatio: 'xMidYMid slice'
            }));            
            // Bottom tree: placed fully inside the plan band, touching the bottom edge
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/tree plan3.png',
                x: currentX + widthPx/2 - treeSize/2 + treeXOffset,
                y: planY + planHeight - treeSize,
                width: treeSize,
                height: treeSize,
                preserveAspectRatio: 'xMidYMid slice'
            }));

            // Draw custom light pole top-view symbol if enabled
            if ((comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') && comp.showLight) {
                const isMedian = comp.id === 'median_island';
                const poleXOffset = 0; // Centered, no shift
                const poleCenterX = currentX + widthPx/2 + poleXOffset;
                const poleCenterY = planY + planHeight/2;
                
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
            const rotation = isRightSide ? 0 : 180;            if (widthPx >= 160) {
                const car1X = currentX + widthPx/4;
                const car1Y = planY + planHeight/4;
                fgGroup.appendChild(createSvgElement('image', {
                    href: 'assets/car top.png',
                    x: car1X - carW/2,
                    y: car1Y - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: rotation ? `rotate(${rotation} ${car1X} ${car1Y})` : ''
                }));
                
                const car2X = currentX + 3*widthPx/4;
                const car2Y = planY + 3*planHeight/4;
                fgGroup.appendChild(createSvgElement('image', {
                    href: 'assets/car top.png',
                    x: car2X - carW/2,
                    y: car2Y - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: rotation ? `rotate(${rotation} ${car2X} ${car2Y})` : ''
                }));
            } else {                const carX = currentX + widthPx/2;
                const carY = (index % 2 === 0) ? (planY + planHeight * 0.7) : (planY + planHeight * 0.3);                fgGroup.appendChild(createSvgElement('image', {
                    href: 'assets/car top.png',
                    x: carX - carW/2,
                    y: carY - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: rotation ? `rotate(${rotation} ${carX} ${carY})` : ''
                }));
            }
        } else if (comp.id === 'hov_transit_lane') {
            const busW = 140;
            const busH = 364;
            const busX = currentX + widthPx/2;
            const busY = planY + planHeight/2;
            const rotation = isRightSide ? 180 : 0;
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/bus top.png',
                x: busX - busW/2,
                y: busY - busH/2,
                width: busW,
                height: busH,
                preserveAspectRatio: 'xMidYMid meet',
                transform: rotation ? `rotate(${rotation} ${busX} ${busY})` : ''
            }));
        } else if (comp.id === 'flex_zone') {
            const carW = 76;
            const carH = 154;
            const carX = currentX + widthPx/2;
            const rotation = isRightSide ? 0 : 180;
            
            const car1Y = planY + planHeight * 0.25;
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/car top.png',
                x: carX - carW/2,
                y: car1Y - carH/2,
                width: carW,
                height: carH,
                preserveAspectRatio: 'xMidYMid meet',
                transform: rotation ? `rotate(${rotation} ${carX} ${car1Y})` : ''
            }));            
            const car2Y = planY + planHeight * 0.75;
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/car top.png',
                x: carX - carW/2,
                y: car2Y - carH/2,
                width: carW,
                height: carH,
                preserveAspectRatio: 'xMidYMid meet',
                transform: rotation ? `rotate(${rotation} ${carX} ${car2Y})` : ''
            }));
        } else if (comp.id === 'parking_45') {
            // Draw parking slot lines
            const lineSpacing = 120; // Spacing of lines along Y-axis
            for (let y = planY - widthPx; y < planY + planHeight + widthPx; y += lineSpacing) {
                let x1 = currentX;
                let y1 = y;
                let x2 = currentX + widthPx;
                let y2 = y - widthPx;
                
                if (isRightSide) {
                    if (y1 > planY + planHeight) {
                        const diff = y1 - (planY + planHeight);
                        x1 += diff;
                        y1 -= diff;
                    }
                    if (y2 < planY) {
                        const diff = planY - y2;
                        x2 -= diff;
                        y2 += diff;
                    }
                } else {
                    x1 = currentX + widthPx;
                    y1 = y;
                    x2 = currentX;
                    y2 = y - widthPx;
                    
                    if (y1 > planY + planHeight) {
                        const diff = y1 - (planY + planHeight);
                        x1 -= diff;
                        y1 -= diff;
                    }
                    if (y2 < planY) {
                        const diff = planY - y2;
                        x2 += diff;
                        y2 += diff;
                    }
                }
                
                if (y1 >= planY && y2 <= planY + planHeight && x1 >= currentX && x1 <= currentX + widthPx && x2 >= currentX && x2 <= currentX + widthPx) {
                    bgGroup.appendChild(createSvgElement('line', {
                        x1: x1,
                        y1: y1,
                        x2: x2,
                        y2: y2,
                        stroke: 'rgba(255, 255, 255, 0.35)',
                        'stroke-width': '2'
                    }));
                }
            }            
            // Draw 3 top-view cars parked at 45 degrees
            const carW = 76;
            const carH = 154;
            const carX = currentX + widthPx / 2;
            const rotation = isRightSide ? 45 : -45;
            
            const carPositionsY = [
                planY + planHeight * 0.2,
                planY + planHeight * 0.5,
                planY + planHeight * 0.8
            ];            
            carPositionsY.forEach(carY => {                fgGroup.appendChild(createSvgElement('image', {
                    href: 'assets/car top.png',
                    x: carX - carW / 2,
                    y: carY - carH / 2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: `rotate(${rotation} ${carX} ${carY})`
                }));
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
                    stroke: 'rgba(255, 255, 255, 0.35)',
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
            carPositionsY.forEach(carY => {
                fgGroup.appendChild(createSvgElement('image', {
                    href: 'assets/car top.png',
                    x: carX - carW / 2,
                    y: carY - carH / 2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: `rotate(${rotation} ${carX} ${carY})`
                }));
            });
        } else if (comp.id === 'bike_lane') {
            const bikeW = 34;
            const bikeH = 94;
            const bikeX = currentX + widthPx/2;
            const rotation = useBackView ? 180 : 0;
            
            const bike1Y = planY + planHeight * 0.25;
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/bike top.png',
                x: bikeX - bikeW/2,
                y: bike1Y - bikeH/2,
                width: bikeW,
                height: bikeH,
                preserveAspectRatio: 'xMidYMid meet',
                transform: rotation ? `rotate(${rotation} ${bikeX} ${bike1Y})` : ''
            }));            
            const bike2Y = planY + planHeight * 0.75;
            fgGroup.appendChild(createSvgElement('image', {
                href: 'assets/bike top.png',
                x: bikeX - bikeW/2,
                y: bike2Y - bikeH/2,
                width: bikeW,
                height: bikeH,
                preserveAspectRatio: 'xMidYMid meet',
                transform: rotation ? `rotate(${rotation} ${bikeX} ${bike2Y})` : ''
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
        } else if (comp.id.includes('sidewalk') || comp.id.includes('edge') || comp.id.includes('seafront')) {
            for (let ix = currentX + 10; ix < currentX + widthPx; ix += 20) {                bgGroup.appendChild(createSvgElement('line', {
                    x1: ix, y1: planY, x2: ix, y2: planY + planHeight, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }
            for (let iy = planY + 10; iy < planY + planHeight; iy += 20) {                bgGroup.appendChild(createSvgElement('line', {
                    x1: currentX, y1: iy, x2: currentX + widthPx, y2: iy, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
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
    
    if (lastItem.id === 'median_island') {
        itemsToMirror = sequence.slice(0, -1);
    } else {
        itemsToMirror = sequence.slice();
    }
    
    const mirrored = itemsToMirror
        .slice()
        .reverse()
        .map(comp => {
            return {
                ...comp,
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
    let totalWidth = 0;
    sequence.forEach(comp => {
        totalWidth += comp.default_width_m;
    });
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
    
    let totalWidth = 0;
    sequence.forEach(c => totalWidth += c.default_width_m);
    
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
            let totalWidth = 0;
            sequence.forEach(c => totalWidth += c.default_width_m);
            updateStreetHeader(totalWidth);
        });
    }

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

        const lanes = (record.data && Array.isArray(record.data.lanes)) ? record.data.lanes : [];
        sequence = lanes.map(item => {
            const comp = getComponentById(item.id);
            if (!comp) return null;
            return {
                ...comp,
                default_width_m: typeof item.width === 'number' ? item.width : comp.default_width_m,
                showPalm: !!item.showPalm,
                showLight: item.showLight !== undefined ? !!item.showLight : ((comp.id === 'urban_furniture_buffer' || comp.id === 'median_island') ? true : false),
                instanceId: Date.now() + Math.random()
            };
        }).filter(Boolean);

        renderSequence();
        
        let totalWidth = 0;
        sequence.forEach(c => totalWidth += c.default_width_m);
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
        showLight: !!c.showLight
    }));
    const totalWidth = Number(lanes.reduce((s, l) => s + Number(l.width), 0).toFixed(1));

    const payload = {
        name,
        description: `مقطع طريق مصمم تفاعلياً بعرض ${totalWidth} م`,
        data: { lanes, totalWidth }
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

    if (sequence.length === 0 || totalWidth <= 0) {
        // Reset everything to zero
        document.getElementById('isb-car-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-bus-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-bike-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-pedestrian-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-total-person-capacity').textContent = `0 شخص/ساعة`;
        document.getElementById('isb-humanization-score').textContent = `0%`;
        document.getElementById('isb-humanization-bar').style.width = `0%`;
        document.getElementById('isb-humanization-rating').textContent = `تحليل المقطع...`;
        document.getElementById('isb-humanization-rating').style.color = '';
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
    const busCapacity = busLanesCount * 1000; // 1000 people/hour per lane (NACTO Min for Mixed Traffic with Frequent Buses)

    const sidewalkWidth = sequence.filter(c => c.id === 'clear_sidewalk').reduce((sum, c) => sum + c.default_width_m, 0);
    const pedestrianCapacity = Math.round(sidewalkWidth * 2667); // 8000 per 3m lane (NACTO Min), which is ~2667 per meter

    const bikeLanesCount = sequence.filter(c => c.id === 'bike_lane').length;
    const bikeCapacity = bikeLanesCount * 3250; // 6500 per 2-way lane (NACTO Min), halved to 3250 for 1-way
    const totalPersonCapacity = Math.round(carCapacity + busCapacity + pedestrianCapacity + bikeCapacity);

    // Update Capacity UI
    document.getElementById('isb-car-capacity').textContent = `${carCapacity.toLocaleString('ar-SA')} شخص/ساعة`;
    document.getElementById('isb-bus-capacity').textContent = `${busCapacity.toLocaleString('ar-SA')} شخص/ساعة`;
    document.getElementById('isb-bike-capacity').textContent = `${bikeCapacity.toLocaleString('ar-SA')} شخص/ساعة`;
    document.getElementById('isb-pedestrian-capacity').textContent = `${pedestrianCapacity.toLocaleString('ar-SA')} شخص/ساعة`;
    document.getElementById('isb-total-person-capacity').textContent = `${totalPersonCapacity.toLocaleString('ar-SA')} شخص/ساعة`;

    // 2. Humanization Score
    const pedestrianWidth = sequence.filter(c => ['clear_sidewalk', 'commercial_edge', 'residential_edge', 'seafront'].includes(c.id)).reduce((sum, c) => sum + c.default_width_m, 0);
    const greenWidth = sequence.filter(c => ['urban_furniture_buffer', 'median_island'].includes(c.id)).reduce((sum, c) => sum + c.default_width_m, 0);
    const cyclingWidth = sequence.filter(c => c.id === 'bike_lane').reduce((sum, c) => sum + c.default_width_m, 0);
    const transitWidth = sequence.filter(c => ['hov_transit_lane', 'bus_station'].includes(c.id)).reduce((sum, c) => sum + c.default_width_m, 0);

    const pedestrianPct = totalWidth > 0 ? (pedestrianWidth / totalWidth) * 100 : 0;
    const greenPct = totalWidth > 0 ? (greenWidth / totalWidth) * 100 : 0;
    const cyclingPct = totalWidth > 0 ? (cyclingWidth / totalWidth) * 100 : 0;
    const transitPct = totalWidth > 0 ? (transitWidth / totalWidth) * 100 : 0;

    let baseScore = (pedestrianPct * 0.40) + (greenPct * 0.25) + (cyclingPct * 0.20) + (transitPct * 0.15);
    
    let bonus = 0;
    if (sequence.some(c => c.id === 'urban_furniture_buffer')) bonus += 5;
    if (sequence.some(c => c.id === 'median_island')) bonus += 3;
    if (sequence.some(c => c.id === 'seafront')) bonus += 3;

    let humanizationScore = Math.min(100, Math.round(baseScore + bonus));

    // Update Humanization UI
    document.getElementById('isb-humanization-score').textContent = `${humanizationScore}%`;
    document.getElementById('isb-humanization-bar').style.width = `${humanizationScore}%`;

    let ratingText = '';
    let ratingColor = '';
    if (humanizationScore >= 80) {
        ratingText = "ممتاز - بيئة مشاة وتنقّل مستدام نموذجية";
        ratingColor = '#27ae60';
    } else if (humanizationScore >= 60) {
        ratingText = "جيد جداً - متوازن ويدعم المشاة والتشجير بشكل جيد";
        ratingColor = '#2980b9';
    } else if (humanizationScore >= 40) {
        ratingText = "مقبول - بحاجة لزيادة مساحات الأرصفة والتشجير";
        ratingColor = '#f39c12';
    } else {
        ratingText = "ضعيف - يهيمن عليه مسارات السيارات ويفتقر لعناصر الأنسنة";
        ratingColor = '#d9534f';
    }
    const ratingEl = document.getElementById('isb-humanization-rating');
    ratingEl.textContent = ratingText;
    ratingEl.style.color = ratingColor;

    // 3. Sub-Indicators
    let shadingScore = Math.min(100, Math.round(greenPct * 2.5));
    let hasTrees = sequence.some(c => ['urban_furniture_buffer', 'median_island'].includes(c.id) && !c.showPalm);
    let hasPalms = sequence.some(c => ['urban_furniture_buffer', 'median_island'].includes(c.id) && c.showPalm);
    if (hasTrees) shadingScore = Math.min(100, shadingScore + 20);
    if (hasPalms) shadingScore = Math.min(100, shadingScore + 10);
    document.getElementById('isb-shading-score').textContent = `${shadingScore}%`;

    let safetyScore = 30;
    if (sequence.some(c => c.id === 'bike_lane')) safetyScore += 30;
    if (sequence.some(c => c.id === 'urban_furniture_buffer')) safetyScore += 20;
    if (sequence.some(c => c.id === 'median_island')) safetyScore += 10;
    if (sequence.some(c => c.id === 'seafront')) safetyScore += 10;
    safetyScore = Math.min(100, safetyScore);
    document.getElementById('isb-safety-score').textContent = `${safetyScore}%`;

    let qualityScore = Math.min(70, Math.round(pedestrianPct * 1.5));
    if (sequence.some(c => c.id === 'bus_station')) qualityScore += 15;
    if (sequence.some(c => c.id === 'urban_furniture_buffer')) qualityScore += 15;
    qualityScore = Math.min(100, qualityScore);
    document.getElementById('isb-quality-score').textContent = `${qualityScore}%`;
}



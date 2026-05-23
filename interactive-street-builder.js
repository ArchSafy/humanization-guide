const componentData = [
  {
    "category": "Pedestrian Zones",
    "components": [
      {
        "id": "commercial_edge",
        "name": "Commercial Edge Zone",
        "default_width_m": 3.0,
        "description": "Sidewalk space for cafe seating, shop displays, and pedestrian interaction.",
        "color": "#e0cba8"
      },
      {
        "id": "clear_sidewalk",
        "name": "Clear Walkway",
        "default_width_m": 3.0,
        "description": "Obstacle-free path dedicated purely to pedestrian movement.",
        "color": "#dcdedd"
      },
      {
        "id": "residential_edge",
        "name": "Residential Edge Zone",
        "default_width_m": 2.0,
        "description": "Buffer zone between residential plots and public walkways.",
        "color": "#c4d1c4"
      }
    ]
  },
  {
    "category": "Mobility & Infrastructure",
    "components": [
      {
        "id": "bike_lane",
        "name": "Protected Bike Lane",
        "default_width_m": 1.5,
        "description": "Unidirectional cycle track segregated from vehicle traffic.",
        "color": "#6ebecf"
      },
      {
        "id": "urban_furniture_buffer",
        "name": "Urban Furniture Zone",
        "default_width_m": 1.0,
        "description": "Hosts lighting, trash bins, signage, and low-scale greenery. Placed 40cm away from bike lanes.",
        "color": "#b8a392"
      },
      {
        "id": "flex_zone",
        "name": "Flex Zone",
        "default_width_m": 3.0,
        "description": "Multifunctional curb space dynamically adapted for parking, transit stops, or parklets.",
        "color": "#d2a747"
      },
      {
        "id": "median_island",
        "name": "Central Median",
        "default_width_m": 2.0,
        "description": "Center divider with street lighting, landscaping, or pedestrian refuge space.",
        "color": "#9bb39b"
      }
    ]
  },
  {
    "category": "Car Lanes",
    "components": [
      {
        "id": "standard_car_lane",
        "name": "Standard Car Lanes",
        "default_width_m": 6.5,
        "description": "Two-lane roadway accommodating mixed traffic flow.",
        "color": "#7b8190"
      },
      {
        "id": "hov_transit_lane",
        "name": "Transit / HOV Lane",
        "default_width_m": 3.5,
        "description": "Dedicated spatial lane for buses or high-occupancy vehicles to optimize flow.",
        "color": "#d66c5c"
      }
    ]
  }
];

let sequence = [];

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initDropzone();
    renderSequence();
});

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
                    <span class="isb-component-width">${comp.default_width_m}m</span>
                </div>
                <div class="isb-component-desc">${comp.description}</div>
            `;
            
            compDiv.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', comp.id);
                e.dataTransfer.effectAllowed = 'copy';
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

function initDropzone() {
    const sequenceContainer = document.getElementById('isb-sequence-container');
    
    sequenceContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        sequenceContainer.classList.add('drag-over');
    });
    
    sequenceContainer.addEventListener('dragleave', () => {
        sequenceContainer.classList.remove('drag-over');
    });
    
    sequenceContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        sequenceContainer.classList.remove('drag-over');
        const id = e.dataTransfer.getData('text/plain');
        const comp = getComponentById(id);
        
        if (comp) {
            // Add a unique instance ID to allow multiple of same component
            const instance = { ...comp, instanceId: Date.now() + Math.random() };
            sequence.push(instance);
            renderSequence();
        }
    });
}

function removeComponent(instanceId) {
    sequence = sequence.filter(c => c.instanceId !== instanceId);
    renderSequence();
}

function renderSequence() {
    const sequenceContainer = document.getElementById('isb-sequence-container');
    const emptyState = document.getElementById('isb-empty-state');
    const renderArea = document.getElementById('isb-render-area');
    const totalWidthEl = document.getElementById('isb-total-width');
    
    // Clear current sequence (except empty state)
    const items = sequenceContainer.querySelectorAll('.isb-sequence-item');
    items.forEach(i => i.remove());
    
    if (sequence.length === 0) {
        emptyState.style.display = 'flex';
        renderArea.style.display = 'none';
        totalWidthEl.textContent = 'Total Street Width: 0.0m';
        return;
    }
    
    emptyState.style.display = 'none';
    renderArea.style.display = 'flex';
    
    let totalWidth = 0;
    
    sequence.forEach(comp => {
        totalWidth += comp.default_width_m;
        
        const item = document.createElement('div');
        item.className = 'isb-sequence-item';
        item.style.width = Math.max(80, comp.default_width_m * 30) + 'px';
        item.style.backgroundColor = comp.color;
        item.innerHTML = `
            <button class="remove-btn" onclick="removeComponent(${comp.instanceId})"><i class="fas fa-times"></i></button>
            <span style="font-size:12px; margin-bottom:5px;">${comp.name}</span>
            <span style="font-size:11px; opacity:0.8;">${comp.default_width_m}m</span>
        `;
        
        sequenceContainer.appendChild(item);
    });
    
    totalWidthEl.textContent = `Total Street Width: ${totalWidth.toFixed(1)}m`;
    
    renderDualView(totalWidth);
}

function createSvgElement(tag, attrs) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (let k in attrs) el.setAttribute(k, attrs[k]);
    return el;
}

function renderDualView(totalWidth) {
    const svg = document.getElementById('isb-svg-canvas');
    svg.innerHTML = '';
    
    const scale = 40; // 40px = 1 meter
    const svgWidth = Math.max(800, totalWidth * scale + 100);
    const svgHeight = 400;
    
    svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
    svg.style.width = svgWidth + 'px';
    
    const startX = 50;
    const elevationY = 160;
    const planY = 280;
    const layerThickness = 30;
    const planHeight = 100;
    
    // Draw labels
    svg.appendChild(createSvgElement('text', { x: 10, y: elevationY - 80, fill: '#555', 'font-weight': 'bold' })).textContent = 'ELEVATION';
    svg.appendChild(createSvgElement('text', { x: 10, y: planY + planHeight/2 + 5, fill: '#555', 'font-weight': 'bold' })).textContent = 'PLAN';
    
    let currentX = startX;
    
    // Base lines
    svg.appendChild(createSvgElement('line', { x1: startX, y1: elevationY, x2: startX + (totalWidth * scale), y2: elevationY, stroke: '#333', 'stroke-width': '2' }));
    
    sequence.forEach(comp => {
        const widthPx = comp.default_width_m * scale;
        
        // --- ELEVATION VIEW ---
        // Base ground block
        const ground = createSvgElement('rect', {
            x: currentX, y: elevationY, width: widthPx, height: layerThickness, fill: comp.color, stroke: '#fff', 'stroke-width': '1'
        });
        svg.appendChild(ground);
        
        // Draw real images/elements above ground
        if (comp.id === 'median_island' || comp.id === 'urban_furniture_buffer') {
            // Draw a Tree in Elevation
            const treeW = 70;
            const treeH = 90;
            svg.appendChild(createSvgElement('image', {
                href: 'assets/tree2.png',
                x: currentX + widthPx/2 - treeW/2,
                y: elevationY - treeH,
                width: treeW,
                height: treeH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'standard_car_lane') {
            // Two-lane roadway: draw front and rear cars if wide enough
            const carW = 55;
            const carH = 40;
            if (widthPx >= 160) {
                // Two cars
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/car front.png',
                    x: currentX + widthPx/4 - carW/2,
                    y: elevationY - carH,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/car back.png',
                    x: currentX + 3*widthPx/4 - carW/2,
                    y: elevationY - carH,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
            } else {
                // One car in center
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/car front.png',
                    x: currentX + widthPx/2 - carW/2,
                    y: elevationY - carH,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
            }
        } else if (comp.id === 'hov_transit_lane') {
            // Bus transit lane: draw front view bus
            const busW = 65;
            const busH = 55;
            svg.appendChild(createSvgElement('image', {
                href: 'assets/street-builder/bus-front-real.png',
                x: currentX + widthPx/2 - busW/2,
                y: elevationY - busH,
                width: busW,
                height: busH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'flex_zone') {
            // Draw a parked car in elevation (front view)
            const carW = 55;
            const carH = 40;
            svg.appendChild(createSvgElement('image', {
                href: 'assets/car front.png',
                x: currentX + widthPx/2 - carW/2,
                y: elevationY - carH,
                width: carW,
                height: carH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id === 'bike_lane') {
            // Bike lane: draw a cyclist/pedestrian placeholder
            const personW = 22;
            const personH = 40;
            svg.appendChild(createSvgElement('image', {
                href: 'assets/street-builder/person-front-real.png',
                x: currentX + widthPx/2 - personW/2,
                y: elevationY - personH,
                width: personW,
                height: personH,
                preserveAspectRatio: 'xMidYMax meet'
            }));
        } else if (comp.id.includes('sidewalk') || comp.id.includes('edge')) {
            // Pedestrian zone: draw people
            const personW = 22;
            const personH = 40;
            if (widthPx >= 100) {
                // Two people
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/street-builder/person-front-real.png',
                    x: currentX + widthPx/3 - personW/2,
                    y: elevationY - personH,
                    width: personW,
                    height: personH,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/street-builder/person-rear-real.png',
                    x: currentX + 2*widthPx/3 - personW/2,
                    y: elevationY - personH,
                    width: personW,
                    height: personH,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
            } else {
                // One person
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/street-builder/person-front-real.png',
                    x: currentX + widthPx/2 - personW/2,
                    y: elevationY - personH,
                    width: personW,
                    height: personH,
                    preserveAspectRatio: 'xMidYMax meet'
                }));
            }
        }
        
        // Label on top
        const label = createSvgElement('text', {
            x: currentX + widthPx/2, y: elevationY + layerThickness + 20, fill: '#666', 'font-size': '12px', 'text-anchor': 'middle'
        });
        // truncate label if too long
        let shortName = comp.name;
        if (widthPx < 80 && shortName.length > 10) shortName = shortName.substring(0, 8) + '...';
        label.textContent = shortName;
        svg.appendChild(label);
        
        // --- PLAN VIEW ---
        const plan = createSvgElement('rect', {
            x: currentX, y: planY, width: widthPx, height: planHeight, fill: comp.color, stroke: '#fff', 'stroke-width': '1'
        });
        svg.appendChild(plan);
        
        // Plan placeholders replaced with real images
        if (comp.id === 'median_island' || comp.id === 'urban_furniture_buffer') {
            // Draw top view of trees
            const treeSize = 40;
            svg.appendChild(createSvgElement('image', {
                href: 'assets/tree plan3.png',
                x: currentX + widthPx/2 - treeSize/2,
                y: planY + planHeight/2 - treeSize/2,
                width: treeSize,
                height: treeSize,
                preserveAspectRatio: 'xMidYMid slice'
            }));
        } else if (comp.id === 'standard_car_lane') {
            // Top view of cars in two lanes
            const carW = 32;
            const carH = 65;
            if (widthPx >= 160) {
                // Two cars (one going up, one going down)
                const car1X = currentX + widthPx/4;
                const car1Y = planY + planHeight/4;
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/car top.png',
                    x: car1X - carW/2,
                    y: car1Y - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet'
                }));
                
                const car2X = currentX + 3*widthPx/4;
                const car2Y = planY + 3*planHeight/4;
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/car top.png',
                    x: car2X - carW/2,
                    y: car2Y - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: `rotate(180 ${car2X} ${car2Y})`
                }));
            } else {
                // One car
                const carX = currentX + widthPx/2;
                const carY = planY + planHeight/2;
                svg.appendChild(createSvgElement('image', {
                    href: 'assets/car top.png',
                    x: carX - carW/2,
                    y: carY - carH/2,
                    width: carW,
                    height: carH,
                    preserveAspectRatio: 'xMidYMid meet'
                }));
            }
        } else if (comp.id === 'hov_transit_lane') {
            // Top view of bus
            const busW = 38;
            const busH = 90;
            const busX = currentX + widthPx/2;
            const busY = planY + planHeight/2;
            svg.appendChild(createSvgElement('image', {
                href: 'assets/street-builder/bus-top-real.png',
                x: busX - busW/2,
                y: busY - busH/2,
                width: busW,
                height: busH,
                preserveAspectRatio: 'xMidYMid meet'
            }));
        } else if (comp.id === 'flex_zone') {
            // Top view of parked car
            const carW = 32;
            const carH = 65;
            const carX = currentX + widthPx/2;
            const carY = planY + planHeight/2;
            svg.appendChild(createSvgElement('image', {
                href: 'assets/street-builder/car-top-real.png',
                x: carX - carW/2,
                y: carY - carH/2,
                width: carW,
                height: carH,
                preserveAspectRatio: 'xMidYMid meet'
            }));
        } else if (comp.id.includes('sidewalk') || comp.id.includes('edge')) {
            // Draw paving grid pattern for sidewalk to look premium
            for (let ix = currentX + 10; ix < currentX + widthPx; ix += 20) {
                svg.appendChild(createSvgElement('line', {
                    x1: ix, y1: planY, x2: ix, y2: planY + planHeight, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }
            for (let iy = planY + 10; iy < planY + planHeight; iy += 20) {
                svg.appendChild(createSvgElement('line', {
                    x1: currentX, y1: iy, x2: currentX + widthPx, y2: iy, stroke: '#e1dcd6', 'stroke-width': '0.8', opacity: '0.6'
                }));
            }
        }
        
        // Separator line
        svg.appendChild(createSvgElement('line', {
            x1: currentX + widthPx, y1: elevationY - 80, x2: currentX + widthPx, y2: planY + planHeight + 20, stroke: '#ddd', 'stroke-dasharray': '5,5'
        }));
        
        currentX += widthPx;
    });
}

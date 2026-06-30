document.addEventListener('DOMContentLoaded', () => {
    const moduleList = document.getElementById('module-list');
    const dropzone = document.getElementById('section-dropzone');
    const streetSvg = document.getElementById('street-svg');
    const engineeringSvg = document.getElementById('engineering-svg');
    const laneStrip = document.getElementById('lane-strip');
    const trashZone = document.getElementById('trash-zone');
    const emptyState = document.getElementById('empty-state');
    const totalWidthEl = document.getElementById('total-width');
    const laneCountEl = document.getElementById('lane-count');
    const jsonOutput = document.getElementById('json-output');
    const propertiesForm = document.getElementById('properties-form');
    const propertiesEmpty = document.getElementById('properties-empty');
    const selectedHint = document.getElementById('selected-hint');
    const roadNameInput = document.getElementById('road-name');
    const roadDescriptionInput = document.getElementById('road-description');
    const saveRoadButton = document.getElementById('save-road');
    const saveStatusEl = document.getElementById('save-status');

    const propLabel = document.getElementById('prop-label');
    const propWidth = document.getElementById('prop-width');
    const propDirection = document.getElementById('prop-direction');
    const propColor = document.getElementById('prop-color');
    const urlParams = new URLSearchParams(window.location.search);

    const moduleTypes = [
        { type: 'sidewalk', label: 'رصيف مشاة', width: 3.0, color: '#E9E7E2', icon: 'fa-person-walking', direction: 'none', variant: 'sidewalk' },
        { type: 'frontage', label: 'واجهة مقاهي', width: 3.5, color: '#E4DED3', icon: 'fa-mug-saucer', direction: 'none', variant: 'frontage' },
        { type: 'planting', label: 'شريط تشجير', width: 1.5, color: '#7B967E', icon: 'fa-tree', direction: 'none', variant: 'planting' },
        { type: 'bike', label: 'مسار دراجات', width: 2.0, color: '#8AC645', icon: 'fa-bicycle', direction: 'right', variant: 'bike' },
        { type: 'parking', label: 'مواقف طولية', width: 2.5, color: '#C8AB99', icon: 'fa-square-parking', direction: 'none', variant: 'parallel' },
        { type: 'parking45', label: 'مواقف 45°', width: 5.0, color: '#BDB4AC', icon: 'fa-square-parking', direction: 'none', variant: 'angle45' },
        { type: 'parking90', label: 'مواقف 90°', width: 5.5, color: '#9A806E', icon: 'fa-square-parking', direction: 'none', variant: 'angle90' },
        { type: 'driving', label: 'حارة مركبات', width: 3.3, color: '#555D71', icon: 'fa-car-side', direction: 'right', variant: 'driving' },
        { type: 'bus', label: 'حارة حافلات', width: 3.5, color: '#F7C86B', icon: 'fa-bus', direction: 'right', variant: 'bus' },
        { type: 'busstop', label: 'موقف حافلات', width: 3.0, color: '#D2A747', icon: 'fa-bus-simple', direction: 'none', variant: 'stop' },
        { type: 'median', label: 'جزيرة وسطية', width: 2.0, color: '#A57F61', icon: 'fa-grip-lines-vertical', direction: 'none', variant: 'median' },
        { type: 'service', label: 'حارة خدمة', width: 3.0, color: '#9A806E', icon: 'fa-truck', direction: 'right', variant: 'service' }
    ];

    const presets = {
        avenue: ['sidewalk', 'planting', 'parking', 'driving', 'driving', 'driving', 'median', 'driving', 'driving', 'driving', 'parking', 'planting', 'sidewalk'],
        brt: ['sidewalk', 'bike', 'planting', 'driving', 'driving', 'bus', 'bus', 'median', 'driving', 'driving', 'planting', 'sidewalk'],
        calm: ['frontage', 'sidewalk', 'planting', 'bike', 'parking', 'driving', 'median', 'driving', 'parking', 'bike', 'planting', 'sidewalk']
    };

    let lanes = [];
    let selectedId = null;
    let draggedLaneId = null;
    let dragOverIndex = null;
    let currentRoadId = urlParams.get('id');

    const getTemplate = (type) => moduleTypes.find(item => item.type === type);
    const createId = () => `lane-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const createLane = (type) => {
        const template = getTemplate(type);
        return {
            id: createId(),
            type: template.type,
            label: template.label,
            width: template.width,
            color: template.color,
            direction: template.direction,
            variant: template.variant
        };
    };

    const getSelectedLane = () => lanes.find(lane => lane.id === selectedId);
    const setSaveStatus = (message, tone = 'idle') => {
        if (!saveStatusEl) return;
        saveStatusEl.textContent = message;
        saveStatusEl.dataset.tone = tone;
    };

    const formatWidth = (value) => `${Number(value).toFixed(1)} م`;
    const directionalTypes = new Set(['driving', 'bus', 'bike', 'service']);

    const getContrastColor = (hex) => {
        const normalized = hex.replace('#', '');
        const r = parseInt(normalized.substring(0, 2), 16);
        const g = parseInt(normalized.substring(2, 4), 16);
        const b = parseInt(normalized.substring(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.58 ? '#3A3839' : '#F7F4EF';
    };

    const flipDirection = (direction) => {
        if (direction === 'right') return 'left';
        if (direction === 'left') return 'right';
        return direction;
    };

    const getDirectionArrow = (direction) => {
        if (direction === 'left') return '↓';
        if (direction === 'both') return '↕';
        if (direction === 'right') return '↑';
        return '';
    };

    const getDirectionLabel = (direction) => {
        if (direction === 'left') return 'جاي عليك';
        if (direction === 'right') return 'رايح لقدام';
        if (direction === 'both') return 'رايح/جاي';
        return '';
    };

    const getMedianIndex = (items = lanes) => items.findIndex(lane => lane.type === 'median');

    const directionForIndex = (index, items = lanes) => {
        const medianIndex = getMedianIndex(items);
        if (medianIndex === -1) return index < Math.ceil(items.length / 2) ? 'left' : 'right';
        return index < medianIndex ? 'left' : 'right';
    };

    const applyDirectionalFlow = () => {
        lanes = lanes.map((lane, index) => {
            if (!directionalTypes.has(lane.type)) return lane;
            return { ...lane, direction: directionForIndex(index, lanes) };
        });
    };

    const addLane = (type, index = lanes.length) => {
        const lane = createLane(type);
        const safeIndex = Math.max(0, Math.min(index, lanes.length));
        if (directionalTypes.has(lane.type)) {
            lane.direction = directionForIndex(safeIndex, lanes);
        }
        lanes.splice(safeIndex, 0, lane);
        applyDirectionalFlow();
        selectedId = lane.id;
        render();
    };

    const moveLaneToIndex = (laneId, targetIndex) => {
        const fromIndex = lanes.findIndex(lane => lane.id === laneId);
        if (fromIndex < 0) return;
        const [moved] = lanes.splice(fromIndex, 1);
        const adjustedIndex = fromIndex < targetIndex ? targetIndex - 1 : targetIndex;
        const safeIndex = Math.max(0, Math.min(adjustedIndex, lanes.length));
        lanes.splice(safeIndex, 0, moved);
        applyDirectionalFlow();
        selectedId = moved.id;
        render();
    };

    const getDropIndexFromPointer = (clientX) => {
        const cards = [...laneStrip.querySelectorAll('.lane-card')];
        if (!cards.length) return 0;

        const index = cards.findIndex(card => {
            const rect = card.getBoundingClientRect();
            return clientX < rect.left + rect.width / 2;
        });

        return index === -1 ? cards.length : index;
    };

    const renderModules = () => {
        moduleList.innerHTML = '';

        moduleTypes.forEach(module => {
            const button = document.createElement('button');
            button.className = 'module-item';
            button.type = 'button';
            button.draggable = true;
            button.dataset.type = module.type;
            button.innerHTML = `
                <span class="module-icon" style="background:${module.color}; color:${getContrastColor(module.color)}">
                    <i class="fas ${module.icon}"></i>
                </span>
                <span>
                    <strong>${module.label}</strong>
                    <small>${formatWidth(module.width)}</small>
                </span>
            `;

            button.addEventListener('click', () => addLane(module.type));
            button.addEventListener('dragstart', (event) => {
                event.dataTransfer.effectAllowed = 'copy';
                event.dataTransfer.setData('module/type', module.type);
            });

            moduleList.appendChild(button);
        });
    };

    const renderLaneStrip = () => {
        laneStrip.innerHTML = '';

        lanes.forEach((lane, index) => {
            if (dragOverIndex === index) {
                laneStrip.appendChild(createDropMarker());
            }

            const card = document.createElement('button');
            card.type = 'button';
            card.draggable = true;
            card.className = `lane-card${lane.id === selectedId ? ' selected' : ''}`;
            card.dataset.id = lane.id;
            card.style.width = `${Math.max(72, lane.width * 34)}px`;
            card.style.background = lane.color;
            card.style.color = getContrastColor(lane.color);
            const directionBadge = lane.direction !== 'none'
                ? `<b class="direction-badge">${getDirectionArrow(lane.direction)} ${getDirectionLabel(lane.direction)}</b>`
                : '';
            card.innerHTML = `
                <i class="fas ${getTemplate(lane.type).icon}"></i>
                ${directionBadge}
                <span>${lane.label}</span>
                <small>${formatWidth(lane.width)}</small>
            `;

            card.addEventListener('click', () => {
                selectedId = lane.id;
                render();
            });

            card.addEventListener('dragstart', (event) => {
                draggedLaneId = lane.id;
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('lane/id', lane.id);
            });

            card.addEventListener('dragend', () => {
                draggedLaneId = null;
                dragOverIndex = null;
                render();
            });

            card.addEventListener('dragover', (event) => {
                event.preventDefault();
                dragOverIndex = getDropIndexFromPointer(event.clientX);
                renderLaneStrip();
            });

            laneStrip.appendChild(card);
        });

        if (dragOverIndex === lanes.length) {
            laneStrip.appendChild(createDropMarker());
        }
    };

    const createDropMarker = () => {
        const marker = document.createElement('span');
        marker.className = 'drop-marker';
        return marker;
    };

    const getRoadPayload = () => ({
        name: roadNameInput?.value.trim() || 'طريق بدون اسم',
        description: roadDescriptionInput?.value.trim() || '',
        interactionModel: 'dnd-first snapped lane sequence',
        unit: 'm',
        totalWidth: Number(lanes.reduce((sum, lane) => sum + Number(lane.width), 0).toFixed(1)),
        lanes
    });

    const hydrateLane = (lane) => {
        const template = getTemplate(lane.type) || {};
        return {
            id: lane.id || createId(),
            type: lane.type,
            label: lane.label || template.label || 'عنصر',
            width: Number(lane.width || template.width || 1),
            color: lane.color || template.color || '#E9E7E2',
            direction: lane.direction || template.direction || 'none',
            variant: lane.variant || template.variant || 'custom'
        };
    };

    const applyRoadRecord = (record) => {
        currentRoadId = record.id;
        if (roadNameInput) roadNameInput.value = record.name || '';
        if (roadDescriptionInput) roadDescriptionInput.value = record.description || '';

        const payload = record.data || {};
        lanes = Array.isArray(payload.lanes) ? payload.lanes.map(hydrateLane) : [];
        applyDirectionalFlow();
        selectedId = lanes[0]?.id || null;
        render();
        setSaveStatus('تم تحميل الطريق', 'success');
        history.replaceState({}, '', `street-builder.html?id=${record.id}`);
    };

    const renderSvg = () => {
        const total = lanes.reduce((sum, lane) => sum + Number(lane.width), 0);
        const minX = 70;
        const maxWidth = 1060;
        const baseY = 160;
        const laneHeight = 90;
        const scale = total > 0 ? maxWidth / total : 1;
        let cursor = minX;

        streetSvg.innerHTML = '';

        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <pattern id="plantPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="2" fill="#E9E7E2" opacity="0.45"/>
                <circle cx="12" cy="12" r="2" fill="#E9E7E2" opacity="0.35"/>
            </pattern>
            <pattern id="parkingPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 20 L 20 0" stroke="#F7F4EF" stroke-width="2" opacity="0.25"/>
            </pattern>
            <marker id="flowArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#F7F4EF"/>
            </marker>
        `;
        streetSvg.appendChild(defs);

        lanes.forEach((lane, index) => {
            const widthPx = Math.max(lane.width * scale, 16);
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('svg-lane');
            if (lane.id === selectedId) group.classList.add('selected');

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', cursor);
            rect.setAttribute('y', baseY);
            rect.setAttribute('width', widthPx);
            rect.setAttribute('height', laneHeight);
            rect.setAttribute('rx', lane.type === 'median' || lane.type === 'planting' ? '10' : '2');
            rect.setAttribute('fill', lane.color);
            group.appendChild(rect);

            if (lane.type === 'planting' || lane.type.startsWith('parking')) {
                const overlay = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                overlay.setAttribute('x', cursor);
                overlay.setAttribute('y', baseY);
                overlay.setAttribute('width', widthPx);
                overlay.setAttribute('height', laneHeight);
                overlay.setAttribute('rx', lane.type === 'planting' ? '10' : '2');
                overlay.setAttribute('fill', lane.type === 'planting' ? 'url(#plantPattern)' : 'url(#parkingPattern)');
                group.appendChild(overlay);
            }

            if (lane.type === 'parking45' || lane.type === 'parking90') {
                const count = Math.max(2, Math.floor(widthPx / 30));
                for (let i = 1; i < count; i++) {
                    const mark = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    const x = cursor + (widthPx / count) * i;
                    mark.setAttribute('x1', lane.type === 'parking45' ? x - 18 : x);
                    mark.setAttribute('y1', baseY + 12);
                    mark.setAttribute('x2', lane.type === 'parking45' ? x + 18 : x);
                    mark.setAttribute('y2', baseY + laneHeight - 12);
                    mark.setAttribute('stroke', '#F7F4EF');
                    mark.setAttribute('stroke-width', '2');
                    mark.setAttribute('opacity', '0.48');
                    group.appendChild(mark);
                }
            }

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', cursor + widthPx / 2);
            label.setAttribute('y', baseY + 44);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('fill', getContrastColor(lane.color));
            label.setAttribute('font-size', widthPx < 58 ? '10' : '14');
            label.setAttribute('font-weight', '800');
            label.textContent = lane.label;
            group.appendChild(label);

            const widthLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            widthLabel.setAttribute('x', cursor + widthPx / 2);
            widthLabel.setAttribute('y', baseY + 68);
            widthLabel.setAttribute('text-anchor', 'middle');
            widthLabel.setAttribute('fill', getContrastColor(lane.color));
            widthLabel.setAttribute('font-size', '12');
            widthLabel.setAttribute('opacity', '0.82');
            widthLabel.textContent = `${lane.width}m`;
            group.appendChild(widthLabel);

            if (lane.direction !== 'none') {
                const arrowLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                const startY = lane.direction === 'left' ? baseY + 12 : baseY + 36;
                const endY = lane.direction === 'left' ? baseY + 36 : baseY + 12;
                const arrowX = cursor + widthPx / 2;
                arrowLine.setAttribute('x1', arrowX);
                arrowLine.setAttribute('y1', startY);
                arrowLine.setAttribute('x2', arrowX);
                arrowLine.setAttribute('y2', endY);
                arrowLine.setAttribute('stroke', getContrastColor(lane.color));
                arrowLine.setAttribute('stroke-width', '3');
                arrowLine.setAttribute('stroke-linecap', 'round');
                arrowLine.setAttribute('marker-end', 'url(#flowArrow)');
                arrowLine.setAttribute('opacity', '0.9');
                group.appendChild(arrowLine);

                const directionLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                directionLabel.setAttribute('x', cursor + widthPx / 2);
                directionLabel.setAttribute('y', baseY - 15);
                directionLabel.setAttribute('text-anchor', 'middle');
                directionLabel.setAttribute('fill', '#555D71');
                directionLabel.setAttribute('font-size', '13');
                directionLabel.setAttribute('font-weight', '900');
                directionLabel.textContent = getDirectionLabel(lane.direction);
                group.appendChild(directionLabel);
            }

            group.addEventListener('click', () => {
                selectedId = lane.id;
                render();
            });

            streetSvg.appendChild(group);

            cursor += widthPx;
        });
    };

    const svgEl = (tag, attributes = {}, text = '') => {
        const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        if (text) element.textContent = text;
        return element;
    };

    const renderTree = (group, x, groundY, scale = 1) => {
        const h = 160 * scale;
        const w = 382 * scale;
        group.appendChild(svgEl('image', {
            href: 'assets/tree new2.png',
            x: x - w / 2 - 5,
            y: groundY - h,
            width: w,
            height: h,
            preserveAspectRatio: 'xMidYMax meet'
        }));
    };

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

    const renderPerson = (group, x, groundY, laneIndex = 0, personIdx = 0, laneId = '') => {
        let seed = 0;
        if (laneId) {
            for (let i = 0; i < laneId.length; i++) {
                seed = laneId.charCodeAt(i) + ((seed << 5) - seed);
            }
            seed = Math.abs(seed);
        } else {
            seed = laneIndex;
        }
        seed += personIdx * 13.7;

        const rand = seededRandom(seed);
        const personIndex = Math.floor(rand * peopleAssets.length);
        const person = peopleAssets[personIndex];
        const yOffset = 0;
        const offsetY = person.offsetY || 0;

        group.appendChild(svgEl('image', {
            href: person.path,
            x: x - person.w / 2,
            y: groundY + yOffset + offsetY - person.h,
            width: person.w,
            height: person.h,
            preserveAspectRatio: 'xMidYMax meet'
        }));
    };

    const renderVehicle = (group, x, groundY, width, type = 'car', direction = 'right') => {
        const isBus = type === 'bus';
        const w = isBus ? Math.min(Math.max(width * 1.92, 150), 220) : Math.min(Math.max(width * 0.96, 70), 105);
        const h = isBus ? 120 : 34;
        const src = isBus
            ? (direction === 'left' ? 'assets/bus front.png' : 'assets/bus back.png')
            : (direction === 'left' ? 'assets/car front.png' : 'assets/car back.png');
        const displayW = direction === 'none' ? Math.min(Math.max(width * 0.9, 70), 105) : w;
        const displayH = direction === 'none' ? Math.min(34, h) : h;
        group.appendChild(svgEl('image', {
            href: src,
            x: x - displayW / 2,
            y: groundY - displayH - 2,
            width: displayW,
            height: displayH,
            preserveAspectRatio: 'xMidYMax meet'
        }));
    };

    const renderSectionParkingVehicle = (group, x, groundY, width, variant = 'parallel', flowDirection = 'right') => {
        if (variant === 'angle90') {
            renderVehicle(group, x, groundY, width, 'car', 'none');
            return;
        }

        if (variant === 'angle45') {
            const w = Math.min(Math.max(width * 0.72, 70), 104);
            const h = 42;
            group.appendChild(svgEl('image', {
                href: 'assets/street-builder/car-side-real.png',
                x: x - w / 2,
                y: groundY - h - 2,
                width: w,
                height: h,
                preserveAspectRatio: 'xMidYMax meet',
                transform: `skewX(-16) rotate(-3 ${x} ${groundY - h / 2})`
            }));
            return;
        }

        renderVehicle(group, x, groundY, width, 'car', flowDirection);
    };

    const renderLamp = (group, x, groundY) => {
        group.appendChild(svgEl('line', { x1: x, y1: groundY, x2: x, y2: groundY - 132, stroke: '#7F8B91', 'stroke-width': 4 }));
        group.appendChild(svgEl('path', { d: `M ${x} ${groundY - 126} C ${x - 22} ${groundY - 142}, ${x - 42} ${groundY - 142}, ${x - 54} ${groundY - 130}`, fill: 'none', stroke: '#7F8B91', 'stroke-width': 3 }));
        group.appendChild(svgEl('path', { d: `M ${x} ${groundY - 126} C ${x + 22} ${groundY - 142}, ${x + 42} ${groundY - 142}, ${x + 54} ${groundY - 130}`, fill: 'none', stroke: '#7F8B91', 'stroke-width': 3 }));
        group.appendChild(svgEl('circle', { cx: x - 58, cy: groundY - 128, r: 5, fill: '#F7C86B' }));
        group.appendChild(svgEl('circle', { cx: x + 58, cy: groundY - 128, r: 5, fill: '#F7C86B' }));
    };

    const renderEngineeringSvg = () => {
        if (!engineeringSvg) return;
        const total = lanes.reduce((sum, lane) => sum + Number(lane.width), 0);
        const minX = 64;
        const maxWidth = 1072;
        const sectionGroundY = 240;
        const sectionDeckHeight = 38;
        const planY = 350;
        const planHeight = 520;
        const scale = total > 0 ? maxWidth / total : 1;
        let cursor = minX;

        const getLaneSurface = (lane) => {
            if (lane.type === 'driving' || lane.type === 'service') return '#7B8190';
            if (lane.type === 'bus') return '#6D7484';
            if (lane.type === 'bike') return '#83C8D5';
            if (lane.type === 'planting') return '#9BB39B';
            if (lane.type === 'median') return '#B99678';
            if (lane.type.startsWith('parking')) return '#CDB5A6';
            if (lane.type === 'frontage') return '#D7B4A3';
            return '#E9E7E2';
        };

        const renderPlanCar = (group, x, y, w, h, fill = '#DDE3E3', direction = 'right', angle = 0) => {
            const isBus = fill === '#2F6671';
            const scaledW = isBus ? w * 2.8 : w * 1.4;
            const scaledH = isBus ? h * 2.8 : h * 1.4;
            const safeW = isBus ? Math.max(scaledW, 117.6) : Math.max(scaledW, 50.4);
            const safeH = isBus ? Math.max(scaledH, 257.6) : Math.max(scaledH, 95.2);
            const busDirectionRotation = direction === 'left' ? 0 : 180;
            const carDirectionRotation = direction === 'left' ? 180 : 0;
            const rotation = angle + (isBus ? busDirectionRotation : carDirectionRotation);
            group.appendChild(svgEl('image', {
                href: isBus ? 'assets/bus top.png' : 'assets/car top.png',
                x: x - safeW / 2,
                y: y - safeH / 2,
                width: safeW,
                height: safeH,
                preserveAspectRatio: 'xMidYMid meet',
                transform: `rotate(${rotation} ${x} ${y})`
            }));
        };

        const renderPlanTree = (group, x, y, r = 22) => {
            const size = Math.max(r * 4.4, 84);
            group.appendChild(svgEl('image', {
                href: 'assets/tree plan3.png',
                x: x - size / 2,
                y: y - size / 2,
                width: size,
                height: size,
                preserveAspectRatio: 'xMidYMid slice',
                opacity: '0.92'
            }));
        };

        const renderPaving = (group, x, y, width, height, opacity = 0.42) => {
            for (let ix = x + 10; ix < x + width; ix += 22) {
                group.appendChild(svgEl('line', { x1: ix, y1: y, x2: ix, y2: y + height, stroke: '#BDB4AC', 'stroke-width': 0.8, opacity }));
            }
            for (let iy = y + 12; iy < y + height; iy += 22) {
                group.appendChild(svgEl('line', { x1: x, y1: iy, x2: x + width, y2: iy, stroke: '#BDB4AC', 'stroke-width': 0.8, opacity }));
            }
        };

        engineeringSvg.innerHTML = '';
        engineeringSvg.appendChild(svgEl('rect', { x: 0, y: 0, width: 1200, height: 950, fill: '#FAFAF8' }));

        const bgGroup = svgEl('g', { id: 'eng-bg-group' });
        const fgGroup = svgEl('g', { id: 'eng-fg-group' });
        engineeringSvg.appendChild(bgGroup);
        engineeringSvg.appendChild(fgGroup);

        const defs = svgEl('defs');
        defs.innerHTML = `
            <linearGradient id="carPaint" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#1F5865"/>
                <stop offset="52%" stop-color="#2F6671"/>
                <stop offset="100%" stop-color="#123A43"/>
            </linearGradient>
            <linearGradient id="glassGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#F5FBFA"/>
                <stop offset="55%" stop-color="#C7D8D8"/>
                <stop offset="100%" stop-color="#8EA8AA"/>
            </linearGradient>
            <linearGradient id="planCarPaint" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#F4F1EA"/>
                <stop offset="52%" stop-color="#D6D8D5"/>
                <stop offset="100%" stop-color="#AEB8B9"/>
            </linearGradient>
            <linearGradient id="treeTrunk" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#9A7A5F"/>
                <stop offset="55%" stop-color="#75563F"/>
                <stop offset="100%" stop-color="#B28A68"/>
            </linearGradient>
            <filter id="softAssetShadow" x="-25%" y="-25%" width="150%" height="160%">
                <feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="#3A3839" flood-opacity="0.16"/>
            </filter>
            <pattern id="engHatch" width="14" height="14" patternUnits="userSpaceOnUse">
                <path d="M 0 14 L 14 0" stroke="#F7F4EF" stroke-width="2" opacity="0.55"/>
            </pattern>
            <pattern id="asphaltDash" width="1" height="26" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 0 12" stroke="#F7F4EF" stroke-width="2" opacity="0.75"/>
            </pattern>
            <marker id="dimTick" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M 4 0 L 4 8" stroke="#555D71" stroke-width="1.5"/>
            </marker>
            <marker id="flowArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#F7F4EF"/>
            </marker>
        `;
        engineeringSvg.appendChild(defs);

        fgGroup.appendChild(svgEl('text', { x: minX, y: 36, fill: '#555D71', 'font-size': 20, 'font-weight': 900 }, 'Street section + plan output'));
        fgGroup.appendChild(svgEl('text', { x: minX, y: 58, fill: '#7A573F', 'font-size': 12, 'font-weight': 800 }, `Total right-of-way: ${total.toFixed(1)}m`));
        bgGroup.appendChild(svgEl('line', { x1: minX, y1: sectionGroundY, x2: minX + maxWidth, y2: sectionGroundY, stroke: '#3A3839', 'stroke-width': 1.5 }));
        bgGroup.appendChild(svgEl('rect', { x: minX, y: sectionGroundY + sectionDeckHeight, width: maxWidth, height: 26, fill: '#E4DED3' }));

        lanes.forEach((lane, index) => {
            const widthPx = Math.max(lane.width * scale, 18);
            const centerX = cursor + widthPx / 2;
            const surface = getLaneSurface(lane);
            const group = svgEl('g', { class: 'engineering-lane' });

            bgGroup.appendChild(svgEl('rect', { x: cursor, y: sectionGroundY, width: widthPx, height: sectionDeckHeight, fill: surface, opacity: '0.92' }));
            bgGroup.appendChild(svgEl('rect', { x: cursor, y: planY, width: widthPx, height: planHeight, fill: surface, opacity: '0.9', stroke: '#F7F4EF', 'stroke-width': 1 }));

            if (lane.type === 'sidewalk' || lane.type === 'frontage') {
                renderPaving(group, cursor, planY, widthPx, planHeight);
                const numPeople = Math.min(5, Math.max(1, Math.floor(lane.width / 2) + 1));
                for (let i = 0; i < numPeople; i++) {
                    const px = cursor + (i + 0.5) * (widthPx / numPeople);
                    renderPerson(group, px, sectionGroundY, index, i, lane.id);
                }
                if (lane.type === 'frontage') {
                    group.appendChild(svgEl('rect', { x: cursor + 4, y: sectionGroundY - 148, width: Math.max(widthPx - 8, 30), height: 138, fill: '#E4DED3', stroke: '#BDB4AC' }));
                    group.appendChild(svgEl('line', { x1: cursor + 4, y1: sectionGroundY - 104, x2: cursor + widthPx - 4, y2: sectionGroundY - 104, stroke: '#9A806E', 'stroke-width': 3 }));
                    group.appendChild(svgEl('text', { x: centerX, y: sectionGroundY - 126, 'text-anchor': 'middle', fill: '#7A573F', 'font-size': 11, 'font-weight': 900 }, 'Mixed-use'));
                    group.appendChild(svgEl('rect', { x: cursor + 12, y: planY + 72, width: Math.max(widthPx - 24, 20), height: 24, rx: 3, fill: '#B99678', opacity: '0.45' }));
                    group.appendChild(svgEl('circle', { cx: centerX - 12, cy: planY + 264, r: 7, fill: '#A57F61', opacity: '0.6' }));
                    group.appendChild(svgEl('circle', { cx: centerX + 12, cy: planY + 264, r: 7, fill: '#A57F61', opacity: '0.6' }));
                    group.appendChild(svgEl('rect', { x: centerX - 20, y: planY + 336, width: 40, height: 18, rx: 3, fill: '#655C50', opacity: '0.18' }));
                }
            }

            if (lane.type === 'planting') {
                renderTree(group, centerX, sectionGroundY, widthPx < 56 ? 0.72 : 0.95);
                renderPlanTree(group, centerX, planY, Math.min(32, widthPx * 0.45));
                renderPlanTree(group, centerX, planY + planHeight, Math.min(32, widthPx * 0.45));
            }

            if (lane.type.startsWith('parking')) {
                group.appendChild(svgEl('rect', { x: cursor, y: sectionGroundY, width: widthPx, height: sectionDeckHeight, fill: 'url(#engHatch)' }));
                const parkingFlow = directionForIndex(index, lanes);
                renderSectionParkingVehicle(group, centerX, sectionGroundY, widthPx, lane.variant, parkingFlow);
                const parkingAngle = lane.type === 'parking45'
                    ? (parkingFlow === 'right' ? 45 : 270)
                    : lane.type === 'parking90' ? 90 : 0;
                const carW = lane.type === 'parking' ? Math.min(Math.max(widthPx * 0.96, 54), widthPx - 2) : Math.min(Math.max(widthPx * 0.96, 58), widthPx - 2);
                const carH = lane.type === 'parking' ? 100 : 110;
                const offsets = lane.type === 'parking' ? [152, 392] : [128, 288, 448];
                offsets.forEach((offset, carIndex) => {
                    if (widthPx < 62 && carIndex > 1) return;
                    renderPlanCar(
                        group,
                        centerX + (lane.type === 'parking45' ? (carIndex - 1) * 5 : 0),
                        planY + offset,
                        carW,
                        carH,
                        carIndex % 2 === 0 ? '#DAD7D1' : '#CFCAC3',
                        parkingFlow,
                        parkingAngle
                    );
                });
            }

            if (lane.type === 'driving' || lane.type === 'service' || lane.type === 'bus') {
                renderVehicle(group, centerX, sectionGroundY, widthPx, lane.type === 'bus' ? 'bus' : 'car', lane.direction);
                group.appendChild(svgEl('line', { x1: cursor, y1: planY, x2: cursor, y2: planY + planHeight, stroke: '#F7F4EF', 'stroke-width': 1, opacity: '0.55' }));
                const carFill = lane.type === 'bus' ? '#2F6671' : '#E8ECEC';
                const carY = (lane.direction === 'left')
                    ? ((index % 2 === 0) ? planY + 130 : planY + 250)
                    : ((index % 2 === 0) ? planY + 290 : planY + 410);
                renderPlanCar(
                    group,
                    centerX,
                    carY,
                    Math.min(Math.max(widthPx * 0.96, lane.type === 'bus' ? 62 : 58), widthPx - 2),
                    lane.type === 'bus' ? 140 : 100,
                    carFill,
                    lane.direction
                );
            }

            if (lane.type === 'bike') {
                const medianIdx = getMedianIndex(lanes);
                const isRightSide = medianIdx === -1
                    ? (index >= Math.ceil(lanes.length / 2))
                    : (index > medianIdx);

                // Section view cyclist
                const bikeW = 24;
                const bikeH = 70;
                group.appendChild(svgEl('image', {
                    href: isRightSide ? 'assets/bike back 2.png' : 'assets/bike front 2.png',
                    x: centerX - bikeW / 2,
                    y: sectionGroundY - bikeH,
                    width: bikeW,
                    height: bikeH,
                    preserveAspectRatio: 'xMidYMax meet'
                }));

                group.appendChild(svgEl('text', { x: centerX, y: sectionGroundY + 27, 'text-anchor': 'middle', fill: '#F7F4EF', 'font-size': 18, 'font-weight': 900 }, getDirectionArrow(lane.direction)));
                group.appendChild(svgEl('path', { d: `M ${centerX} ${planY + 112} L ${centerX} ${planY + 448}`, stroke: '#F7F4EF', 'stroke-width': 3, 'marker-end': lane.direction === 'right' ? 'url(#flowArrow)' : '', 'marker-start': lane.direction === 'left' ? 'url(#flowArrow)' : '' }));
                group.appendChild(svgEl('text', { x: centerX, y: planY + 312, 'text-anchor': 'middle', fill: '#F7F4EF', 'font-size': 18, 'font-weight': 900 }, 'Bike'));

                // Plan view cyclists
                const planBikeW = 34;
                const planBikeH = 94;
                const rotation = lane.direction === 'left' ? 0 : 180;

                const bike1Y = planY + planHeight * 0.25;
                group.appendChild(svgEl('image', {
                    href: 'assets/bike top.png',
                    x: centerX - planBikeW / 2,
                    y: bike1Y - planBikeH / 2,
                    width: planBikeW,
                    height: planBikeH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: `rotate(${rotation} ${centerX} ${bike1Y})`
                }));

                const bike2Y = planY + planHeight * 0.75;
                group.appendChild(svgEl('image', {
                    href: 'assets/bike top.png',
                    x: centerX - planBikeW / 2,
                    y: bike2Y - planBikeH / 2,
                    width: planBikeW,
                    height: planBikeH,
                    preserveAspectRatio: 'xMidYMid meet',
                    transform: `rotate(${rotation} ${centerX} ${bike2Y})`
                }));
            }

            if (lane.type === 'busstop') {
                group.appendChild(svgEl('path', { d: `M ${cursor + 8} ${sectionGroundY - 72} L ${cursor + widthPx - 8} ${sectionGroundY - 72} L ${cursor + widthPx - 16} ${sectionGroundY - 58} L ${cursor + 14} ${sectionGroundY - 58} Z`, fill: '#7F8B91', opacity: '0.9' }));
                group.appendChild(svgEl('rect', { x: cursor + 12, y: sectionGroundY - 58, width: Math.max(widthPx - 24, 28), height: 54, rx: 3, fill: '#F7F4EF', stroke: '#7F8B91', 'stroke-width': 1.8, opacity: '0.92' }));
                group.appendChild(svgEl('line', { x1: cursor + 18, y1: sectionGroundY - 58, x2: cursor + 18, y2: sectionGroundY, stroke: '#7F8B91', 'stroke-width': 2 }));
                group.appendChild(svgEl('line', { x1: cursor + widthPx - 18, y1: sectionGroundY - 58, x2: cursor + widthPx - 18, y2: sectionGroundY, stroke: '#7F8B91', 'stroke-width': 2 }));
                group.appendChild(svgEl('rect', { x: cursor + 8, y: planY + 64, width: Math.max(widthPx - 16, 28), height: planHeight - 128, rx: 3, fill: '#F7F4EF', opacity: '0.78', stroke: '#7F8B91' }));
                group.appendChild(svgEl('rect', { x: cursor + 14, y: planY + 96, width: Math.max(widthPx - 28, 18), height: 64, rx: 2, fill: '#7F8B91', opacity: '0.55' }));
                group.appendChild(svgEl('text', { x: centerX, y: planY + 336, 'text-anchor': 'middle', fill: '#7A573F', 'font-size': 12, 'font-weight': 900 }, 'BUS'));
            }

            if (lane.type === 'median') {
                renderTree(group, centerX - Math.min(widthPx * 0.18, 18), sectionGroundY - 8, 0.648);
                renderLamp(group, centerX, sectionGroundY - 8);
                renderPlanTree(group, centerX, planY, Math.min(32, widthPx * 0.45));
                renderPlanTree(group, centerX, planY + planHeight, Math.min(32, widthPx * 0.45));
            }

            if (lane.direction !== 'none' && lane.type !== 'bike') {
                group.appendChild(svgEl('text', { x: centerX, y: sectionGroundY + 27, 'text-anchor': 'middle', fill: getContrastColor(surface), 'font-size': 18, 'font-weight': 900 }, getDirectionArrow(lane.direction)));
                group.appendChild(svgEl('text', { x: centerX, y: lane.direction === 'left' ? planY + 488 : planY + 112, 'text-anchor': 'middle', fill: '#F7F4EF', 'font-size': 22, 'font-weight': 900 }, getDirectionArrow(lane.direction)));
            }

            group.appendChild(svgEl('line', { x1: cursor, y1: planY - 46, x2: cursor + widthPx, y2: planY - 46, stroke: '#555D71', 'stroke-width': 1.4, 'marker-start': 'url(#dimTick)', 'marker-end': 'url(#dimTick)' }));
            group.appendChild(svgEl('text', { x: centerX, y: planY - 22, 'text-anchor': 'middle', fill: '#555D71', 'font-size': widthPx < 55 ? 10 : 12, 'font-weight': 900 }, `${lane.width}m`));
            group.appendChild(svgEl('text', { x: centerX, y: planY + planHeight + 36, 'text-anchor': 'middle', fill: '#655C50', 'font-size': widthPx < 62 ? 8 : 10, 'font-weight': 800 }, lane.label));

            fgGroup.appendChild(group);
            cursor += widthPx;
        });

        fgGroup.appendChild(svgEl('text', { x: minX, y: 92, fill: '#9A806E', 'font-size': 11, 'font-weight': 900 }, 'SECTION'));
        fgGroup.appendChild(svgEl('text', { x: minX, y: planY - 12, fill: '#9A806E', 'font-size': 11, 'font-weight': 900 }, 'PLAN'));
    };

    const renderProperties = () => {
        const selected = getSelectedLane();

        if (!selected) {
            propertiesForm.classList.add('hidden');
            propertiesEmpty.classList.remove('hidden');
            selectedHint.textContent = 'اختر عنصرًا من المقطع';
            return;
        }

        propertiesForm.classList.remove('hidden');
        propertiesEmpty.classList.add('hidden');
        selectedHint.textContent = selected.label;
        propLabel.value = selected.label;
        propWidth.value = selected.width;
        propDirection.value = selected.direction;
        propColor.value = selected.color;
    };

    const renderJson = () => {
        const payload = {
            name: 'Eastern Province street section',
            interactionModel: 'dnd-first snapped lane sequence',
            unit: 'm',
            totalWidth: Number(lanes.reduce((sum, lane) => sum + Number(lane.width), 0).toFixed(1)),
            lanes
        };

        jsonOutput.value = JSON.stringify(payload, null, 2);
    };

    const render = () => {
        const total = lanes.reduce((sum, lane) => sum + Number(lane.width), 0);
        totalWidthEl.textContent = formatWidth(total);
        laneCountEl.textContent = lanes.length;
        emptyState.classList.toggle('hidden', lanes.length > 0);
        streetSvg.classList.toggle('active', lanes.length > 0);

        renderLaneStrip();
        renderSvg();
        renderEngineeringSvg();
        renderProperties();
        renderJson();
    };

    const updateSelected = (updates) => {
        const selected = getSelectedLane();
        if (!selected) return;
        Object.assign(selected, updates);
        render();
    };

    const moveSelected = (direction) => {
        const index = lanes.findIndex(lane => lane.id === selectedId);
        const targetIndex = index + direction;
        if (index < 0 || targetIndex < 0 || targetIndex >= lanes.length) return;
        moveLaneToIndex(selectedId, targetIndex);
    };

    const mirrorAroundSelected = () => {
        const centerIndex = lanes.findIndex(lane => lane.id === selectedId);
        if (centerIndex < 0) return;

        const leftSide = lanes.slice(0, centerIndex);
        const center = lanes[centerIndex];
        const mirrored = leftSide
            .slice()
            .reverse()
            .map(lane => ({
                ...lane,
                id: createId(),
                direction: flipDirection(lane.direction)
            }));

        lanes = [...leftSide, center, ...mirrored];
        applyDirectionalFlow();
        render();
    };

    const handleWorkspaceDrop = (event) => {
        event.preventDefault();
        const type = event.dataTransfer.getData('module/type');
        const laneId = event.dataTransfer.getData('lane/id') || draggedLaneId;
        const index = getDropIndexFromPointer(event.clientX);

        dragOverIndex = null;
        if (type) addLane(type, index);
        if (laneId) moveLaneToIndex(laneId, index);
    };

    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dragOverIndex = getDropIndexFromPointer(event.clientX);
        renderLaneStrip();
        dropzone.classList.add('is-dragging-over');
    });
    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('is-dragging-over');
    });
    dropzone.addEventListener('drop', (event) => {
        dropzone.classList.remove('is-dragging-over');
        handleWorkspaceDrop(event);
    });

    propLabel.addEventListener('input', (event) => updateSelected({ label: event.target.value }));
    propWidth.addEventListener('input', (event) => updateSelected({ width: Number(event.target.value) }));
    propDirection.addEventListener('change', (event) => updateSelected({ direction: event.target.value }));
    propColor.addEventListener('input', (event) => updateSelected({ color: event.target.value }));

    document.getElementById('move-right').addEventListener('click', () => moveSelected(-1));
    document.getElementById('move-left').addEventListener('click', () => moveSelected(1));
    document.getElementById('delete-lane').addEventListener('click', () => {
        lanes = lanes.filter(lane => lane.id !== selectedId);
        applyDirectionalFlow();
        selectedId = lanes[0]?.id || null;
        render();
    });
    document.getElementById('duplicate-lane').addEventListener('click', () => {
        const selected = getSelectedLane();
        if (!selected) return;
        const index = lanes.findIndex(lane => lane.id === selectedId);
        const copy = { ...selected, id: createId(), label: `${selected.label} نسخة` };
        lanes.splice(index + 1, 0, copy);
        applyDirectionalFlow();
        selectedId = copy.id;
        render();
    });
    document.getElementById('mirror-center').addEventListener('click', mirrorAroundSelected);

    trashZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        trashZone.classList.add('is-hot');
    });
    trashZone.addEventListener('dragleave', () => trashZone.classList.remove('is-hot'));
    trashZone.addEventListener('drop', (event) => {
        event.preventDefault();
        const laneId = event.dataTransfer.getData('lane/id') || draggedLaneId;
        if (laneId) {
            lanes = lanes.filter(lane => lane.id !== laneId);
            applyDirectionalFlow();
            selectedId = lanes[0]?.id || null;
            render();
        }
        trashZone.classList.remove('is-hot');
    });

    document.querySelectorAll('[data-preset]').forEach(button => {
        button.addEventListener('click', () => {
            lanes = presets[button.dataset.preset].map(type => createLane(type));
            applyDirectionalFlow();
            selectedId = lanes[0]?.id || null;
            render();
        });
    });

    document.getElementById('export-json').addEventListener('click', async () => {
        jsonOutput.select();
        try {
            await navigator.clipboard.writeText(jsonOutput.value);
        } catch {
            document.execCommand('copy');
        }
    });

    document.getElementById('download-svg').addEventListener('click', () => {
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(streetSvg);
        const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'street-section.svg';
        link.click();
        URL.revokeObjectURL(url);
    });

    document.getElementById('download-engineering-svg').addEventListener('click', () => {
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(engineeringSvg);
        const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'engineering-street-section.svg';
        link.click();
        URL.revokeObjectURL(url);
    });

    renderModules();
    lanes = presets.avenue.map(type => createLane(type));
    applyDirectionalFlow();
    selectedId = lanes[0]?.id || null;
    render();
});

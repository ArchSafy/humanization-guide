document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize the map centered on Dammam/Khobar area
    const map = L.map('map-container').setView([26.3500, 50.1500], 11);

    // 2. Add OpenStreetMap Tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // 3. Define Colors for Categories
    const categoryColors = {
        parks: '#2ecc71',       // Green
        plazas: '#e67e22',      // Orange
        walkways: '#9b59b6',    // Purple
        waterfronts: '#3498db', // Blue
        leftovers: '#f1c40f'    // Yellow/Gold
    };

    const categoryIcons = {
        parks: 'fa-tree',
        plazas: 'fa-city',
        walkways: 'fa-walking',
        waterfronts: 'fa-water',
        leftovers: 'fa-vector-square'
    };

    const categoryNames = {
        parks: 'حديقة',
        plazas: 'ساحة حضرية',
        walkways: 'ممشى',
        waterfronts: 'واجهة بحرية',
        leftovers: 'زوائد تنظيمية'
    };

    // 4. Create custom marker icon generator
    function createCustomIcon(category) {
        const color = categoryColors[category];
        const iconClass = categoryIcons[category];
        
        return L.divIcon({
            className: 'custom-map-marker',
            html: `
                <div class="marker-pin" style="background-color: ${color};"></div>
                <div class="marker-icon"><i class="fas ${iconClass}" style="color: ${color};"></i></div>
            `,
            iconSize: [30, 42],
            iconAnchor: [15, 42],
            popupAnchor: [0, -35]
        });
    }

    // 5. Mock Data for Eastern Province
    const locations = [
        // Parks
        { id: 1, name: "حديقة الملك فهد", lat: 26.3980, lng: 50.1450, category: "parks", desc: "أكبر حديقة في الدمام تتميز بمسطحات خضراء واسعة." },
        { id: 2, name: "منتزه الإسكان", lat: 26.3020, lng: 50.1850, category: "parks", desc: "حديقة نموذجية تخدم الأحياء السكنية." },
        { id: 3, name: "حديقة الأمير سعود بن نايف", lat: 26.2800, lng: 50.2100, category: "parks", desc: "حديقة ذكية في الخبر بتصميم عصري." },
        
        // Plazas
        { id: 4, name: "ساحة أمانة المنطقة الشرقية", lat: 26.4350, lng: 50.1050, category: "plazas", desc: "ساحة حضرية رئيسية للاحتفالات والتجمعات." },
        { id: 5, name: "ميدان التوحيد", lat: 26.2900, lng: 50.2150, category: "plazas", desc: "ميدان حيوي يربط المحاور الرئيسية في الخبر." },
        
        // Walkways
        { id: 6, name: "ممشى الضباب", lat: 26.4150, lng: 50.1200, category: "walkways", desc: "مسار مشاة رياضي متكامل." },
        { id: 7, name: "ممشى شارع الأمير تركي", lat: 26.2950, lng: 50.2200, category: "walkways", desc: "ممشى حيوي محاذي للمناطق التجارية بالخبر." },
        { id: 8, name: "ممشى تلال الظهران", lat: 26.2500, lng: 50.1300, category: "walkways", desc: "مسار مشاة هادئ ومظلل." },
        
        // Waterfronts
        { id: 9, name: "واجهة الدمام البحرية (الكورنيش)", lat: 26.4550, lng: 50.1150, category: "waterfronts", desc: "واجهة ممتدة تضم مناطق ترفيهية ورياضية." },
        { id: 10, name: "كورنيش الخبر الجنوبي", lat: 26.2600, lng: 50.2250, category: "waterfronts", desc: "واجهة بحرية عصرية مع مسارات للمشاة والدراجات." },
        { id: 11, name: "كورنيش نصف القمر", lat: 26.1500, lng: 50.0500, category: "waterfronts", desc: "منطقة شاطئية واسعة للرحلات العائلية." },
        
        // Leftovers (الزوائد التنظيمية)
        { id: 12, name: "زائدة تنظيمية - حي الشاطئ", lat: 26.4400, lng: 50.1250, category: "leftovers", desc: "مساحة غير مستغلة سيتم تحويلها إلى فراغ حضري صغير." }
    ];

    // 6. Add markers to the map and store them in an array
    const markers = [];
    
    locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], {
            icon: createCustomIcon(loc.category),
            category: loc.category
        });
        
        const popupContent = `
            <div class="map-popup">
                <span class="popup-badge" style="background-color: ${categoryColors[loc.category]}">${categoryNames[loc.category]}</span>
                <h4>${loc.name}</h4>
                <p>${loc.desc}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        marker.addTo(map);
        markers.push(marker);
    });

    // 7. Filter Logic
    const filterButtons = document.querySelectorAll('.map-filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            const targetBtn = e.currentTarget;
            targetBtn.classList.add('active');
            
            const selectedFilter = targetBtn.getAttribute('data-filter');
            
            // Show/Hide markers based on filter
            markers.forEach(marker => {
                const markerCategory = marker.options.category;
                
                if (selectedFilter === 'all' || selectedFilter === markerCategory) {
                    if (!map.hasLayer(marker)) {
                        marker.addTo(map);
                    }
                } else {
                    if (map.hasLayer(marker)) {
                        map.removeLayer(marker);
                    }
                }
            });
            
            // Adjust map view when filtering (optional)
            // If we wanted to re-center the map based on visible markers, we could do it here
        });
    });
});

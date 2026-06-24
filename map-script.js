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

    // 5. Load Data from window.mapLocations (defined in locations-data.js)
    const locations = window.mapLocations || [];

    // 6. Add markers to the map and store them in an array
    const markers = [];
    
    locations.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], {
            icon: createCustomIcon(loc.category),
            category: loc.category
        });
        
        let popupContent = `
            <div class="map-popup">
                <span class="popup-badge" style="background-color: ${categoryColors[loc.category]}">${categoryNames[loc.category]}</span>
                <h4>${loc.name}</h4>
        `;
        
        if (loc.desc) {
            popupContent += `<p>${loc.desc}</p>`;
        }
        
        if (loc.link) {
            popupContent += `
                <div class="popup-link-wrapper" style="margin-top: 10px;">
                    <a href="${loc.link}" target="_blank" class="popup-link-btn" style="color: ${categoryColors[loc.category]}; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 5px;">
                        <i class="fas fa-external-link-alt"></i> عرض الموقع على الخريطة
                    </a>
                </div>
            `;
        }
        
        popupContent += `</div>`;
        
        marker.bindPopup(popupContent);
        marker.addTo(map);
        markers.push(marker);
    });

    // Fit map bounds to show all markers initially
    if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }

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
            
            // Re-fit map bounds to visible markers
            const visibleMarkers = markers.filter(m => map.hasLayer(m));
            if (visibleMarkers.length > 0) {
                const group = L.featureGroup(visibleMarkers);
                map.fitBounds(group.getBounds().pad(0.1));
            }
        });
    });
});

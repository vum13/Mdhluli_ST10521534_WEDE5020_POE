const mapElement = document.getElementById('map');

if (mapElement && typeof L !== 'undefined') {
    
    const officeLocation = [-25.7461, 28.1881];

    const map = L.map('map').setView(officeLocation, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(officeLocation)
        .addTo(map)
        .bindPopup('<strong>CSL Technologies</strong><br>652 Wainwright Street, Pretoria')
        .openPopup();
}
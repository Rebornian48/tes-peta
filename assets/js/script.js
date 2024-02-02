var map = L.map('map').setView([-3,118], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-6.22458376272189, 106.80391059934134]).addTo(map).bindPopup("<b>Lokasi JKT48 Theater</b> <br /> FX Sudirman");
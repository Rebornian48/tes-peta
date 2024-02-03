var map = L.map("map").setView([-3, 118], 5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var markers = L.markerClusterGroup();
markers.addLayer(
  L.marker([-6.22458376272189, 106.80391059934134]).bindPopup(
    "<b>Lokasi JKT48 Theater:</b> Lantai 4 fX Sudirman, Jl. Jenderal Sudirman, Jakarta Pusat<br /><b>Tanggal: </b>8 September 2012 - sekarang"
  )
);
markers.addLayer(
  L.marker([-6.222855339177926, 106.83462826328129]).bindPopup(
    "<b>Lokasi JKT48 Theater Sementara:</b> Nyi Ageng Serang, Plaza Festival, Kuningan, Jakarta Selatan<br /><b>Tanggal: </b>17 - 20 Mei 2012"
  )
);

markers.addLayer(
  L.marker([-6.24354274260237, 106.80276283969677]).bindPopup(
    "<b>Lokasi JKT48 Theater Sementara:</b> Studio 7 Pasaraya Grande Blok M Jakarta, Jakarta Selatan<br /><b>Tanggal: </b>14 - 17 Juni 2012 dan 13 - 15 Juli 2012"
  )
);

markers.addLayer(
    L.marker([-7.256153661538832, 112.73973425951645]).bindPopup(
        "<b>Lokasi JKT48 Theater Sementara:</b> Taman Budaya Genteng Cak Durasim, Surabaya<br /><b>Tanggal: </b>17 Juli - 4 Agustus 2016"
  )
);
map.addLayer(markers);

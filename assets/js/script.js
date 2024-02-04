var map = L.map("map").setView([-3, 118], 5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);

var CartoDB_DarkMatter = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
);
CartoDB_DarkMatter.addTo(map);

// Google Map Layer

var googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleStreets.addTo(map);

// Satelite Layer
var googleSat = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleSat.addTo(map);

var Stamen_Watercolor = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 1,
    maxZoom: 16,
    ext: "jpg",
  }
);
Stamen_Watercolor.addTo(map);

var baseLayers = {
  Satellite: googleSat,
  "Google Map": googleStreets,
  "Water Color": Stamen_Watercolor,
  OpenStreetMap: osm,
  "Dark Matter": CartoDB_DarkMatter,
};

L.control.layers(baseLayers).addTo(map);

var worldMiniMap = L.control
  .worldMiniMap({
    position: "bottomleft",
    style: { opacity: 0.9, borderRadius: "0px", backgroundColor: "lightblue" },
  })
  .addTo(map);

var teaterfX = L.marker([-6.22458376272189, 106.80391059934134]).bindPopup(
  "<b>Lokasi JKT48 Theater:</b> Lantai 4 fX Sudirman, Jl. Jenderal Sudirman, Jakarta Pusat<br /><b>Tanggal: </b>8 September 2012 - sekarang"
);
var teaterKuningan = L.marker([
  -6.222855339177926, 106.83462826328129,
]).bindPopup(
  "<b>Lokasi JKT48 Theater Sementara:</b> Nyi Ageng Serang, Plaza Festival, Kuningan, Jakarta Selatan<br /><b>Tanggal: </b>17 - 20 Mei 2012"
);

var teaterPasaraya = L.marker([
  -6.24354274260237, 106.80276283969677,
]).bindPopup(
  "<b>Lokasi JKT48 Theater Sementara:</b> Studio 7 Pasaraya Grande Blok M Jakarta, Jakarta Selatan<br /><b>Tanggal: </b>14 - 17 Juni 2012 dan 13 - 15 Juli 2012"
);

var teaterSurabaya = L.marker([
  -7.256153661538832, 112.73973425951645,
]).bindPopup(
  "<b>Lokasi JKT48 Theater Sementara:</b> Taman Budaya Genteng Cak Durasim, Surabaya<br /><b>Tanggal: </b>17 Juli - 4 Agustus 2016"
);

var markers = L.markerClusterGroup();
markers.addLayer(teaterfX);
markers.addLayer(teaterKuningan);
markers.addLayer(teaterPasaraya);
markers.addLayer(teaterSurabaya);
map.addLayer(markers);

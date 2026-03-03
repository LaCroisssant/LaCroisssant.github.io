var map = L.map('map').setView([57.660, 39.939], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap'
}).addTo(map);

var redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',  // Красный
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',  iconAnchor: [12, 41],
    popupAnchor: [1, -34],});

var zoo = L.marker([57.6772, 39.8998], {icon: redIcon}).addTo(map)
    .bindPopup('<img src="images/zoo.webp" width="267" height = "150"><br><a href="pages/zoo.html">Зоопарк</a>');
var jd = L.marker([57.6596, 39.9635], {icon: redIcon}).addTo(map)
    .bindPopup('<img src="images/jd.jpg" width="200" height = "150"><br><a href="pages/kids.html">Детская ЖД</a>');
var tolga = L.marker([57.6966, 39.8283], {icon: redIcon}).addTo(map)
    .bindPopup('<img src="images/tolga-monastery.jpg" width="150" height = "200"><br><a href="pages/tolga.html">Толгский монастырь</a>');
var yakov = L.marker([57.6586, 39.95665], {icon: redIcon}).addTo(map)
    .bindPopup('<img src="images/yakov.jpg" width="220" height = "150"><br><a href="pages/yakovlevskaya.html">Яковлевская церковь</a>');
var zosima = L.marker([57.63695, 39.9033], {icon: redIcon}).addTo(map)
    .bindPopup('<img src="images/zosima.png" width="150" height = "150"><br><a href="pages/zosima.html">Храм Зосимы и Савватия</a>');
var submarine = L.marker([57.638005, 39.902105], {icon: redIcon}).addTo(map)
    .bindPopup('<img src="images/submarine.webp" width="230" height = "150"><br><a href="pages/submarine.html">Подводная лодка</a>');
var park = L.marker([57.6506, 39.9324], {icon: redIcon}).addTo(map)
    .bindPopup('<img src="images/park.webp" width="200" height = "200"><br><a href="pages/park.html">Парк Карпаты</a>');


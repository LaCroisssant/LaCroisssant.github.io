var map = L.map('map').setView([55.7558, 37.6173], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker1 = L.marker([55.7517, 37.6184]).addTo(map)
    .bindPopup('<b>Кремль</b><br><a href="https://kremlin.ru/" target="_blank">Сайт Кремля</a>');

var marker2 = L.marker([55.7558, 37.6173]).addTo(map)
    .bindPopup('Центр Москвы. <a href="https://mos.ru/" target="_blank">Портал Москвы</a>');

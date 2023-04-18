//atenção, passar como parametro ID, não classe
const myMap = L.map('map').setView([-3.7409806,-38.4986826], 16);

//create and add tileLayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myMap);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minHeight: 240,
    minWidth: 240
}).setContent('Petshop Cobasi <a href="petshop.html?id=1" class="choose-petshop"> <img src="./public/images/arrow-white.svg"> </a>')

//create add marker
L.marker([-3.7409806,-38.4986826], {icon: icon})
.addTo(myMap)
.bindPopup(popup)
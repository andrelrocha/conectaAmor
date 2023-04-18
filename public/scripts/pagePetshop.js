const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const myMap = L.map('map', options).setView([-3.78361,-38.4845282], 16);

//create and add tileLayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myMap);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create add marker
L.marker([-3.78361,-38.4845282], {icon: icon})
.addTo(myMap)

//image gallery
function selectImage (event) {
    const button = event.currentTarget;

    //remove all classes ".active"
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass (button) {
        button.classList.remove("active");
    }

    //select img on click
    const image = button.children[0];
    const imageContainer = document.querySelector(".mainImage")

    //update current img container
    imageContainer.src = image.src;

    //add ".active" to the current button
    button.classList.add("active");
}
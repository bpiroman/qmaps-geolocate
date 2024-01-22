// import '/style.css';

const htmlMap = `
<header class="qmaps-header">
  <div id="qmapsTimeline"></div>
</header>
<div id="map" class="map"></div>
`;

function clearPage() {
    console.log('clearPage');
    // const appRef = document.getElementById("app");
    // while (appRef.firstChild) {
    //     appRef.removeChild(appRef.firstChild);
    // }
    $('#app').empty();
    $('head').find('link#style').remove();
}

//leaflet
// Base layers
//  .. OpenStreetMap
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{ maxZoom: 25, attribution: ""});

function addMap() {
    const map = L.map('map', {
        center: [-33.2293503678, 116.060229685],
        zoom: 14,
        layers: [osm],
        attributionControl: false
    });
    //Map
    osm.addTo(map);
    // geolocation
    L.geolet({ position: 'topleft' }).addTo(map);
  }

// DOM Manipulation
function buildState(state) {
    if (state === "map") {
      document.querySelector('#app').innerHTML = htmlMap;
      addMap();
    } 
}
  
function render(state) {
    clearPage();
    buildState(state.page);
    console.log(state);
}

// State Manipulation
const initialState = { random: "qmaps", page: "map" };

function getState() {
    return JSON.parse(localStorage.getItem("qmaps"));
}

// Initialize
render(getState() || initialState);
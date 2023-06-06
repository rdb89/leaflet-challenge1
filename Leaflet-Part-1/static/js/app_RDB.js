// UOM_DS Module 15 Leaflet1 Earthquakes Mapping Challenge

// Creating the map object (UOM_DS 01-Evr_BasicNYCBoroughs referenced)
let myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  // Use this link to get the GeoJSON data.
  let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
  
  // Getting our GeoJSON data
  d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(myMap);
  });

function markerSize(mag) {
  return Math.ssqrt(mag) * 50;
}

  
  // Test new location
  //L.marker([46.7867, -92.1005]).addTo(myMap);

  // Creating a new marker:
  // We pass in some initial...
  //let marker = L.mark([46.7208, -92.1041], {
    //draggable: true,
    //title: "My First Marker"
  //}).addTo(myMap);

  // Binding a popup to our marker
  //marker.bindPopup("Hello There!");

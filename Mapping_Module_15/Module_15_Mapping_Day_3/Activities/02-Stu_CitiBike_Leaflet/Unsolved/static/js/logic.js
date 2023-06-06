// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;

// Create the createMap function.
// Creating the map object (UOM_DS 01-Evr_BasicNYCBoroughs referenced)
let myMap = L.map("map", {
  center: [40.73, -74.0059],
  zoom: 12
});

  // Create the tile layer that will be the background of our map.
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
let link = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";
  
// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});

  // Create a baseMaps object to hold the lightmap layer.


  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.

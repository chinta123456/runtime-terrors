// Creating map object

var data = d3.json("cities.json")
var lat = data.selCity[0]
var lng = data.selCity[1]

var myMap = L.map("map", {
  center: [lat, lng],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer(MAP_URL, {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
   id: 'mapbox/streets-v11',
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
;

// Grab the data with d3
d3.json("citydata.json", function(response) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {
    // console.log(response[i])
    // Set the data location property to a variable
    if (response[i].latitude) {

    var latitude = response[i].latitude;

    var longitude = response[i].longitude;

    // Check for location property
      // Add a new marker to the cluster group and bind a pop-up

        console.log(response[i]);

        markers.addLayer(L.marker([latitude, longitude])
        .bindPopup(response[i].descriptor));

      };
  };

  console.log(markers)

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});

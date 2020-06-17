// API key
const API_KEY = "sk.eyJ1IjoicmljaGFnNyIsImEiOiJja2F4N3loZXcwMnE0MnJvNTVoOGYwejl2In0.MWdCdo5q0s1BADhO6xoJkw";
const MAP_URL = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"

var city_data = d3.json("cities.json")

function buildmap() {
  var lat = city_data.selCity[0];
  var lng = city_data.selCity[1];
  
  var myMap = L.map("bar_map", {
    center: [lat, lng],
    zoom: 11
  });

  L.tileLayer(MAP_URL, {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
   id: 'mapbox/streets-v11',
    accessToken: API_KEY
  }).addTo(myMap);
};

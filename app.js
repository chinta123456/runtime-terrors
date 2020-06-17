// API key
const API_KEY = "sk.eyJ1IjoicmljaGFnNyIsImEiOiJja2F4N3loZXcwMnE0MnJvNTVoOGYwejl2In0.MWdCdo5q0s1BADhO6xoJkw";
const MAP_URL = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"

var quizData_beer = ['Sour', 'Sweet', 'Malty', 'Bitter', 'Dense'];
var quizData_cocktail = ['Sour', 'Sweet', 'Smokey', 'Spicy', 'Smooth'];

var beverage = "";
var attribute = "";
var selCity = "";

var div = document.getElementById('jsObject');

div.style.visibility = 'hidden';

function beersankeybuilder() {
  d3.json("beer_sankey.json").then((data) => {
    var chartdata = {
      type: "sankey",
      orientation: "h",
      node: {
        pad: 15,
        thickness: 30,
        line: {
          color: "black",
          width: 0.5
        },
       label: data.labels,
       color: "#a67c00"
          },
    
      link: {
        source: data.source,
        target: data.target,
        value:  data.value
      }
    }
    
    var chartdata = [chartdata]

    var layout = {
      title: "Beer Categories",
      font: {
        size: 10
      },
      height: 2700
    }  
    Plotly.react('sankey_beer', chartdata, layout)  
  });
};


function cocktailsankeybuilder() {
  d3.json("cocktail_sankey.json").then((data) => {
    var chartdata = {
      type: "sankey",
      orientation: "h",
      node: {
        pad: 15,
        thickness: 30,
        line: {
          color: "black",
          width: 0.5
        },
       label: data.labels,
       color: "#a67c00"
          },
    
      link: {
        source: data.source,
        target: data.target,
        value:  data.value
      }
    }
    
    var chartdata = [chartdata]

    var layout = {
      title: "Cocktail Categories",
      font: {
        size: 10
      },
      height: 2700
    }  
    Plotly.react('sankey_cocktails', chartdata, layout)  
  });
};

beersankeybuilder();
cocktailsankeybuilder();

function beerclick() {
    var attributes = quizData_beer;

    var selector = d3.select('#selDataset');

    attributes.forEach(name => {
                    selector.append("div")
                            .attr("class", "card m-2 shadow")
                            .each(function(d) {
                              d3.select(this).append("div")
                                .attr("class", "card-body")
                                .each(function(e) {
                                  d3.select(this).append("input")
                                                .property("type", "button")
                                                .property("value", name)
                                                .property("id", name)
                                                .attr("onclick", "data_log(this.value)")
                                                .text(name);
                                              });
                              });
                      });
};

function cocktailclick() {
  var attributes = quizData_cocktail;

  var selector = d3.select('#selDataset');

  attributes.forEach(name => {
                  selector.append("div")
                          .attr("class", "card m-2 shadow")
                          .each(function(d) {
                            d3.select(this).append("div")
                              .attr("class", "card-body")
                              .each(function(e) {
                                d3.select(this).append("input")
                                              .property("type", "button")
                                              .property("value", name)
                                              .property("id", name)
                                              .attr("onclick", "data_log(this.value)")
                                              .text(name);
                                            });
                            });
                    });
};

function data_log() {
  if (event.target.value === 'Beer' || event.target.value === 'Cocktails') {
    beverage = event.target.value
  } else {
    attribute = event.target.value;
    selCity = destination();
    showDiv();
    cityData();
  };
};

function destination() {
  if (beverage === "Beer" && attribute === "Sour") {
    var selCity = "Denver";
    console.log(selCity);
  } else if (beverage === "Beer" && attribute === "Sweet") {
    var selCity = "Philadelphia";
    console.log(selCity);
  } else if (beverage === "Beer" && attribute === "Malty") {
    var selCity = "Boston";
    console.log(selCity);
  } else if (beverage === "Beer" && attribute === "Bitter") {
    var selCity = "New_York_City";
    console.log(selCity);
  } else if (beverage === "Beer" && attribute === "Dense") {
    var selCity = "San_Francisco";
    console.log(selCity);
  } else if (beverage === "Cocktails" && attribute === "Sour") {
    var selCity = "Denver";
    console.log(selCity);
  } else if (beverage === "Cocktails" && attribute === "Sweet") {
    var selCity = "Philadelphia";
    console.log(selCity);
  } else if (beverage === "Cocktails" && attribute === "Smokey") {
    var selCity = "Boston";
    console.log(selCity);
  } else if (beverage === "Cocktails" && attribute === "Spicy") {
    var selCity = "New_York_City";
    console.log(selCity);
  } else if (beverage === "Cocktails" && attribute === "Smooth") {
    var selCity = "San_Francisco";
    console.log(selCity);
  };

  return selCity
};

function showDiv() {
  div.style.visibility = 'visible';
}

// fetch city data for busiest months, tour data (bars and restaurant recommendations) from flask app.py
function cityData(selCity) {
  fetch('http://localhost:4444/citydata?city='+selCity).then(d=>d.json().then((data)=>{
    tbl = document.getElementById('busyMonthsTable')
    tbl.innerHTML="<thead><tr><th>Busiest Months in 2017, by Flight Arrivals</th></thead>"
    console.log(data) 
    data.top5.result.forEach(city => { 
        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerHTML= `<b>${city}</b>`
        tr.appendChild(td)
        tbl.appendChild(tr);
    });
    resCard1 = document.getElementById('card_id_1')
    resCard2 = document.getElementById('card_id_2')
    resCard3 = document.getElementById('card_id_3')
    resCard4 = document.getElementById('card_id_4')
    resCard5 = document.getElementById('card_id_5')
   console.log(data.top5pubs)
    resCard1.innerHTML = data.top5pubs.result[0][0]
    resCard2.innerHTML = data.top5pubs.result[0][1]
    resCard3.innerHTML = data.top5pubs.result[0][2]
    resCard4.innerHTML = data.top5pubs.result[0][3]
    resCard5.innerHTML = data.top5pubs.result[0][4]
    tour_table = document.getElementById('to-do-list')
    tour_table.innerHTML=`<thead><tr><th>Top10 Tours in the ${selCity}</th></thead>`
    data.tourdata[0].top10_tour.forEach(bar => { 
      tr = document.createElement('tr')
      td = document.createElement('td')
      td.innerHTML= `<b>${bar}</b>`
      tr.appendChild(td)
      tour_table.appendChild(tr);
    });
    }
  ));
};

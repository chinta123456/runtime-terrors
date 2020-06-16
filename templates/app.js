var quizData_beer = ['Sour', 'Sweet', 'Malty', 'Bitter', 'Dense'];
var quizData_cocktail = ['Sour', 'Sweet', 'Smokey', 'Spicy', 'Smooth'];

var beverage = "";
var attribute = "";
var selCity = "";

var div = document.getElementById('jsObject');

div.style.visibility = 'hidden';

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
    // cityfunction()
  };
};

function destination() {
  if (beverage === "Beer" && attribute === "Sour") {
    var selCity = "Denver";
    console.log(selCity);
  } else if (beverage === "Beer" && attribute === "Sweet") {
    var selCity = "Nashville";
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
    var selCity = "Nashville";
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

function showDiv()
{
  div.style.visibility = 'visible';
    //or something
}

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
// YOUR CODE HERE!

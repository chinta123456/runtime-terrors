var quizData_beer = ['Sour', 'Sweet', 'Malty', 'Bitter', 'Dense'];
var quizData_cocktail = ['Sour', 'Sweet', 'Smokey', 'Spicy', 'Smooth'];

var beverage = "";
var attribute = "";

function beerclick() {
    var attributes = quizData_beer;

    var selector = d3.select('#selDataset');

    attributes.forEach(name => {
                    selector.append("div")
                            .attr("class", "card shadow")
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
                          .attr("class", "card shadow")
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
  console.log(event.target.value);
  if (event.target.value === 'Beer' || event.target.value === 'Cocktails') {
    var beverage = event.target.value
  } else {
    var attribute = event.target.value
  };
  console.log(beverage);
  console.log(attribute);
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

var selCity = destination();

// YOUR CODE HERE!

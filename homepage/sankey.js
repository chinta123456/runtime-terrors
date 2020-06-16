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
       color: "red"
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
      }
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
       color: "red"
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
      }
    }  
    Plotly.react('sankey_cocktails', chartdata, layout)  
  });
};

beersankeybuilder();
cocktailsankeybuilder();
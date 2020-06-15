
var cities = ['Denver', 'Philadelphia', 'San_Francisco', 'New_York_City', 'Boston', 'New_Orleans']

var strMessage1 = document.getElementById("element1") ;
strMessage1.innerHTML = strMessage1.innerHTML
.replace( /aaaaaa./g,'<a href=\"http://www.google.com/')
.replace( /.bbbbbb/g,'/world\">Helloworld</a>') ;


//accept value from Richa function--based on City name (hopefully); 
//replace value in Jumbotron with 
function bannerImage(city) {

    var jumbotron = document.getElementById('styles_js');
    if (!jumbotron) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}

addNewStyle('td.EvenRow a {display:inline !important;}')
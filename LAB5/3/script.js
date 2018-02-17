function doStuff() {
  $.ajax({
    dataType: "jsonp",
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
  });
}

function jsonCallback(json) {
  var list = document.getElementById("list");
  for(var i = 0; i < json.length; i++) {
    list.innerHTML += json[i]["name"] + " email: " + json[i]["email"] + "<br>";
  }
}

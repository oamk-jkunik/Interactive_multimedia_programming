function addPerson() {
  var firstNameElement = $("#name")[0];
  View.addPerson(firstNameElement.value);
  //var list= document.getElementById("personList");
  //list.innerHTML += "<p>"+ name +"</p>";
}

function clearStorage() {
  localStorage.clear();
}

$(document).ready(function() {
  if(localStorage.getItem("names") === null) {

  }else {
    View.updateView();
  }
});

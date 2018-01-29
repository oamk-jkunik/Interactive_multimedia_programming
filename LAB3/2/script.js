function addPerson() {
  var firstNameElement = document.getElementById("name");
  View.addPerson(firstNameElement.value);//zmena
  //var list= document.getElementById("personList");
  //list.innerHTML += "<p>"+ name +"</p>";
}

function clearStorage() {
  localStorage.clear();
}

function init() {
  if(localStorage.getItem("names") === null) {

  }else {
    View.updateView();
  }
}

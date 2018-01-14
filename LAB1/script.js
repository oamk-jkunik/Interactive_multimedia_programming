function addPerson(form) {
  var nameOfThePerson = form.nameOfThePerson.value;
  var list = document.getElementById("PersonList");
  list.innerHTML += "</p>" + nameOfThePerson + "</p>";
}

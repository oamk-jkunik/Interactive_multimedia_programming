function addPerson() {
  var name = document.getElementById("name").value;
  var list= document.getElementById("personList");
  list.innerHTML += "<p>"+ name +"</p>";
}

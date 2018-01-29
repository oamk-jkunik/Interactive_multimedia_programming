function Model() { 
  if(localStorage.getItem("names") === null) {
    this.persons = new Array();
  }else{
    this.persons = JSON.parse(localStorage.getItem("names"));
  }

  this.addPerson = function(person) {
    this.persons.push(person);

    localStorage.setItem("names", JSON.stringify(this.persons));
  }

  this.getPersons = function() {
    this.persons = JSON.parse(localStorage.getItem("names"));
    return this.persons;
  }
}

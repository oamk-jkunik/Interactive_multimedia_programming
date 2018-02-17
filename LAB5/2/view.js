var View = new View();

function View() {
  this.Model = new Model();

  this.updateView = function() {
    var results = $("results")[0];

    results.innerHTML = "";
    if(this.Model.getPersons().length > 0) {
      for (var i = 0; i < this.Model.getPersons().length; i++) {
        var onePerson = this.Model.getPersons()[i];
        results.innerHTML += onePerson.name+"<br>";
      }
    }
  }
  this.addPerson = function(name) {
    var newPerson = new Controller(name);
    this.Model.addPerson(newPerson);
    this.updateView();
  }
}

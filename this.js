const person = {
  name: "Maria",
  age: 25,
  talk: function () {
    console.log(this.name)
  }
}

person.talk()
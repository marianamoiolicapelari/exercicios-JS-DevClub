const student = {
  name:"Caio",
  age: 26,
  genre: "male",
}

for(let property in student) {
console.log(property)
}

for(let property in student) {
  console.log(`${property}:${student[property]}`)
  }
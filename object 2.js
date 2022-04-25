const firstperson = {
  name: "Mariana",
  age: 37,
  sex: "female",
  profession: "Developer",
  nationality: "Brasileira"
}

if (firstperson.age >= 18 && (firstperson.nationality == "Brasileira" || firstperson.nationality == "Brasileiro")) {
  console.log(`${firstperson.name} foi aprovada no processo de seleção.`)
} else {
  console.log(`${firstperson.name} foi reprovada no processo de seleção.`)
}
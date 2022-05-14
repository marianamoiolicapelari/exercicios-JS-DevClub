const numbers = [1,2,3,4]
const students = [
    { name: "Rodolfo", age: 25},
    { name: "Maria", age: 43},
    { name: "João", age: 21},
    { name: "Bruno", age: 43},
    { name: "Carla", age: 13},
    { name: "Ana", age: 20},
    { name: "Julio", age: 26},
]
/*
const newArray = numbers.map( (number) => {
  return number * 2
})
console.log(numbers)
console.log(newArray)
*/

const newStudents = students.map( (student) => {
    const newStudent = {
      name: student.name + ' da Silva',
      age: student.age - 5
    }
    return newStudent
})
console.log(students)
console.log(newStudents)

/* MESMA FUNÇÃO APENAS FORMAS DIFERENTES DE MONTAR

const newArray0 = numbers.map( function(number) {
  return number *3
})

const newArray1 = numbers.map( (number) => {
  return number *3
})

const newArray3 = number.map( number => number * 3 )
*/

/* MESMA FUNÇÃO A PRIMEIRA É SOMENTE A FORMA REDUZIDA EM CÓDIGOS DA SEGUNDA
const double = number => number * 2

const double2 = function(number){
  return number * 2
}
*/

//Na função a baixo é possível juntar as 3 funções com o MAP para retornar
// o resultado
const double = number => number * 2
const sum = number => number + 10
const minus = number => number - 5

const newArray2 = numbers.map(double).map(sum).map(minus)

console.log(newArray2)



const numberOne = 30
const numberTwo = 25
const numberThree = 1
const numberFour = 3

if(numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 ===0){
  console.log("Todos os números são pares!")
} else if(numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !==0) {
  console.log("Todos os números são ímpares!")
} else {
  console.log("Números misturados entre ímpares e pares!")
}

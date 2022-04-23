const randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
const winningNumber = Math.floor(Math.random() * (10 - 1) + 1)

if(randomNumber === winningNumber){
  console.log("Você Ganhou")
} else {
  console.log("Você Perdeu")
}
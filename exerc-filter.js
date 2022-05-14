const list = [20,3,234,12,17,541,6,87,275,1000];

/* Como fiz:
const newList = list.filter( numbers =>{
  return numbers % 2 == 0 && numbers % 5 == 00
})

console.log(newList)
*/

//Como Rodolfo fez:
const newList = list.filter( numbers =>{
  if(numbers % 2 !== 0 || numbers % 5 !== 0) return false
  else return true  
})

console.log(newList)

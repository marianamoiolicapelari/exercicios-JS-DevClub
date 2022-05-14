const companies = [
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
  { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
  { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
  { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
  { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

/* Diferentes formas de resolver a mesma situação problema
const newCompaniesList = companies.filter( result =>{
  if(result.foundedOn <= 1975) return false
  if(result.marketValue <= 200) return false
  return true
})

console.log(newCompaniesList)
*/

const newCompaniesList = companies.filter( result =>{
  if(result.foundedOn > 1975 && result.marketValue > 200) return true
  else return false
})

console.log(newCompaniesList)

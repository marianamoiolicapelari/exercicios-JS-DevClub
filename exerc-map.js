const list = [
  { name: "Rodolfo", vip: true },
  { name: "Maria", vip: false },
  { name: "João", vip: true },
  { name: "Bruno", vip: true },
  { name: "Carla", vip: false },
  { name: "Ana", vip: true },
  { name: "Julio", vip: false },
]

const newList = list.map( person => {
    const newList = {
      name: person.name,
      vip: person.vip,
      sector: person.vip ? 'Black':'Green'

    }
    return newList
})
console.log(newList)



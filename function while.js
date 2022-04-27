const people = [
  {
    numberOfChildren: 2,
    salary: 2000
  },
  {
    numberOfChildren: 5,
    salary: 3000
  },
  {
    numberOfChildren: 0,
    salary: 2500
  },
  {
    numberOfChildren: 2,
    salary: 1000
  },
  {
    numberOfChildren: 3,
    salary: 2300
  },
  {
    numberOfChildren: 10,
    salary: 5200
  },
  {
    numberOfChildren: 0,
    salary: -3000
  },
]

function findAverageAndHighestSalary(peopleInformation) {

  let i = 0;
  let averageSalary = 0
  let averageChildren = 0
  let highestSalary = 0

  while (peopleInformation[i].salary > 0) {
    averageSalary = averageSalary + peopleInformation[i].salary
    averageChildren += peopleInformation[i].numberOfChildren
    peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
    i++
  }
  console.log(`Média de salário R$ ${(averageSalary / i).toFixed(0)}`)
  console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
  console.log(`Maior Salário R$ ${highestSalary}`)
}
findAverageAndHighestSalary(people)
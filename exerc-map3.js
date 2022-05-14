const students = [
  { name: 'Rodolfo', testGrade: 7 },
  { name: 'Maria', testGrade: 5 },
  { name: 'João', testGrade: 8 },
  { name: 'Bruno', testGrade: 9 },
  { name: 'Carla', testGrade: 3 },
  { name: 'Ana', testGrade: 2 },
  { name: 'Julio', testGrade: 10 },
];

const approvedStudents = students.map( student => {
  let approvedOrNot

  if(student.testGrade >= 7){
    approvedOrNot = 'approved'
  } else {
    approvedOrNot = 'disapproved'
  }

  const students = {
      name: student.name,
      finalResult: approvedOrNot
  }

  return students
})

console.log(approvedStudents)
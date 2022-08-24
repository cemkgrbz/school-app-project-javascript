const school=[
    {
      name: "FbW1",
      students: [
        {
          name: "Alex",
          email: "alex@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Max",
          email: "max@yahoo.com",
          city: "Hamburg",
        },
      ],
    },

    {
      name: "FbW2",
      students: [
        {
          name: "Jon",
          email: "jon@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Pilar",
          email: "pilar@yahoo.com",
          city: "Berlin",
        },
      ],
    },
    {
      name: "FbW3",
      students: [],
    },
  ]

  //Create a class

  function createClass(newClass) {

    newClass.students = []
    school.push(newClass);
    console.log(school)
  }

  const newClass4 = {
    name: "FbW4",
    students: [
      {
        name: "Tom",
        email: "tom@yahoo.com",
        city: "Leipzig",
      },
      {
        name: "Jonas",
        email: "jonas@yahoo.com",
        city: "Leipzig",
      },
    ]
  };

  createClass(newClass4)
  createClass({name: "test"})

  console.log("-----------------")

  //Create student

  function createStudent(classID, newStudent) {
    school[classID].students.push(newStudent);
    console.log(school)
  }

  const newStudent2 = {
    name: "Daisy",
    email: "daisy@yahoo.com",
    city: "Stuttgart",
  }

  const newStudent3 = {
      name: "Reno",
      email: "reno@yahoo.com",
      city: "Paris",
  }

  //or

//   function addStudent(object) {

//     const idx = school.findIndex(item => item.name === object.class)
//     console.log("🚀 ~ addStudent ~ idx", idx)

//     const student = object.data

//     school[idx].students.push(student)
// }

// addStudent({
//   class: 'FbW3',
//   data: {
//       name: 'Chris',
//       email: 'chris@test.com',
//       city: 'berlin'
//   }
// })

  createStudent(3, newStudent2)
  createStudent(2, newStudent3)
  createStudent(2, {
    name: "Franzi",
    email: "franzi@gmail.com",
    city: "Naples",
})

  console.log(school[2])

  console.log("-----------------")

  //Remove class

  function removeClass(id) {
    school.splice(id-1, 1)

    console.log(school)
  }

  removeClass(4);
  removeClass(4);
  console.log("-----------------")

  //or 

//   function removeClassV2(object) {

//     const idx = school.findIndex(item => item.name === object.name)

//     school.splice(idx, 1)
// }

// createClass({name: 'test'})
// removeClassV2({name: 'test'})

  //Remove students

  function removeStudents(classID, studentID) {
    // delete school[classID].students[studentID]
    school[classID].students.splice(studentID-1, 1)
    console.log(school)
  }

  removeStudents(1, 1)
  console.log("-----------------")

//or

//   function removeStudent(object) {

//     const idx = school.findIndex(item => item.name === object.name) // find index of class

//     // find index of student in students array for the class found in previous line
//     const studentIdx = school[idx].students.findIndex(item => item.email === object.email)

//     school[idx].students.splice(studentIdx, 1)

// }

// removeStudent({
//     name: 'FbW2',
//     email: 'jon@yahoo.com'
// })

//Edit students

  function editStudent(classID, studentID, newName, newEmail, newCity){
    Object.keys(school[classID].students[studentID].name = newName,
                school[classID].students[studentID].email = newEmail,
                school[classID].students[studentID].city = newCity,);
    console.log(school);
  }

  editStudent(0, 1, "Ali", "ali@gmail.com", "London")
console.log(school[0])

//or

// function editStudent(object) {

//   const idx = school.findIndex(item => item.name === object.name) // find index of class

//   // find index of student in students array for the class found in previous line

//   if (idx === -1) return

//   const studentIdx = school[idx].students.findIndex(item => item.email === object.email)

//   if (studentIdx === -1) return

//   school[idx].students[studentIdx] = {...object.data}

// }
// console.log("🚀 ~ createClass ~ school", school[2].students)
// editStudent({
//   name: 'FbW3',
//   email: 'chris@test.com',

//   data: {
//       name: 'Chris 2',
//       email: 'chris@test.com',
//       city: 'Frankfurt'
//   }
// })

//Render Template

function renderSchoolTemplate() {

  let totalStudents = 0;

  console.log('School Classes: ')
  console.log('------------------')
  for (let i = 0; i < school.length; i++) {
      console.log(`${school[i].name} - (class ID: ${i + 1}):`)

      // totalStudents += school[i].students.length;

      for (j = 0; j < school[i].students.length; j++) {

          const name = school[i].students[j].name
          const email = school[i].students[j].email
          const city = school[i].students[j].city

          console.log(`${j + 1} - ${name}, ${email}, ${city} - (student ID: ${j + 1}).`);

          totalStudents++
      }

      console.log('******************************************** ')
  }
  console.log(` Total Classes ${school.length}, total students ${totalStudents}`);
}
renderSchoolTemplate()
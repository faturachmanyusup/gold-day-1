// REGULAR FUNCTION
function getFullName(person) {
  const fullname = person.firstName + ' ' + person.lastName;

  return fullname;
}

const firstPerson = {
  firstName: 'Gatot',
  lastName: 'Kaca',
  email: 'gatot.glass@email.com',
  birthDate: new Date(2000, 10, 22)
}

let fullname = getFullName(firstPerson);

console.log(fullname, '<<<< FULLNAME');
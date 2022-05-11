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


// ARROR FUNCTION
const tambah = (angka1, angka2) => {
  let hasil = angka1 + angka2;

  return hasil;
}

console.log(tambah(4, 5))

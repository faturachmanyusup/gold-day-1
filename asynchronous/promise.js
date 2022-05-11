const fs = require('fs');

const openFile = (content) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./example-file.txt', 'utf-8', (err, data) => {
      if (err) reject(err);

      resolve(data);
    })
  })
}

openFile('Halo from JS')
  .then((msg) => {
    console.log(msg, '<<<  Data');
  })
  .catch((err) => {
    console.log(err, '<<<< ERROR');
  })

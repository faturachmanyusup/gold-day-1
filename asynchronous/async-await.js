const fs = require('fs');

let text = '<<< text default';

const openFile = new Promise((resolve, reject) => {
  fs.readFile('./example-file.txt', 'utf-8', (err, data) => {
    if (err) reject(err);

    resolve(data);
  })
})
  .then((data) => text = data )
  .catch(err => {
    throw err;
  });

(async () => {
  await openFile();
  console.log(text);
})()
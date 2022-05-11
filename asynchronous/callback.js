const fs = require('fs');

let text = '<<< text default';

const openFile = () => {
  fs.readFile('./example-file.txt', 'utf-8', (err, data) => {
    if (err) reject(err);

    text = data;
  })
}

openFile();
console.log(text);
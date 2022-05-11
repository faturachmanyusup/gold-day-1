const fs = require('fs');

let text = '<<< text default';

/**
 * Issue terjadi karena proses fs.readFile belum selesai,
 * tapi program sudah lanjut ke line berikutnya.
 */
const openFile = () => {
  fs.readFile('./example-file.txt', 'utf-8', (err, data) => {
    if (err) reject(err);

    text = data;
  })
}

openFile();
console.log(text);

/**
 * Solusi
 * Buatkan parameter berupa function (callback),
 * agar action selanjutnya berjalan setelah proses async selesai.
 */
// const openFile = (callback) => {
//   fs.readFile('./example-file.txt', 'utf-8', (err, data) => {
//     if (err) reject(err);

//     text = data;
//     callback();
//   })
// }

// openFile(() => console.log(text));
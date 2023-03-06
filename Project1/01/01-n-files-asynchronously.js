/*
=======================
01-n-files-asynchronously.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const n = 10;	//input size 0 < n < 100
const output_dir = "./output";
const data = "data-1"
let written = 0; //counter

//solution with wrapper function
/*
for (let i = 0; i < n; i++) {
  let file = `${i.toString().padStart(2, "0")}-output.txt`;  //padstart(max length is 2 (01-99),0 is pad: 01 02 03 ... till 10, pad fill required length)
  let path = `${output_dir}/${file}`;
  write(path, file)

}

function write(path, file) {
  fs.writeFile(path, data, afterWrite);
  function afterWrite(err) {
    if (err) {
      throw err;
    }
    console.log(`Finished writing file ${file}`);
    written++;
    if (written >= n) {
      console.log(`Writing Complete`);
    }
  }
}
*/
//solution with arrow function

for (let i = 0; i < n; i++) {
  let file = `${i.toString().padStart(2, "0")}-output.txt`;  //padstart(max length is 2 (01-99),0 is pad: 01 02 03 ... till 10, pad fill required length)
  let path = `${output_dir}/${file}`;
  fs.writeFile(path, data, (err) => afterWrite(err,file));

}


  function afterWrite(err,file) {
    if (err) {
      throw err;
    }
    console.log(`Finished writing file ${file}`);
    written++;
    if (written >= n) {
      console.log(`Writing Complete`);
    }
  }


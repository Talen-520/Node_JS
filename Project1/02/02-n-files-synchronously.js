/*
=======================
02-n-files-synchronously.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const n = 10;	//input size 0 < n < 100
const output_dir = "./output";
const data = "data-2"


writeSync(1);

function writeSync(i){
    let file = `${i.toString().padStart(2, "0")}-output.txt`;  //padstart(max length is 2 (01-99),0 is pad: 01 02 03 ... till 10, pad fill required length)
    let path = `${output_dir}/${file}`;
    fs.writeFile(path,data,(err) => after_write(i,file));
}

function after_write(i,file){
    console.log(`finished writing: ${file}`);
    if(i == n){
        console.log("Writing complete");
    }
    else{
    writeSync(i + 1);
    }
}
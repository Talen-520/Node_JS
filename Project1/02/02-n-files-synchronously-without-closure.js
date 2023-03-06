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

let i = 1;
let file = `${i.toString().padStart(2, "0")}-output.txt`;  //padstart(max length is 2 (01-99),0 is pad: 01 02 03 ... till 10, pad fill required length)

writeSync();

function writeSync(){
    let path = `${output_dir}/${file}`;
    fs.writeFile(path,data,after_write);
}

function after_write(err){
    console.log(`finished writing: ${file}`);
    if(i == n){
        console.log("Writing complete");
    }
    else{
        i++;
        file = `${i.toString().padStart(2, "0")}-output.txt`;
    writeSync();
    }
}
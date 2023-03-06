/*
=======================
06-decode-the-secret-message.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const zlib = require("zlib");
const files_dir = "./input/";
const files = fs.readdirSync(files_dir);
const output_file = "./output/secret-message.zip"
const n = files.length;	//input size 0 < n < 100


let decompressed = 0;
const buffers = Array(n);
for(let i=0;i<n;i++){
    let path = `${files_dir}${files[i]}`;
    fs.readFile(path,null,(err,compressed_buffer)=>after_read(err,compressed_buffer,i));
}

function after_read(err,compressed_buffer,i){
    zlib.inflate(compressed_buffer,(err,buffer)=>after_decompress(err,buffer,i));
}

function after_decompress(err,buffer,i){
    decompressed++;
    buffers[i] = buffer;
    if(decompressed === n){
        fs.writeFile(output_file,Buffer.concat(buffers),()=>console.log("Finished writing"));
    }
    
}


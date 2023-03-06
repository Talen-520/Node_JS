/*
=======================
04-four-synchronous-tasks.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const dns = require("dns");
const zlib = require("zlib");
const input_file = "./input/domain.deflated";
const output_file = "./output/ip_address.txt";

fs.readFile(input_file,after_read);
function after_read(err,compressd_buffer){
    zlib.inflate(compressd_buffer,after_decompress)
}

function after_decompress(err,buffer){
    let domain = buffer.toString("utf8");
    dns.resolve(domain,(err,records)=> after_resolution(err,records,domain));
}
function after_resolution(err,records,domain){
    let results = `${records[0]} \t ${domain}`;
    fs.writeFile(output_file,results,() => console.log("writing compelete"))

}
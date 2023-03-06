/*
=======================
03-personal-hosts-file.js
=======================
Student ID:
Comment (Required):

=======================
*/
const fs = require("fs");
const dns = require("dns");
const input_file = "./input/domains.txt";
const output_file = "./output/hosts.txt";
let resolved = 0;


fs.readFile(input_file,"utf8",after_read);
function after_read(err,data){
    let domains = data.split("\r\n");
    let results = Array(domains.length);
    let resolved = {count: 0};
    
    for(let i=0;i<domains.length;i++){
        resolve(i,domains,results,resolved)
    }
}



function resolve(i,domains,results,resolved){
    let current_domain = domains[i];
    dns.resolve(domains[i],after_resolution);
    function after_resolution(err,records){
        resolved.count++;
        if (records && records.length > 0){
        results.push(`${records[0]} \t ${current_domain[i]}`);}
        if(resolved.count==domains.length){
            fs.writeFile(output_file,results.join("\r\n"), ()=> console.log("finished writing"));
        }
    }
}


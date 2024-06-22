
//way to take data from another file
// const data=require('./data');
// console.log(data.name);

// HOW TO CREATE ANOTHER FILE
const fs=require('fs');
fs.writeFileSync("heelo.js","jeetoge zaroor");
console.log(__dirname); //we can check directory
console.log(__filename);// we can check filename

// MAKING BASIC SERVER OUTPUT ON BROWSER

const http=require('http');
http.createServer((req,resp)=>{
    resp.write("hello this is amit");
    resp.end();
}).listen(4500);
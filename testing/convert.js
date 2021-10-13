//import fs from 'fs'
const fs = require("fs");



//minify the
var fileContents=fs.readFileSync('./composite.all.js').toString()

//the following regex expression removes all form of comments
fileContents=fileContents.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'').trim(); 
//the following regex expression removes spaces,tab, endline ec.
fileContents=fileContents.replace(/\s+/g, " ");   
//console.log(fileContents)


//var data = fs.readFileSync('./demo.js').toString()
fs.writeFile("./composite.full.min.js", fileContents, "UTF-8", function (err, data){})









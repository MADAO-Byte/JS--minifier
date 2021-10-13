/*An attempt to traverse all js files as a string and replace the variables name with keys*/
//bad approach 

const { ModuleDeclaration } = require('abstract-syntax-tree');
const fs = require('fs')
const map1 = new Map();

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}




//search
var data = fs.readFileSync('./demo.js').toString()
var pos=data.search(" var")
pos +=4
var string="";
for(let i=pos;data[i]!=' ' && data[i]!='=';i++)
    string+=data[i];

data=data.replace(string,key)
//console.log("out  "+string+"    ")
console.log(data)




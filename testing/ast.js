/* abstract-syntax-tree
We can use ast to determine identifiers
now we cant replace predefined identifiers
so we only remove the once we have declare,  
for that we use "variable declarator"
*/ 


// import pkg from 'abstract-syntax-tree';
// const {parse,find,replace,generate} = pkg;
// import fs from 'fs'
const fs = require("fs");
const { parse,find,replace,generate } = require('abstract-syntax-tree')
const key = require("./key")
console.log(key)

//we are replacing the big variable names with key(small names)
//import { updateKey } from './key.js';  

var sourceCode = fs.readFileSync('demo.js').toString() 

//creating a abstract syntax tree for the code
const tree = parse(sourceCode)  

//creating a set, it will be useful in mapping keys plus set only stores distinct values
var identifierset=new Set(); 

//checking a variableDeclarato ensures it user defined rather than inbuilt //find does as the name suggest

var yourArray=find(tree, 'VariableDeclarator')

//How to loop through an array containing objects and access their properties
yourArray.forEach(function (arrayItem) {
    var x = arrayItem.id.name;
    //adding variable names in a set
     identifierset.add(x);                    
});

//here we are mapping variable names with keys that will replace them
var mp=new Map();                           
identifierset.forEach (function(value){
    let keys=key.updateKey()
    mp.set(value,keys)
});

for(let x=0;x<10;x++)
{
    keys=key.updateKey()
    console.log(keys)
}



 //now all the variables name are replaced with there keys
replace(tree, node => {                     
    if (node.type === 'Identifier' && mp.has(node.name)) { 
        //ensures similar names in a string is not replaced
      node.name = mp.get(node.name)
    }
    return node
});

//to generate a js file using the modified ast tree
var varremover=generate(tree)                   
//console.log(varremover)
fs.writeFile("output.js",varremover , "UTF-8", function (err, data){})  //to create a js file

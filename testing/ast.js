/* abstract-syntax-tree
We can use ast to determine identifiers
now we cant replace predefined identifiers
so we only remove the once we have declare  
for that we use "variable declarator"
*/ 


//const { parse, find } = require('abstract-syntax-tree')
//const fs = require('fs')
import pkg from 'abstract-syntax-tree';
const {parse,find,replace,serialize} = pkg;
import fs from 'fs'

import { updateKey } from './key.js';

var sourceCode = fs.readFileSync('demo.js').toString()

const tree = parse(sourceCode)
//console.log(find(tree, 'VariableDeclarator')) 

var identifierset=new Set();
var yourArray=find(tree, 'VariableDeclarator')
yourArray.forEach(function (arrayItem) {//How to loop through an array containing objects and access their properties
    var x = arrayItem.id.name;
     identifierset.add(x);
});
var mp=new Map();
identifierset.forEach (function(value){
    let key=updateKey()
    mp.set(value,key)
});
//console.log(mp)

replace(tree, node => {
    if (node.type === 'Identifier' && mp.has(node.name)) {
      node.name = mp.get(node.name)
      console.log(node)
    //   var varremover=serialize(node)
    //   console.log(varremover)
    }
    //console.log(node)
    return node
    
});
//console.log(tree)
//var varremover=serialize(node1)
//console.log(varremover)
//fs.writeFile("chunky.js",varremover , "UTF-8", function (err, data){})

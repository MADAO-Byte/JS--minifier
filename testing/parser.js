//to parse the files
import ts from 'typescript'
import fs from 'fs'
import util from 'util'

// let sourceCode = `
// console.log("Hello, World!");
// `;

// // Parse the code.
// let tsSourceFile = ts.createSourceFile(
//   __filename,
//   sourceCode,
//   ts.ScriptTarget.Latest
// );
// tsSourceFile.statements;

var sourceCode = fs.readFileSync('demo.js').toString()
let tsSourceFile = ts.createSourceFile(
    __filename,
    sourceCode,
    ts.ScriptTarget.Latest
  );
  console.log(util.inspect(tsSourceFile.statements))

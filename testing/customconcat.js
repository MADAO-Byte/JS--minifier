/*This js file is used a custom way to cocat all the javascript files using a semicolon and craete a new concatenated js file
  Along with it in all replcases all sourcing of srcipts in index.html file with our new concatenated file*/
const fs = require("fs");
const path = require("path");

const __dirname = path.resolve()
//concatenation by simply adding all files and seprating it with a semicolon
var codes = fs.readdirSync('mysourcecode.site/js');
var fileContents=""
//var path=__dirname"mysourcecode.site\\js"
var paths = path.join(__dirname, '/mysourcecode.site/js');
for (let x = 0; x < codes.length; x++) {
    //console.log(codes[x]);
fileContents += fs.readFileSync(paths+'/'+codes[x]).toString()+";"
}



//to replace src tag in index.html with the concatenated minifier file
// var htmldata = fs.readFileSync('mysourcecode.site/index.html').toString()
// for (let x = 0; x < codes.length; x++) {
//     htmldata=htmldata.replace(codes[x],"composite.full.min.js")
//}
fs.writeFile("composite.full.min.js", fileContents, "UTF-8", function (err, data){})
console.log(typeof fileContents)

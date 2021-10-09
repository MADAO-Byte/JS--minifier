import fs from 'fs'


var codes = fs.readdirSync('mysourcecode.site/js');
var fileContents=""
var path="C:\\Users\\PC\\Desktop\\Phase-2\\testing\\mysourcecode.site\\js"
for (let x = 0; x < codes.length; x++) {
    //console.log(codes[x]);
fileContents += fs.readFileSync(path+'\\'+codes[x]).toString()+";"
}

//js1
//js2//
//var htm = fs.readdirSync('mysourcecode.site/index.html');
var htmldata = fs.readFileSync('mysourcecode.site/index.html').toString()
for (let x = 0; x < codes.length; x++) {
    htmldata=htmldata.replace(codes[x],"composite.full.min.js")
}
fs.writeFile("mysourcecode.site/index.html", htmldata, "UTF-8", function (err, data){})

//console.log(typeof fileContents)
//fileContents=fileContents.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'').trim(); //to remove comments
//fileContents=fileContents.replace(/\s+/g, " ");   //to remove space etc...
//console.log(fileContents)


//var data = fs.readFileSync('./demo.js').toString()
fs.writeFile(path +'\\'+"composite.full.min.js", fileContents, "UTF-8", function (err, data){})









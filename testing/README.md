# CUSTOM JS-MINIFIER

## PHASE-2

This is a cli tool to automatically download source code of the given URL and concatenate and minify its javascript file using a custom built minifier.</br>

This tools removes all the setra spaces,tabs,end lines, comments and even replaces large variable names with a small one making the code size samller.</br>

### Install grunt globally Using
` npm install -g grunt ` <br/>
` npm install -g grunt-cli `


### import modules from package.json file Using ###
` npm i `

### HOW TO USE THE CLI TOOL ###
* Run the tool using the command followed by the url of site :
 ` npm start --name='enter url here' `
 

* *Three new js files will be created*
* *Firstly : composite.all.js a file concatinating all js files will be created*
* *Secondly :compositye.full.min.js a file minifying the concatinated script by removing comments and extra spaces*
* *Thirdly :output.js a file further minifying the above minified by shortening variable names will be created*
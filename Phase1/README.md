# JS-MINIFIER

## PHASE-1

This is a cli tool to automatically download source code of the given URL and concatenate and minify its javascript file.

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
* *Secondly :compositye.all.min.js a file minifying the concatinated script using UGLIFY will be created*
* *Thirdly :tercompositye.all.min.js a file minifying  the concatinated script using TERSER will be created*
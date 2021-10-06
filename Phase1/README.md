# JS-MINIFIER

## PHASE-1

This is a cli tool to automatically download source code of the given URL and concatenate and minify its javascript file.

### Install grunt globally Using
` npm install -g grunt ` <br/>
` npm install -g grunt-cli `


### import modules from package.json file Using ###
` npm i `

### HOW TO USE THE CLI TOOL ###
* To set URL for the site to be downloaded, go to index.js and paste the URL in "const websiteUrl"
* Now run the tool using the command:
 ` npm start `

* *Three new js files will be created*
* *Firstly : composite.all.js a file concatinating all js files will be created*
* *Secondly :compositye.all.min.js a file minifying the concatinated script using UGLIFY will be created*
* *Secondly :tercompositye.all.min.js a file minifying  the concatinated script using TERSER will be created*
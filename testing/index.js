const fs = require("fs");
const {exec} = require('child_process')





// import fs from 'fs'
// // import rimraf from 'rimraf'
// import pkg from 'child_process';
// const {exec} = pkg;

// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

const dir = 'mysourcecode.site';

// delete directory recursively
  if (fs.existsSync(dir)){
    try {
      fs.rmdirSync(dir, { recursive: true });
  
      console.log(`${dir} is deleted!`);
  } catch (err) {
      console.error(`Error while deleting ${dir}.`);
  }
  }


//mysourcecode directory is created with source of given url
const websiteUrl = process.env.npm_config_name//url of site we want to minify
console.log(typeof websiteUrl)

//'https://statisticsbyjim.com/regression/interpret-r-squared-regression/'

  var directoryPath = "mysourcecode"
  exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,(err,stdout,stderr) =>{
    if(err){
      console.log(err)
    }
  })

  
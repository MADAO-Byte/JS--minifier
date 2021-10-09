import fs from 'fs'
//const {exec} = require('child_process')
import pkg from 'child_process';
const {exec} = pkg;

const websiteUrl = 'https://statisticsbyjim.com/regression/interpret-r-squared-regression/'  //url of site we want to minify

  var directoryPath = "mysourcecode"
  exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,(err,stdout,stderr) =>{
    if(err){
      console.log(err)
    }
  })

  
const fs = require("fs");
const {exec} = require('child_process')
const websiteUrl = 'https://gdscjiit.live/';

  var directoryPath = "mysourcecode"
  exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,(err,stdout,stderr) =>{
    if(err){
      console.log(err)
    }
  })

var codes = fs.readdirSync('mysourcecode.site/js');


/*var result = Object.keys(obj).map((key) => [ obj[key]]);
console.log(obj)*/


function readIt() {
  let combined = [];
  let doneCheck = [];
  let errVal = false;
  for (let x = 0; x < codes.length; x++) {
      doneCheck.push(false);
  }
  for (let x = 0; x < codes.length; x++) {
      fs.readFile(codes[x], "UTF-8", function (err, data) {
          if (err || !data) {
              console.log(codes[x]);
          } else {
              combined.push(data);
              doneCheck[x] = true;
          }
          if (x == (codes.length - 1)) {
              saveIt(combined, doneCheck);
          }
      });
  }
}
function saveIt(combined, doneCheck, round = 0) {
  let counter = 0;
  for (let x = 0; x < doneCheck.length; x++) {
      if (doneCheck[x] == false) {
          fs.readFile(codes[x], "UTF-8", function (err, data) {
              if (err || !data) {
                  console.log(codes[x]);
              } else {
                  combined.push(data);
                  doneCheck[x] = true;
              }
              if (x == (codes.length - 1)) {
                  return saveIt(combined, doneCheck, round);
              }
          });
      } else {
          counter++;
      }
  }
  if (counter < doneCheck.length) {
      return false;
  }
  let combined_string = "";
  for (let y = 0; y < combined.length; y++) {
      combined_string = combined_string + combined[y] + " ";
  }
  fs.writeFile('C:\Users\PC\Desktop\intern\bundle.js', combined_string, function (err) {
      if (err) {
          return readIt();
      }

      console.log("The file was saved!");
  });
}

readIt();
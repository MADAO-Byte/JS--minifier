var key;
let str = "a";
var counter=0
//export 
function updateKey()
{

   let key = "";
  var temp = counter;
  do{
    var val = String.fromCharCode(str.charCodeAt(0) + (temp % 26));
    key = val + key;
    temp = parseInt(temp / 26);
  }while(temp > 0);
  counter++
  return key
};

module.exports = { updateKey};

//to print out keys
// for(let x=0;x<10;x++)
// {
//     key=updateKey()
//     console.log(key)
// }
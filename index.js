var kittens = ["Milo","Otis","Garfield"] //define your array here
var name="Bob";
// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
  
}
function destructivelyPrependKitten(name){
  
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  var n= kittens.length-1;
  kittens.splice(n);
  return kittens;
  
}
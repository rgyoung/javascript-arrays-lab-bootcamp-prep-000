var kittens = ["Milo","Otis","Garfield"] //define your array here
var name="New Cat";
// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
  
}
function destructivelyprependKitten(name){
  
  kittens.shift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  var n= kittens.length-1;
  kittens.splice(0,n);
  return kittens;
  
}
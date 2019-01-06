var kittens = ["Milo","Otis","Garfield"] //define your array here
var name="Bob";
var newArray;
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
function destructivelyRemoveFirstKitten(name){
 kittens.shift(); 
 return kittens;
}
function removeFirstKitten(){
 newArray= kittens.shift();
  return newArray;
}
function appendKitten(name){
newArray= kittens.shift();
return newArray;

}

function 
function makeArray() {
  const array = [];
  const t = Math.floor(Math.random() * 10);

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.");
  }
  return [array, t];
}

function forLoop(array){
  var array1 = array[0];
  var t = array[1];
  
  for(let i=t; i<t+25; i++){
    array1[i] = "I am " + (i+1) +" strange loop" + (i===0 ? "." : "s.");
  }

  for(var i=0; i<array1.length; i++){
    console.log(array1[i]);
  }

  return array1;
}

var parray = makeArray();
var karray = forLoop(parray);
//console.log(karray);



function whileLoop(n){
  while(n>0) {
    console.log(n);
    n-=1;
  }
  return "done";
}

const n = Math.floor(Math.random() * 100)
console.log(whileLoop(n));


function maybeTrue(){
  return Math.random() >= 0.5;
}

function doWhileLoop(array1){
  do {
    array1.shift();
  } while(array1.length >0 && maybeTrue());
  return array1;
}

var karray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
doWhileLoop(karray);
console.log(karray);





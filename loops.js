function forLoop(array){
  for(let a = 0; a < 25; a++){
    array.push("I am "+a+" strange loop"+(a === 0 ? "" : "s"));
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return 'done';
}

function doWhileLoop(array){
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}

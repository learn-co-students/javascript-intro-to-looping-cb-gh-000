function maybeTrue() {
  return Math.random() >= 0.5;
}

function forLoop (array){
  for (let i = 0; i < 25; i++)
    array.push(`I am ${i} strange loops.`);
  return array;
  }

function whileLoop (nb){
  if (nb >= 0)
    while (nb > 0){
      console.log(nb);
      nb--;
    }
  else {
    while (nb < 0){
      console.log(nb);
      nb++;
    }
  }
  return "done";
}

function doWhileLoop(array){
  do {
    array.shift()
  } while (maybeTrue() || array.length !== 0);
  return array;
}

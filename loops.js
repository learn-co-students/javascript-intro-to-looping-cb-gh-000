function forLoop(array){
  for(let i = 1; i < 25; i++){
    array.push("I am ${i} strange loop.")
  }
}

function whileLoop(number){
  while(number > 0){
    console.log(number)
    number -= 1;
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
  } while(maybeTrue() && array.length > 0)
  return array
}

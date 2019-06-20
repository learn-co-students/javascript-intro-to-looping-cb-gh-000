var forLoop = (array) => {
  for(var i =0; i<25;i++){
    array.push("I am ${i} strange loop.")

  }
  return array
}

var whileLoop = (n) => {
  while(n>0){
  console.log(--n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

var doWhileLoop = (array) =>{
  do{
    array.pop()
  }while(array.length > 0 && maybeTrue())
return array
}

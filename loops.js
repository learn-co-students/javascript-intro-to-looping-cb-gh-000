function forLoop(array){
  for (var i = 1; i < 26; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(n){
  while (n > 0) {
    console.log(--n)
}

function doWhileLoop(array){
  function maybeTrue(){
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}

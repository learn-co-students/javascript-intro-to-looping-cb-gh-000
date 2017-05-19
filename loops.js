function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}`)
  }
  return array
}

function whileLoop(number) {
  console.log(number)
   return number === 1 ? 'done' : whileLoop(number - 1)
}

function maybeTrue() {
   return Math.random >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}

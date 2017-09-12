var forLoop = (array) => {
  for (let i = 0; i<25; i++) {
    console.log(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
}

var whileLoop = (n) => {
  while (n>=0) {
    console.log(n--)
  }
}

var doWhileLoop = (array) => {
  do array.shift()
  while (array.length > 0)
}

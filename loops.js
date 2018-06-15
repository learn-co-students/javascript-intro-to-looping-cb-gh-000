function forLoop(array) {
  
  array.push('I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.')
  
}

function whileLoop(n) {
  
  while(n--) {
    console.log(n)
  }
  return 'done'
  
}

function doWhileLoop(array) {
  
  do {
    array.pop()
  }while(array.length > 0);
  
}

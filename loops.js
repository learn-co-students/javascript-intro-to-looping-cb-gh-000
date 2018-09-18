var forLoop = array => {
  for (let x = 0; x < 25; x++) {
    array.push(`I am ${x} strange loop${x === 0 || x === 24 ? 's' : ''}.`);
  }
  return array
}

var whileLoop = n => {
  while (n != 0) {
    console.log(n);
    n--;
  }
  return 'done'
}

var doWhileLoop = array => {
  do {
    array.pop();
  } while (array.length != 0)
  return array
}

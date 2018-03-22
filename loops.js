function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    let string = i === 0 ? 'I am 1 strange loop.' : `I am ${i} strange loops.`;

    array.push(string);
  }

  console.log(array);
  return array;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }

  return 'done';
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());

  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

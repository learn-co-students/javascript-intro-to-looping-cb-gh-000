function whileLoop(num) {
  while (num != 0) {
    console.log(num)
    num--
  }
  return 'done'
}

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i == 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  while (maybeTrue() && array.length > 0) {
    console.log("And I ran; I ran so far away!");
    array.pop()
  }
  return array
}

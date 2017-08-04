function forLoop(arr){
  for (var i=0; i<25; i++){
    if (i===1){
      arr.push("I am 1 strange loop.");
      console.log(arr[1]);
    }
    else {
      arr.push(`I am ${i} strange loops.`);
      console.log(arr[i]);
    }
  }
  return arr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
}

function doWhileLoop(arr) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
      arr.pop();
    } while (arr.length > 0 && maybeTrue());
  return arr;
}

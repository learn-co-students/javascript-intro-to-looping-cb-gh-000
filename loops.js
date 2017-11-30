function maybeTrue() {
   return Math.random() >= 0.5
}

var forLoop = newArray => {
  var data;
  for (var i = 0; i < 25; i++) {
    data += `"I am ${i} strange loop ${i === 0 ? '' : 's'}."`;

    newArray.push(data);
  }
  return newArray;
}

var whileLoop = n => {
    while( n != 0){
      console.log(n);
      n -= 1;
    }
  return 'done';
}

var doWhileLoop = new_array => {
  do {
    new_array.pop();
  } while (new_array.length > 0 && maybeTrue());
  return new_array;
}

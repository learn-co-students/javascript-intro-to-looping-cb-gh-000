function forLoop(array) {
  for(var i=0; i<25; i++)
    array.push(`I am ${i} strange loop.`);
  return array;
}

function whileLoop(num) {
  while(num)
   num--;
  return 'done';
}

function doWhileLoop(array) {
  do
    array.pop();
  while(array.length > 0 && maybeTrue());
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

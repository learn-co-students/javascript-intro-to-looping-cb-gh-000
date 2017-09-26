
function forLoop(array){

  for(var i = 0; i < 25; i++){

    if(i == 0){
      array.push(`I am ${i} strange loop.`)
    }else {
      array.push(`I am ${i} strange loops.`)
    }

  //  console.log(array)
  }
  return array
}

function whileLoop(n){
  while(n > 0){
    console.log(--n)
  }
  return 'done'
}
function doWhileLoop(array){

  do {
      array.shift()
      return array
  } while (array.length > 0 || maybeTrue() == true );
}

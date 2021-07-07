function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i == 1){
      array.push("I am 1 strange loop.");
    }
    else{
      array.push('I am ' + i + " strange loops.");
    }
  }
  return array;
}

function whileLoop(n){
  while (n > 0){
    console.log(n--);
    }
  return "done";
}

function doWhileLoop(integer){
  var i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {
    console.log("doo-bee-doo-bee-doo");
  } while (incrementVariable() < integer);
}

function forLoop(list){
  for (let i = 0; i < 25; i++){
    if (i==1){
      list.push("I am 1 strange loop.");
    }else{
      list.push(`I am ${i} strange loops`);
    }
  }
  return list
}
function whileLoop(number){
  while (number >= 0){
    console.log(number)
    number--
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop()
  }while(array.length > 0 && maybeTrue())
  return array
}

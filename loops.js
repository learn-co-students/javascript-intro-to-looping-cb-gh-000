function forLoop (array){
  for(int i=0;i<24;i++){
    if (i===1)
    array.push("I am 1 strange loop.");
    else 
    array.push(`I am ${i} strange loops.`);
  }
  return arr;
}

function whileLoop(number){
  while(number>0){
    console.log(--countdown);
  }
  return 'done'
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(arr){
  do{
    arr.pop();
  }while (array.length > 0 && maybeTrue()) ;
    return arr;
  
  
}
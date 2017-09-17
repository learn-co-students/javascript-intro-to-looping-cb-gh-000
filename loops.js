
function forLoop(array){
  for(var i=1; i<=array.length; i++){
   array = array + `"I am ${i} strange loop${i === 0 ? '' : 's'}."`;
  }

}
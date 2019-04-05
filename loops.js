function forLoop(array){
  for(var i=0;i<25;i++){
    array.push(`I am ${i} strange loop${i==1?'':'s'}.`)
  }
  return array
}
function whileLoop(number){
  while(number>0){
    console.log(number);
    --number;
  }
  return "done";
}
var i=0;
function incrementVariable(){
  i=i+1;
  return i;
}
function doWhileLoop(number){
    do{
      console.log("I run once regardless");
    }while(incrementVariable()<=number)
}

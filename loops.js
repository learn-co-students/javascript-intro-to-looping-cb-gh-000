function forLoop(arr)
{
  for(var i=0;i<25;i++)
  {
    if(i==1)
    arr.push("I am 1 strange loop.");
    else
    arr.push(`I am ${i} strange loops.`); 
    //console.log(arr[i]);
  }
  return arr;
}

function doWhileLoop(arr)
{
  var i=0;
function incrementVariable() 
{
  i = i + 1;
}
  do
  {
    arr.pop();
   // console.log(arr[i]);
  }while(arr.length>0 || incrementVariable());
return arr;
  
}

function whileLoop(n)
{
  
  while(n--)
  {
    console.log(n);
  }
  return "done";
}
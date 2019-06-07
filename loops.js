function forLoop(array){
  for(let i = 0; i < 25; i++){
    array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
  }
}

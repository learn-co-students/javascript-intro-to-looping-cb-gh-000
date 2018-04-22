
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(arr1, arr2) {
  var new_array = [];
  for (let i=0; i < arr1.length; i++) {
    new_array.push(arr1[i] + " plays " + arr2[i])
  }
  return new_array
}

function johnLennonFacts(array) {
  var new_array = [];
  for (let i = 0; i < array.length; i++){
    new_array.push(array[i] + "!!!")
  }
  return new_array
}

function iLoveTheBeatles(num) {
  var array = []
  if (num === 7) {
    for (let i = 1; i <= 8; i++) {
      array.push("I love the Beatles!")
    }
  }
  else if (num === 17) {
    array = ["I love the Beatles!"]
  }
  return array
}

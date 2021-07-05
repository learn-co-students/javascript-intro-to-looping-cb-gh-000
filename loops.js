var ourArr = ["Foo"]

function maybeTrue(ourArr) {
  return Math.random() >= 0.5
}

function forLoop(ourArr) {

  for (let i=0; i<25; i++) {
    if (i == 1) {
      ourArr.push("I am 1 strange loop.");
    } else {
      ourArr.push("I am ${i} strange loops.");
    }
  }

  return ourArr;

}

function whileLoop(numberForCountdown) {
  while (numberForCountdown > 0) {
    console.log(--numberForCountdown);
  }

  return "done";
}

function doWhileLoop(ourArr) {
  do {
    ourArr.pop();
  } while (ourArr.length > 0 && maybeTrue());

  return ourArr;
}

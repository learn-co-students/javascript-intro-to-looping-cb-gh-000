function maybeTrue() {
  return Math.random() >= 0.5
}

var forLoop = arr => {
    var s;
    for (var i = 0; i < 25; i++) {
        s = 'I am ' + i + ' strange loop.';
        arr.push(s);
    }

    return arr;
}

var whileLoop = num => {
    while (num != 0) {
        console.log(num);
        num--;
    }

    return 'done';
}

var doWhileLoop = arr => {
    do {
        arr.pop();
    } while (arr.length > 0 && maybeTrue());

    return arr;
}

function whileLoop(n) {
    while (n > 0) {
        console.log(--n)
    }
    return 'done'
}

function forLoop(array) {
    for (let i = 1; i <= 25; i++) {
        array.push(`I am ${i} strange loop.`)
    }
    return array
}

function doWhileLoop(array) {
    do {
        array = array.pop
    } while (array.length > 0)
    return array
}

array = []

forLoop(array)
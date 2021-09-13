function add(x, y) {
    return x + y;
}

add(3,4);

function subtract(x, y) {
    return x - y;
}

subtract(5, 3);

function multiply(x, y) {
    return x * y;
}

multiply(4, 5);

function divide(x , y) {
    return x / y;
}

divide(20, 5);

function increment(n) {
    n++
    return n;
}

increment(367);

function decrement(n) {
    n--
    return n;
}

decrement(367);

function makeInt(n) {
    n = parseInt(n, 10)
    return n;
}

makeInt(8.567);

function preserveDecimal(n) {
    n = parseFloat(n)
    return n;
}

preserveDecimal(3.5678);
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciDiccionario(n, dicc = {}) {
    if (n in dicc) {
        return dicc[n];
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    dicc[n] = fibonacciDiccionario(n - 1, dicc) + fibonacciDiccionario(n - 2, dicc);
    return dicc[n];
}

function fibonacciArray(n, array) {
    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (array[n] !== -1) {
        return array[n];
    }

    array[n] = fibonacciArray(n - 1, array) + fibonacciArray(n - 2, array);
    return array[n];
}

let n = 25
console.log(`El Fibonacci de ${n} es ${fibonacci(n)}`);

let m = 25;
let dicc = {};
console.log(`El Fibonacci de ${m} con dicc es ${fibonacciDiccionario(m, dicc)}`);

let l = 25;
let array = new Array(l + 1).fill(-1);
console.log(`El Fibonacci de ${l} con array es ${fibonacciArray(l, array)}`);

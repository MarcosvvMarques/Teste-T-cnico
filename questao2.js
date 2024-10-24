function isFibonacci(num) {
    let a = 0,
        b = 1,
        temp;

    if (num === 0 || num === 1) {
        return true;
    }

    while (b < num) {
        temp = b;
        b = a + b;
        a = temp;
    }

    return b === num;
}

let numeroParaChecar = 21;

if (isFibonacci(numeroParaChecar)) {
    console.log(`${numeroParaChecar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroParaChecar} NÃO pertence à sequência de Fibonacci.`);
}

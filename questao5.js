let str = "Distribuidora";

function inverterString(string) {
    let stringInvertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }

    return stringInvertida;
}

// aqui eu estou chamando a função e exibindo o resultado
let resultado = inverterString(str);
console.log(`String original: ${str}`);
console.log(`String invertida: ${resultado}`);

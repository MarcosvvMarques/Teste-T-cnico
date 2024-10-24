const faturamentoDiario = [
    { dia: 1, valor: 10500.0 },
    { dia: 2, valor: 8000.0 },
    { dia: 3, valor: 9200.0 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 14500.0 },
    { dia: 7, valor: 0.0 },
    { dia: 8, valor: 19000.0 },
    { dia: 9, valor: 3000.0 },
    { dia: 10, valor: 17500.0 },
    { dia: 11, valor: 6000.0 },
    { dia: 12, valor: 0.0 },
    { dia: 13, valor: 8500.0 },
    { dia: 14, valor: 0.0 },
    { dia: 15, valor: 11000.0 },
];

function calcularFaturamento(faturamento) {
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let soma = 0;
    let diasComFaturamento = 0;

    const diasValidos = faturamento.filter((dia) => dia.valor > 0);

    diasValidos.forEach((dia) => {
        if (dia.valor < menorValor) menorValor = dia.valor;
        if (dia.valor > maiorValor) maiorValor = dia.valor;
        soma += dia.valor;
        diasComFaturamento++;
    });

    const mediaMensal = soma / diasComFaturamento;

    const diasAcimaDaMedia = diasValidos.filter(
        (dia) => dia.valor > mediaMensal
    ).length;

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaDaMedia: diasAcimaDaMedia,
        mediaMensal: mediaMensal,
    };
}

const resultado = calcularFaturamento(faturamentoDiario);
console.log(
    `Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`
);
console.log(
    `Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`
);
console.log(
    `Número de dias com faturamento superior à média: ${resultado.diasAcimaDaMedia}`
);
console.log(
    `Média mensal de faturamento: R$ ${resultado.mediaMensal.toFixed(2)}`
);

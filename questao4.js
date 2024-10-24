// Faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

// Calcula o valor total de faturamento
const totalFaturamento =
    faturamento.SP +
    faturamento.RJ +
    faturamento.MG +
    faturamento.ES +
    faturamento.Outros;

// Função para calcular o percentual de cada estado
function calcularPercentual(estadoFaturamento, total) {
    return (estadoFaturamento / total) * 100;
}

// Exibindo os percentuais de cada estado
console.log(
    `Percentual de SP: ${calcularPercentual(
        faturamento.SP,
        totalFaturamento
    ).toFixed(2)}%`
);
console.log(
    `Percentual de RJ: ${calcularPercentual(
        faturamento.RJ,
        totalFaturamento
    ).toFixed(2)}%`
);
console.log(
    `Percentual de MG: ${calcularPercentual(
        faturamento.MG,
        totalFaturamento
    ).toFixed(2)}%`
);
console.log(
    `Percentual de ES: ${calcularPercentual(
        faturamento.ES,
        totalFaturamento
    ).toFixed(2)}%`
);
console.log(
    `Percentual de Outros: ${calcularPercentual(
        faturamento.Outros,
        totalFaturamento
    ).toFixed(2)}%`
);

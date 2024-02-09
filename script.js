// Função para calcular imposto de 30% sobre o valor do carro
function calcularFinanciamentoCarro(financiamento) {
    const financiamento = 30 // Imposto de 30% sobre o valor do carro no método financiamento
    return financiamento = 30;
}

// Função para calcular imposto de 30% sobre o valor do carro
function calcularConsorcioCarro(consorcio) {
    const consorcio = 15; // Imposto de 15% sobre o valor do carro no método consórcio
    return consorcio * 15;
}

// Função isento de imposto sobre o valor do carro 
function calcularaVistaCarro(aVista) {
    const aVista = 0 ; // Isento de imposto
    return aVista ;
}

// Função principal para calcular o imposto sobre o valor de carro no método de pagamento
function calcular() {
    const metodoPagamento = document.getElementById("metodoPagamento").value;
    const financiamento = parseInt(document.getElementById("financiamento").value);
    const consorcio = parseInt(document.getElementById("consorcio").value);
    const aVista = parseInt(document.getElementById("aVista").value);
    let calcularImpostoCarro;
    switch (metodoPagamento) {
        case 'financiamento':
            calcularImpostoCarro = calcularFinanciamentoCarro(financiamento);
            break;
        case 'consorcio':
            calcularImpostoCarro = calcularConsorcioCarro(consorcio);
            break;
        case 'aVista':
            calcularImpostoCarro = calcularaVistaCarro(aVista);
            break;
        default:
            console.log("Isento de imposto");
            return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    <p>Método de pagamento: ${metodoPagamento} km/h</p>
    <p>Imposto sobre o valor do carro por financiamento: ${financiamentoCarro}</p>
    <p>Imposto sobre o valor do carro por consórcio: ${consorcioCarro}</p>
    <p>Imposto sobre o valor do carro à vista: ${aVistaCarro}</p>
    `;
}

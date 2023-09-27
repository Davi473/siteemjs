function arredondar (valor) {
    return Math.round(valor*100)/100;
}

function formataDinheiro (valor) {
    return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency"}).format(valor)
}
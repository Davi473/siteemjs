class lançamento { // class
            
    constructor (categoria, tipo, valor) {
        if (tipo !== "receita" && tipo !== "despesa") {
            throw new Error("Lançamento Inválido: Tipo deve ser receita ou despesa")
        }
        if (valor <= 0) {
            throw new Error("Lançamento Inválido: Valor deve ser maior que zero")
        }
        if (categoria === "") {
            throw new Error("Lançamento Inválido: A Categoria é obrigatória") // lançamento de erro
        }
        this.categoria = categoria
        this.tipo = tipo
        this.valor = valor
    }
}

function arredondar (valor) {
    return Math.round(valor*100)/100
}

function calcularJuros (valor) {
    juros = arredondar(valor * 0.10)
    return juros
}

function calcularRendimentos (valor) {
    rendimento = arredondar(valor * 0.005)
    return rendimento
}

function distribuirDespesas (lançamentos, total) {
    distribuicaoDeDespesas = []
    for (lancamento of lançamentos) {
        if (lancamento.tipo === "despesa") {
            percentual = arredondar((lancamento.valor/total)*100)
            console.log(lancamento.categoria, percentual)
            distribuicaoDeDespesas.push({categoria: lancamento.categoria, percentual: percentual})
        }
    }
    return distribuicaoDeDespesas
}

function calcularSaldo (mes, saldoInicial, lançamentos) {
    console.log(mes)
    totalizadorDoMes = { saldo: 0, saldoInicial, juros: 0, rendimento: 0, receita: 0, despesas: 0, distribuicaoDeDespesas: []}
    totalizadorDoMes.saldo = saldoInicial 
    for (lancamento of lançamentos) {
        if (lancamento.tipo === "receita") {
            totalizadorDoMes.saldo += lancamento.valor
            totalizadorDoMes.receita += lancamento.valor
        } 
        if (lancamento.tipo === "despesa") {
            totalizadorDoMes.saldo -= lancamento.valor
            totalizadorDoMes.despesas += lancamento.valor
        }
    }
    totalizadorDoMes.distribuicaoDeDespesas = distribuirDespesas(lançamentos, totalizadorDoMes.despesas)
    console.log(totalizadorDoMes.despesas)
    estaNegativo = totalizadorDoMes.saldo < 0
    if (estaNegativo) {
        totalizadorDoMes.juros = calcularJuros(totalizadorDoMes.saldo)
        totalizadorDoMes.saldo = arredondar(totalizadorDoMes.saldo + juros)
    } else {
        totalizadorDoMes.rendimento = calcularRendimentos(totalizadorDoMes.saldo)
        totalizadorDoMes.saldo = arredondar(totalizadorDoMes.saldo + rendimento)
    }
    return totalizadorDoMes
}

saldoInicial = 0
lançamentosJaneiro = [
    new lançamento("Salário", "receita", 3000),
    new lançamento("Aluguel", "despesa", 1000),
    new lançamento("Conta de Luz", "despesa", 200),
    new lançamento("Conta de Água", "despesa", 100),
    new lançamento("Internet", "despesa", 100),
    new lançamento("Transporte", "despesa", 300),
    new lançamento("Lazer", "despesa", 300),
    new lançamento("Alimentação", "despesa", 500),
    new lançamento("Condomínio", "despesa", 300),
    new lançamento("Farmácia", "despesa", 100)
]
totalizadorDoMes1 = calcularSaldo("Janeiro", saldoInicial, lançamentosJaneiro)
console.log(totalizadorDoMes1)
lançamentosFevereiro = [
    new lançamento("Salário", "receita", 3000),
    new lançamento("Aluguel", "despesa", 1200),
    new lançamento("Conta de Luz", "despesa", 250),
    new lançamento("Conta de Água", "despesa", 100),
    new lançamento("Internet", "despesa", 100),
    new lançamento("Transporte", "despesa", 500),
    //new lançamento("Lazer", "despesa", 0),
    new lançamento("Alimentação", "despesa", 1000),
    new lançamento("Condomínio", "despesa", 400),
    //new lançamento("Farmácia", "despesa", 0)
]
totalizadorDoMes2 = calcularSaldo("Fevereiro", totalizadorDoMes1.saldo, lançamentosFevereiro)
console.log(totalizadorDoMes2)
lançamentosMarço = [
    new lançamento("Salário", "receita", 4000),
    new lançamento("Aluguel", "despesa", 1200),
    new lançamento("Conta de Luz", "despesa", 200),
    new lançamento("Conta de Água", "despesa", 100),
    new lançamento("Internet", "despesa", 200),
    new lançamento("Transporte", "despesa", 500),
    new lançamento("Lazer", "despesa", 800),
    new lançamento("Alimentação", "despesa", 1000),
    new lançamento("Condomínio", "despesa", 400),
    //new lançamento("Farmácia", "despesa", 0)
]
saldo3 = calcularSaldo("Março", totalizadorDoMes2.saldo, lançamentosMarço)
console.log(saldo3)
acumuladoAno = saldo3.saldo
console.log("Ano")
console.log(acumuladoAno)
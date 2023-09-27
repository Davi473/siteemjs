class Lancamento {

    constructor (categoria, tipo, valor) {
        if (tipo !== "receita" && tipo !== "despesas") {
            throw new Error("O Tipo só pode receber Despesas ou Receita")
        }
        if (categoria === "" && categoria === " ") {
            throw new Error("A categoria n Pode fica sem valor")
        }
        if (valor < 0) {
            throw new Error("O valor n pode ser negativo")
        }
    this.categoria = categoria
    this.valor = valor
    this.tipo = tipo
    }
}
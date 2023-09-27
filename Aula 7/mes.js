class Mes {

    constructor (nome, saldoInicial) {
        if (nome === "") throw new Error("Mês Inválido: O nome é obrigatório");
        this.nome = nome;
        this.saldoInicial = saldoInicial;
        this.totalizador = { saldo: 0, saldoInicial, juro: 0, rendimento: 0, receita: 0, despesas: 0, distribuicaoDeDespesas: []};
        this.lancamentos = [];
    }
    
    adicionarLancamento (lancamento) {
        this.lancamentos.push(lancamento);
    }

    calcularSaldo () {
        this.totalizador.saldo = this.saldoInicial;
        this.apurarReceitas();
        this.apuaraDespesas();
        this.distribuirDespesas();
        this.apurarJuros();
        this.apurarRendimento();
    }

    apurarReceitas () {
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "receita") {
                this.totalizador.saldo += lancamento.valor;
                this.totalizador.receita += lancamento.valor;
            } 
        }
    }
    
    apuaraDespesas () {
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                this.totalizador.saldo -= lancamento.valor;
                this.totalizador.despesas += lancamento.valor;
            }
        }
    }

    distribuirDespesas () {
        const distribuicaoDeDespesas = []
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                const percentual = arredondar((lancamento.valor/this.totalizador.despesas)*100);
                distribuicaoDeDespesas.push({categoria: lancamento.categoria, percentual: percentual});
            }
        }
        this.totalizador.distribuicaoDeDespesas = distribuicaoDeDespesas
    }

    apurarJuros () {
        if (this.totalizador.saldo < 0) {
            this.totalizador.juro = this.calcularJuros(this.totalizador.saldo);
            this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.juro);
        } 
    }

    calcularJuros (valor) {
        const juros = arredondar(valor * 0.10);
        return juros
    }

    apurarRendimento () {
        if (this.totalizador.saldo > 0) {
            this.totalizador.rendimento = this.calcularRendimentos(this.totalizador.saldo);
            this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.rendimento);
        }
    }

    calcularRendimentos (valor) {
        const rendimento = arredondar(valor * 0.005);
        return rendimento
    }
}
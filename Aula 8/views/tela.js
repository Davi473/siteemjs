class Tela {
    
    constructor() {
        const janeiro =  new Mes("Janeiro");
        janeiro.adicionarLancamento(new lançamento("Salário", "receita", 3000));
        janeiro.adicionarLancamento(new lançamento("Aluguel", "despesa", 1000));
        janeiro.adicionarLancamento(new lançamento("Conta de Luz", "despesa", 200));
        janeiro.adicionarLancamento(new lançamento("Conta de Água", "despesa", 100));
        janeiro.adicionarLancamento(new lançamento("Internet", "despesa", 100));
        const fevereiro = new Mes("Fevereiro");
        fevereiro.adicionarLancamento(new lançamento("Salário", "receita", 3000));
        fevereiro.adicionarLancamento(new lançamento("Aluguel", "despesa", 1200));
        fevereiro.adicionarLancamento(new lançamento("Conta de Luz", "despesa", 250));
        fevereiro.adicionarLancamento(new lançamento("Conta de Água", "despesa", 100));
        fevereiro.adicionarLancamento(new lançamento("Internet", "despesa", 100));
        const marco = new Mes("Março");
        marco.adicionarLancamento(new lançamento("Salário", "receita", 4000));
        marco.adicionarLancamento(new lançamento("Aluguel", "despesa", 1200));
        marco.adicionarLancamento(new lançamento("Conta de Luz", "despesa", 200));
        marco.adicionarLancamento(new lançamento("Conta de Água", "despesa", 100));
        marco.adicionarLancamento(new lançamento("Internet", "despesa", 200));
        const abril = new Mes("Abril")
        abril.adicionarLancamento(new lançamento("Salário","receita", 4000))
        const ano = new Ano();
        ano.adicionarMes(janeiro);
        ano.adicionarMes(fevereiro);
        ano.adicionarMes(marco);
        ano.adicionarMes(abril);
        ano.calcularSaldo();
        this.ano = ano;
    }

    
    formataDinheiro (valor) {
        return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency"}).format(valor)
    }

    adicionarLancamento () {
        const mes = document.getElementById("mes");
        const categoria = document.getElementById("categoria");
        const tipo = document.getElementById("tipo");
        const valor = document.getElementById("valor");
        this.ano.adicionarLancamento(mes.value, new lançamento(categoria.value, tipo.value, parseFloat(valor.value)));
        this.ano.calcularSaldo();
        this.renderizar();
        mes.value = this.ano.meses[0].nome;
        tipo.value = "receita";
        categoria.value = "";
        valor.value = "";
    }

    renderizar () {
        document.getElementById("app").remove();
        const app = new Div("app");
        const titulo = new h4("Finanças Pessoais");
        app.adicionarElementoFilho(titulo.element);
        const form = new Div("form-lancamento");
        const mesSelect = new Selection("mes");
        for (const mes of this.ano.meses) {
            mesSelect.addOption(mes.nome);
        }
        const tipoSelect = new Selection("tipo");
        tipoSelect.addOption("receita");
        tipoSelect.addOption("despesa");
        const categoriaInputText = new Input("categoria", "text", "Categoria");
        const valorInputNumber = new Input("valor", "number", "Valor");
        const adicionarButton = new Button("botao", "Adicionar")
        adicionarButton.addListener(() => { // forma de fazer if
            this.adicionarLancamento();
        });
        form.adicionarElementoFilho(mesSelect.element)
        form.adicionarElementoFilho(tipoSelect.element)
        form.adicionarElementoFilho(categoriaInputText.element)
        form.adicionarElementoFilho(valorInputNumber.element)
        form.adicionarElementoFilho(adicionarButton.element)
        app.adicionarElementoFilho(form.element);
    
    
    
        const grafico = new Grafico();
        for (const mes of this.ano.meses) {
            grafico.adicionarColuna(mes.totalizador.saldo, mes.nome);
        }
        app.adicionarElementoFilho(grafico.element);
        for (const mes of this.ano.meses) {
            const nomeDoMes = new h4(mes.nome);
            app.adicionarElementoFilho(nomeDoMes.element);
            const tabelaLancamentos = new Tabela("tabela-lancamentos");
            tabelaLancamentos.addRow("th", ["Categoria", "Valor"]);
            for (const lancamento of mes.lancamentos) {
                tabelaLancamentos.addRow("td", [lancamento.categoria, this.formataDinheiro(lancamento.getValorString())]);
            }
            tabelaLancamentos.addRow("th", ["Juros", this.formataDinheiro(mes.totalizador.juro)]);
            tabelaLancamentos.addRow("th", ["Rendimento", this.formataDinheiro(mes.totalizador.rendimento)]);
            tabelaLancamentos.addRow("th", ["Total", this.formataDinheiro(mes.totalizador.saldo)]);
            app.adicionarElementoFilho(tabelaLancamentos.element);
        }
        const [body] = document.getElementsByTagName("body");
        body.appendChild(app.element)
    }
}
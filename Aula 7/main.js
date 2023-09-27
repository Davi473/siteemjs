
const saldoInicial = 0
const janeiro =  new Mes("Janeiro");
janeiro.adicionarLancamento(new lançamento("Salário", "receita", 3000));
janeiro.adicionarLancamento(new lançamento("Aluguel", "despesa", 1000));
janeiro.adicionarLancamento(new lançamento("Conta de Luz", "despesa", 200));
janeiro.adicionarLancamento(new lançamento("Conta de Água", "despesa", 100));
janeiro.adicionarLancamento(new lançamento("Internet", "despesa", 100));
janeiro.adicionarLancamento(new lançamento("Transporte", "despesa", 300));
janeiro.adicionarLancamento(new lançamento("Lazer", "despesa", 300));
janeiro.adicionarLancamento(new lançamento("Alimentação", "despesa", 500));
janeiro.adicionarLancamento(new lançamento("Condomínio", "despesa", 300));
janeiro.adicionarLancamento(new lançamento("Farmácia", "despesa", 100));

const fevereiro = new Mes("Fevereiro");
fevereiro.adicionarLancamento(new lançamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new lançamento("Aluguel", "despesa", 1200));
fevereiro.adicionarLancamento(new lançamento("Conta de Luz", "despesa", 250));
fevereiro.adicionarLancamento(new lançamento("Conta de Água", "despesa", 100));
fevereiro.adicionarLancamento(new lançamento("Internet", "despesa", 100));
fevereiro.adicionarLancamento(new lançamento("Transporte", "despesa", 500));
//fevereiro.adicionarLancamento(new lançamento("Lazer", "despesa", 0))
fevereiro.adicionarLancamento(new lançamento("Alimentação", "despesa", 1000));
fevereiro.adicionarLancamento(new lançamento("Condomínio", "despesa", 400));
//fevereiro.adicionarLancamento(new lançamento("Farmácia", "despesa", 0))

const marco = new Mes("Março");
marco.adicionarLancamento(new lançamento("Salário", "receita", 4000));
marco.adicionarLancamento(new lançamento("Aluguel", "despesa", 1200));
marco.adicionarLancamento(new lançamento("Conta de Luz", "despesa", 200));
marco.adicionarLancamento(new lançamento("Conta de Água", "despesa", 100));
marco.adicionarLancamento(new lançamento("Internet", "despesa", 200));
marco.adicionarLancamento(new lançamento("Transporte", "despesa", 500));
marco.adicionarLancamento(new lançamento("Lazer", "despesa", 800));
marco.adicionarLancamento(new lançamento("Alimentação", "despesa", 1000));
marco.adicionarLancamento(new lançamento("Condomínio", "despesa", 400));
//marco.adicionarLancamento(new lançamento("Farmácia", "despesa", 0));

const abril = new Mes("Abril")
abril.adicionarLancamento(new lançamento("Salário","receita", 4000))

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.adicionarMes(abril)
ano.calcularSaldo()

janeiro.adicionarLancamento(new lançamento("escola","despesa", 500));
fevereiro.adicionarLancamento(new lançamento("escola","despesa", 400));
marco.adicionarLancamento(new lançamento("escola","despesa", 500));
ano.calcularSaldo();

console.log(ano.meses);

function addElemento (parent, elementType, text) {
    const element = document.createElement(elementType);
    if (text !== "" && text !== undefined && text !== null) {
        element.innerText = text;
    }
    parent.appendChild(element);
}

function renderizar () {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }
    const painel = document.createElement("div");
    const cores = ["red" , "yellow", "green", "blue"]
    const grafico = document.createElement("div");
    grafico.className = "grafico";
    painel.appendChild(grafico);
    for (const mes of ano.meses) {
        const coluna = document.createElement("div");
        coluna.className = "grafico-coluna"
        const  cor = document.createElement("div");
        cor.style.height = (mes.totalizador.saldo*100)/8000;
        cor.style.background = cores.pop()
        coluna.appendChild(cor);
        const nomeDoMes = document.createElement("div");
        nomeDoMes.className = "grafico-coluna-texto"
        nomeDoMes.innerText = mes.nome;
        coluna.appendChild(cor)
        coluna.appendChild(nomeDoMes)
        grafico.appendChild(coluna)
    }

    for (const mes of ano.meses) {
        addElemento(painel, "h4", mes.nome);
        const tabelaLancamentos = document.createElement("table");
        tabelaLancamentos.className = "tabela-lancamentos";
        const linhaTitulo = document.createElement("tr");
        addElemento(linhaTitulo, "th", "Categoria");
        addElemento(linhaTitulo, "th", "Valor");
        tabelaLancamentos.appendChild(linhaTitulo);
        for (const lancamento of mes.lancamentos) {
            const linhaLancamento = document.createElement("tr");
            addElemento(linhaLancamento, "td", lancamento.categoria);
            addElemento(linhaLancamento, "td", formataDinheiro(lancamento.valor));
            tabelaLancamentos.appendChild(linhaLancamento);
        }
        const linhaJuros = document.createElement("tr");
        addElemento(linhaJuros, "th", "Juros");
        addElemento(linhaJuros, "th", formataDinheiro(mes.totalizador.juro));
        tabelaLancamentos.appendChild(linhaJuros);
        const linhaRenndimento = document.createElement("tr");
        addElemento(linhaRenndimento, "th", "Rendimento");
        addElemento(linhaRenndimento, "th", formataDinheiro(mes.totalizador.rendimento));
        tabelaLancamentos.appendChild(linhaRenndimento);
        const linhaSaldo = document.createElement("tr");
        addElemento(linhaSaldo, "th", "Total");
        addElemento(linhaSaldo, "th", formataDinheiro(mes.totalizador.saldo));
        tabelaLancamentos.appendChild(linhaSaldo);
        painel.appendChild(tabelaLancamentos);
    }
    app.appendChild(painel);
}

renderizar(); 

function adicionarLancamento () {
    const mes = document.getElementById("mes");
    const categoria = document.getElementById("categoria");
    const tipo = document.getElementById("tipo");
    const valor = document.getElementById("valor");
    ano.adicionarLancamento(mes.value, new lançamento(categoria.value, tipo.value, parseFloat(valor.value)));
    ano.calcularSaldo();
    renderizar();
    mes.value = ano.meses[0].nome;
    tipo.value = "receita";
    categoria.value = "";
    valor.value = "";
}

const button = document.getElementById("button");
button.addEventListener("click", adicionarLancamento);

const mesSelect = document.getElementById("mes");
for (const mes of ano.meses) {
    const option = document.createElement("option");
    option.text = mes.nome;
    mesSelect.add(option);
}
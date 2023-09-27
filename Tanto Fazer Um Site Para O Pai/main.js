
const Julho = [
    { categoria: "Dizimo", tipo: "despesas", valor: 500 },
    { categoria: "Água", tipo: "despesas", valor: 262.39 },
    { categoria: "Luz", tipo: "despesas", valor: 298.39 },
    { categoria: "Internet", tipo: "despesas", valor: 139.90 },
    { categoria: "TV", tipo: "despesas", valor: 0 },
    { categoria: "Pet", tipo: "despesas", valor: 250 },
    { categoria: "Fort", tipo: "despesas", valor: 605 },
    { categoria: "Kompra", tipo: "despesas", valor: 1450 },
    { categoria: "Padaria", tipo: "despesas", valor: 135 },
    { categoria: "Ailos", tipo: "despesas", valor: 6000 },
    { categoria: "Santander", tipo: "despesas", valor: 200.47 },
    { categoria: "Bradesco Cadt", tipo: "despesas", valor: 170 },
    { categoria: "Neky", tipo: "despesas", valor: 50 },
    { categoria: "Marlou", tipo: "despesas", valor: 100 },
    { categoria: "Nubank", tipo: "despesas", valor: 1900 },
    { categoria: "Seguro", tipo: "despesas", valor: 98 },
    { categoria: "Havan Bel", tipo: "despesas", valor: 173.97 },
    { categoria: "Havan Marco", tipo: "despesas", valor: 0 },
    { categoria: "Tim", tipo: "despesas", valor: 60 },
    { categoria: "Sogra(Antonieta)", tipo: "despesas", valor: 0 }
];

count = 0;
for (const contas of Julho) {
    new Lancamento(contas.categoria, contas.tipo, contas.valor);
    if (count === 0) {
        count = 1;
        valor = contas.valor;
    } else {
        valor += contas.valor;
    }
}

console.log("A soma dos valor do mes é:", valor)

function addElementos (parent, elementType, text) {
    const element = document.createElement(elementType);
    if (text !== "" && text !== undefined && text !== null) {
        element.innerText = text;
    }
    parent.appendChild(element);
}

function renderizar () {
    const app = document.getElementById("app");

    const painel = document.createElement("div");
    addElementos(painel, "h3", "Julho");
        for (const contas of Julho) {
            const detalhesLancamento = contas.categoria + " " + contas.tipo + " " + contas.valor;
            addElementos(painel, "p", detalhesLancamento)
        }
        //addElementos(painel, "h4", contas.totalizador.saldo);
        addElementos(painel, "hr");
    app.appendChild(painel);
}

renderizar()

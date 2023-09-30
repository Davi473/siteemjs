
function addElemento (parent, elementType, classe, text) {
    const element = document.createElement(elementType);
    element.className = classe
    if (text !== "" && text !== undefined && text !== null) {
        element.innerText = text;
    }
    parent.appendChild(element);
}

function addStats (parent, valorDoCliente) {
    const td = document.createElement("td")
    parent.appendChild(td)
    const element = document.createElement("select")
    td.appendChild(element)
    let valor = true
    for (const valores of valoresDoStats) {
        if ( valor === true ) {
            addElemento(element, "option", "valor", valorDoCliente)
            valor = false
        } 
        if ( valor === false ) {
            if (valores === valorDoCliente) {
                continue
            } else {
                addElemento(element, "option", "valor", valores)
            }
        }
    }  
}

function buttonTabela (parent, nome) {
    const td = document.createElement("td")
    parent.appendChild(td)
    const element = document.createElement("button")
    element.innerText = nome
    parent.appendChild(element)
}


function renderizar () {
    const app = document.getElementById("comeco");
    if (app.firstChild) {
        app.firstChild.remove();
    }
    const painel = document.createElement("table");
    painel.className = "tabela-dos-clientes";
    for (const valores of clientes) {
        const tr = document.createElement("tr")

        if (valores.cliente === "Cliente") {
            addElemento(tr, "th", valores.cliente, valores.cliente);
            addElemento(tr, "th", valores.email, valores.email);
            addElemento(tr, "th", valores.telefone, valores.telefone);
            addElemento(tr, "th", valores.stats, valores.stats);
            addElemento(tr, "th", valores.acao, valores.acao);
        } else {
            addElemento(tr, "td", "Clientes" ,valores.cliente);
            addElemento(tr, "td", "Email",valores.email);
            addElemento(tr, "td", "Telefone",valores.telefone);
            addStats(tr, valores.stats);
            buttonTabela(tr, "Excluir","Excluir")
        }
        painel.appendChild(tr);
    }   
    app.appendChild(painel);
}

renderizar()

function adicionarClientes () {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const stats = document.getElementById("stats");
    clientes.push(name.value, email.value, telefone.value, stats.value, "Ação");
    console.log(clientes)
    renderizar();
}

const button = document.getElementById("button");
button.addEventListener("click", adicionarClientes);
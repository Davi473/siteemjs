
function adicionarTag (parent, nameTag, text) {
    const element = document.createElement(nameTag)
    if (text !== '' && text !== undefined) {
        element.innerText = text
    }
    parent.appendChild(element)
}

function adicionarInputText (parent, idName, placeholder) {
    const element = document.createElement("input")
    element.type = "text"
    element.id = idName
    element.placeholder = placeholder
    parent.appendChild(element)
}

function adicionarInputSubmit (parent, idName, valor) {
    const element = document.createElement("input")
    element.type = "submit"
    element.id = idName
    element.value = valor
    parent.appendChild(element)
}

function adicionarTabela () {
    const app = document.getElementById("tabela")
    const cabecalho = document.createElement("table")
    cabecalho.className = "cabecalho"
    const cabecalho_tr = document.createElement("tr")
    const cabecalho_th = document.createElement("th")
    adicionarInputText(cabecalho_th, "nome", "Nome Completo")
    adicionarInputText(cabecalho_th, "email", "email")
    adicionarInputText(cabecalho_th, "telefone", "telefone")
    const cabecalho_tr2 = document.createElement("tr")
    const cabecalho_th2 = document.createElement("th")
    const select = document.createElement("select")
    cabecalho_th2.appendChild(select)
    for ( const valor of valoresDeStats ) {
        adicionarTag(select, "option", valor)
    }
    adicionarInputSubmit(cabecalho_th2, "adicionarCliente", "Adicionar")
    app.appendChild(cabecalho)
    cabecalho.appendChild(cabecalho_tr)
    cabecalho_tr.appendChild(cabecalho_th)
    cabecalho.appendChild(cabecalho_tr2)
    cabecalho_tr2.appendChild(cabecalho_th2)
}

function tagComDiv (parent, nameTag, text) {
    const element = document.createElement(nameTag)
    element.innerText = text
    element.className = "th-client"
    parent.appendChild(element)
}

function selectStats (parent, valorDoCliente) {
    const select = document.createElement("select")
    adicionarTag(select, "option", valorDoCliente)
    for (const valor of valoresDeStats) {
        if (valor === valorDoCliente) {
            continue
        } else {
            adicionarTag(select, "option", valor)
        }
    }
    parent.appendChild(select)
}

function adicionarValores () {
    const app = document.getElementById("clientes")
    const client_table = document.createElement("table")
    client_table.className = "client-table"
    const cliente_tr_tabela = document.createElement("tr")
    cliente_tr_tabela.className = "client-tr"
    for (const valor of valoresDaTabela) {
        tagComDiv(cliente_tr_tabela, "th", valor)
    }
    client_table.appendChild(cliente_tr_tabela)
    for ( const clients of clientesAdicionados) {
        const cliente_tr = document.createElement("tr")
        tagComDiv(cliente_tr, "td", clients.cliente)
        tagComDiv(cliente_tr, "td", clients.email)
        tagComDiv(cliente_tr, "td", clients.telefone)
        const trSelect = document.createElement("td")
        trSelect.className = "th-client"
        selectStats(trSelect, clients.stats)
        const trSubmit = document.createElement("td")
        trSubmit.className = "th-client"
        adicionarInputSubmit(trSubmit, "excluir-cliente", "Excluir")
        cliente_tr.appendChild(trSelect)
        cliente_tr.appendChild(trSubmit)
        client_table.appendChild(cliente_tr)
        
    }
    app.appendChild(client_table)
}


function renderizarOSite () {
    adicionarTabela()
    adicionarValores()
}

renderizarOSite()
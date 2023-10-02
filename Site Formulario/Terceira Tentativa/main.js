function cabecalho () {
    // chamando a div id="cabecalho"
    const cabecalho = document.getElementById("cabecalho")
    // Table do cabecalho
    const cabecalhoTable = document.createElement("table")
    cabecalhoTable.className = "tablela-cabecalho"
    // tr 1
    const cabecalhoTrPrimaria = document.createElement("tr")
    cabecalhoTable.appendChild(cabecalhoTrPrimaria)
     // th 1
     const cabecalhoThPrimaria = document.createElement("th")
     cabecalhoTrPrimaria.appendChild(cabecalhoThPrimaria)
    // input Name, Email, Telephone
    const input = ["Nome", "Email", "Telefone"]
    for (const valor of input) {
        // Os input
        const cabecalhoInput = document.createElement("input")
        cabecalhoInput.placeholder = valor
        cabecalhoInput.id = valor
        cabecalhoThPrimaria.appendChild(cabecalhoInput)
    }
    // tr 2
    const cabecalhoTrSecundaria = document.createElement("tr")
    cabecalhoTable.appendChild(cabecalhoTrSecundaria)
    // th 2
    const cabecalhoThSecundaria = document.createElement("th")
    cabecalhoTrSecundaria.appendChild(cabecalhoThSecundaria)
    // Select Options
    const cabecalhoSelect = document.createElement("select")
    cabecalhoThSecundaria.appendChild(cabecalhoSelect)
    stats = ["Novo", "Ligar Mais Tarde", "Não Ligar Mais"]
    for (const stato of stats) {
    const cabecalhoOption = document.createElement("option")
    cabecalhoOption.innerText = stato
    cabecalhoSelect.appendChild(cabecalhoOption)
    }
    // input Button Tr 2
    const cabecalhoButton = document.createElement("button")
    cabecalhoButton.innerText = "Adicionar"
    cabecalhoThSecundaria.appendChild(cabecalhoButton)
    // Juntando tudo e colocando na div
    cabecalho.appendChild(cabecalhoTable)
}

function addCelulas (parent, type, text) {
    const element = document.createElement(type)
    element.innerText = text
    element.className = "itens-tabela"
    parent.appendChild(element)
}

// fazer a select de stats
function addSelect (parent, valores) {
    const select = document.createElement("select")
    for (const valor of valores) {
        const option = document.createElement("option")
        option.innerText =  valor
        select.appendChild(option)
    }
    parent.appendChild(select)
}

// função do Button cabeçalho
function buttonAdicinar (parent) {
    const parent = document.
}

// função de test 
function escrita () {
    console.log("oiee")
}

// tabelas dos clientes
function clientes () {
    // chamando a div id="tabela"
    const tabela = document.getElementById("tabela")
    // Table dos Clientes
    const clientesTable = document.createElement("table")
    clientesTable.className = "clientes-table"
    // clientes da tabela
    valorExcluir = 0
    valor = 0
    for (const cliente of clientesAdicionados) {
        console.log(cliente.cliente)
        if (cliente.cliente === "Cliente") {
            // tr itens
            const tr = document.createElement("tr")
            clientesTable.appendChild(tr)
            // th dos itens
            addCelulas(tr, "th", cliente.cliente)
            addCelulas(tr, "th", cliente.email)
            addCelulas(tr, "th", cliente.telefone)
            addCelulas(tr, "th", cliente.stats)
            addCelulas(tr, "th", cliente.acao)
        } else {
            // tr de cada cliente
            const tr = document.createElement("tr")
            tr.id = valor
            valor += 1
            clientesTable.appendChild(tr)
            // td de da table
            addCelulas(tr, "td", cliente.cliente)
            addCelulas(tr, "td", cliente.email)
            addCelulas(tr, "td", cliente.telefone)
            // Select de cada cliente
            const th = document.createElement("td")
            th.className = "itens-tabela"
            tr.appendChild(th)
            addSelect(th, valoresDeStats)
            // td do botão

            // Botão para excluir os clientes
            const button = document.createElement("input")
            button.type = "button"
            button.value = "Excluir"
            button.id = valorExcluir
            button.onclic = valorExcluir // A possibilidade de aqui dar erro
            button.className = "excluir"
            valorExcluir += 1
            tr.appendChild(button)
        }
    }
    tabela.appendChild(clientesTable)
}

cabecalho()
clientes()
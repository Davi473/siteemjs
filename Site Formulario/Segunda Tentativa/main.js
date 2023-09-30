
function adicionarTag (parent, nameTag, text) {
    const element = document.createElement(nameTag)
    if (text !== '' && text !== undefined) {
        element.innerText = text
    }
    parent.appendChild(element)
}

function adicionarTabela () {
    const app = document.getElementById("comeco")
    const cabecalho = document.createElement("table")
    app.appendChild(cabecalho)
    adicionarTag(cabecalho, "td", "vamos começar")
    adicionarTag(cabecalho, "td", "outro valor")
    app.appendChild(app)
}

adicionarTabela()
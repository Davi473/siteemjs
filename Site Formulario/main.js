function addElemento (parent, elementType, text, className) {
    const element = document.createElement(elementType);
    element.className(className)
    if (text !== "" && text !== undefined && text !== null) {
        element.innerText = text;
    }
    parent.appendChild(element);
}

function renderizar () {
    const app = document.getElementById("comeco");
    if (app.firstChild) {
        app.firstChild.remove();
    }
    for (const valores of clientes) {
        addElemento(app, "td", valores.cliente, "cliente");
        addElemento(app, "td", valores.email, "cliente");
        addElemento(app, "td", valores.telefone, "cliente");
        const td = document.createElement("td")
        addElemento(td,"select")
        const select = document.getElementsByClassName("select")
        sele
    }
    app.appendChild(app);
}

renderizar()

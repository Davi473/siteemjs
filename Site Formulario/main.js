function addElemento (parent, elementType, text) {
    const element = document.createElement(elementType);
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
        addElemento(app, "td", valores.cliente);
        addElemento(app, "td", valores.email);
        addElemento(app, "td", valores.telefone);
        const td = document.createElement("td")
        addElemento(td,"select")
        app.appendChild(td)
    }
    app.appendChild(app);
}

renderizar()
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
        for (const valor of valores)
            addElemento(app, "td", valor.cliente);
            addElemento(app, "td", valor.email);
            addElemento(app, "td", valor.telefone);
            const td = document.createElement("td")
            addElemento(td,"select")
    }
    app.appendChild(app);
}

renderizar()
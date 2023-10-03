// varial dos clientes
const clientesAdicionados = [
    {cliente: "Davi Marcos Dorn", email: "davi###@gmail.com", telefone: "47 995####", stats: "Novo"},
    {cliente: "Fulano", email: "fulano@gmail.com", telefone: "47 7876####", stats: "Ligar Mais Tarde"}
];

// varial dos valores de stats
const valoresDeStats = [
    "Novo", "Não Ligar Mais", "Ligar Mais Tarde"
];

// Adicionar os clientes
function addCliente () {
    const nome = document.getElementById("Nome");
    const email = document.getElementById("Email");
    const telefone = document.getElementById("Telefone");
    const stats = document.getElementById("stats");
    clientesAdicionados.push(
        {cliente: nome.value, email: email.value, telefone: telefone.value, stats: stats.value}
    );
    document.getElementById("tabela").remove();
    clientes();
}

function cabecalho () {
    // chamando a div id="cabecalho"
    const cabecalho = document.getElementById("cabecalho");
    // Table do cabecalho
    const cabecalhoTable = document.createElement("table");
    cabecalhoTable.className = "tablela-cabecalho";
    // tr 1
    const cabecalhoTrPrimaria = document.createElement("tr");
    cabecalhoTable.appendChild(cabecalhoTrPrimaria);
    // th 1
    const cabecalhoThPrimaria = document.createElement("th");
    cabecalhoTrPrimaria.appendChild(cabecalhoThPrimaria);
    // input Name, Email, Telephone
    const input = ["Nome", "Email", "Telefone"];
    for (const valor of input) {
        // Os input
        const cabecalhoInput = document.createElement("input");
        cabecalhoInput.placeholder = valor;
        cabecalhoInput.id = valor;
        cabecalhoThPrimaria.appendChild(cabecalhoInput);
    }
    // tr 2
    const cabecalhoTrSecundaria = document.createElement("tr");
    cabecalhoTable.appendChild(cabecalhoTrSecundaria);
    // th 2
    const cabecalhoThSecundaria = document.createElement("th");
    cabecalhoTrSecundaria.appendChild(cabecalhoThSecundaria);
    // Select Options
    const cabecalhoSelect = document.createElement("select");
    cabecalhoSelect.id = "stats";
    cabecalhoThSecundaria.appendChild(cabecalhoSelect);
    for (const stato of valoresDeStats) {
    const cabecalhoOption = document.createElement("option");
    cabecalhoOption.innerText = stato;
    cabecalhoSelect.appendChild(cabecalhoOption);
    };
    // input Button Tr 2
    const cabecalhoButton = document.createElement("button");
    cabecalhoButton.innerText = "Adicionar";
    cabecalhoButton.onclick = function() {
        addCliente();
    }
    cabecalhoThSecundaria.appendChild(cabecalhoButton);
    // Juntando tudo e colocando na div
    cabecalho.appendChild(cabecalhoTable);
}

function addCelulas (parent, type, text) {
    const element = document.createElement(type);
    element.innerText = text;
    element.className = "itens-tabela";
    parent.appendChild(element);
}

// fazer a select de stats
function addSelect (parent, valores) {
    const select = document.createElement("select");
    const option = document.createElement("option");
    option.innerText =  valores;
    select.appendChild(option);
    for (const valor of valoresDeStats) {
        if (valor === valores) {
            continue;
        } else {
            const option = document.createElement("option");
        option.innerText =  valor;
        select.appendChild(option);
        };
    };
    parent.appendChild(select);
};

// Butto Excluir "Excluir o Cliente"
function excluirCliente (valor) {
    console.log(valor);
    document.getElementById("tabela").remove();
    clientesAdicionados.splice(valor, valor + 1);
    console.log(clientesAdicionados);
    clientes();
        
};



// tabelas dos clientes
function clientes () {
    // chamando a div id="tabela"
    const tabela =  document.createElement("div");
    tabela.id = "tabela";
    
    // Table dos Clientes
    const clientesTable = document.createElement("table");
    clientesTable.className = "clientes-table";
    // clientes da tabela
    valorExcluir = 0;
    valor = 0;
    // tr itens
    const tr = document.createElement("tr");
    clientesTable.appendChild(tr);
    // th dos itens
    addCelulas(tr, "th", "Cliente");
    addCelulas(tr, "th", "Email");
    addCelulas(tr, "th", "Telefone");
    addCelulas(tr, "th", "Stats");
    addCelulas(tr, "th", "Ação");
    for (const cliente of clientesAdicionados) {
        // tr de cada cliente
        const tr = document.createElement("tr");
        tr.id = valor;
        valor += 1;
        clientesTable.appendChild(tr);
        // td de da table
        addCelulas(tr, "td", cliente.cliente);
        addCelulas(tr, "td", cliente.email);
        addCelulas(tr, "td", cliente.telefone);
        // Select de cada cliente
        const tdSelect = document.createElement("td");
        tdSelect.className = "itens-tabela";
        tr.appendChild(tdSelect);
        addSelect(tdSelect, cliente.stats);
        // td do botão
        const tdButton = document.createElement("td");
        tdButton.className = "itens-tabela";
        // Botão para excluir os clientes
        const button = document.createElement("input");
        button.type = "button";
        button.value = "Excluir";
        button.id = valorExcluir;
        // Função de cara button
        button.onclick = function() {
            valor = button.id;
            excluirCliente(valor);
        }
        button.className = "excluir";
        tdButton.appendChild(button);
        tr.appendChild(tdButton);
        valorExcluir += 1;
    };
    tabela.appendChild(clientesTable);
    const tudo = document.getElementById("tudo");
    tudo.appendChild(tabela);
};

cabecalho();
clientes();
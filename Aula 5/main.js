
const saldoInicial = 0
const janeiro =  new Mes("Janeiro", saldoInicial);
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
janeiro.calcularSaldo();
console.log(janeiro);

const fevereiro = new Mes("fevereiro", janeiro.totalizador.saldo);
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
fevereiro.calcularSaldo();
console.log(fevereiro);

const marco = new Mes("Março", fevereiro.totalizador.saldo);
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
marco.calcularSaldo();
console.log(marco);

janeiro.adicionarLancamento(new lançamento("Escola", "despesa", 500));
janeiro.calcularSaldo();
fevereiro.saldoInicial = janeiro.totalizador.saldo;
fevereiro.calcularSaldo();
marco.saldoInicial = fevereiro.totalizador.saldo;
marco.calcularSaldo();

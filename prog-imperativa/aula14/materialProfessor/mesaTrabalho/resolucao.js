
var Cliente = require('./modulo/index');

var contaBancária = require('./modulos/contaBancária');

var Cliente = new Cliente ('João', "Bosco", 2000, 2000, 0)
console.log('Saldo Atual:', `R$ ${dadosDaConta.saldoAtual}`);
console.log('----------------');
console.log('Depósito:', dadosDaConta.depositar(1000));
console.log('----------------');
console.log('Saque:', dadosDaConta.sacar(2000));
console.log('Saque:', dadosDaConta.sacar(1000));

/*
    Atividade III: Converta os valores em texto JSON
    ( x ) Converta o resultado o objeto literal em JSON.
*/

var json = JSON.stringify(dadosDaConta);
console.log('----------------');
console.log('Valor convertido em JSON:', json);


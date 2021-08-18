/*
Nome da equipe
Anderson Silva
Salomão Santos
João Bosco
Eduardo Ananias
William Brito
*/

var saudacao = 'Olá'
var nome = prompt('Qual é o seu nome ?')
var dolares = 0
var reais = 0
dolares = prompt('Quantos dolares você gostaria de cotar ? ')
reais = dolares * 5.3

alert(
  saudacao + ' ' + nome + ' ' + ', US$' + ' ' +  dolares + ' vale ' + 'R$' +  reais + ' hoje. '
)

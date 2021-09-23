var Aluno = require('./aluno/aluno.controlador');

var alunoNovo = new Aluno ('Angelica', 'Lirio');

console.log('Nome:', alunoNovo.pegarNome());
console.log('Sobrenome:', alunoNovo.pegarSobrenome());
console.log('Nome Completo:', alunoNovo.pegarNomeCompleto());
var Professor = require('./professor/professor.controlador');

var professorImperativa = new Professor('Willian', 'Sant Anna');

console.log('Nome:', professorImperativa.pegarNome()); // Willian
console.log('Sobrenome:', professorImperativa.pegarSobrenome()); // Sant Anna
console.log('Nome Completo:', professorImperativa.pegarNomeCompleto()); // Willian Sant Anna

// Aula 14 - Objetos literais parte II, Módulos (personalizado)

// 2.2. Importando um Módulo

var Professor = require('./modulos/professor');

// 1.1. Uma instância do Objeto Professor.
var professorProgramacaoImperativa = new Professor('Willian', 'Sant Anna');

// 1.1.1. Atributo público.
console.log(professorProgramacaoImperativa.nome); // Willian
console.log(professorProgramacaoImperativa.sobrenome); // Sant Anna

//  1.1.2. Função pública.
console.log(professorProgramacaoImperativa.nomeCompleto()); // Willian Sant Anna

// 1.1.3. Função privada: Você não consegue acessar funções privadas fora do Objeto.
//console.log(professorProgramacaoImperativa.validarSeEhUmNomeValido()) // Uncaught TypeError: professorProgramacaoImperativa.validarSeEhUmNomeValido is not a function


// 1.1. Uma segunda instância do Objeto Professor.

var professorFrontI = new Professor('Ivin', 'Rodrigues');

console.log(professorFrontI.nome); // Ivin
console.log(professorFrontI.sobrenome); // Rodrigues
console.log(professorFrontI.nomeCompleto()); // Ivin Rodrigues
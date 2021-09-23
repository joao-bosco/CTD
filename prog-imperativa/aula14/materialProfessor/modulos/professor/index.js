// 1. Objeto Construtor
// 1.1. Função Construtora
        
function Professor(nome, sobrenome) {

    // 1.1.1. Atributo público
    this.nome = nome;
    this.sobrenome = sobrenome;

    //  1.1.2. Função pública
    this.nomeCompleto = function() {
        if(validarSeOValorEhUmaString()) {
            return `${this.nome} ${this.sobrenome}`;
        } 
        else {
            return 'Não é um nome válido.';
        }
    }

    // 1.1.3. Função privada
    function validarSeOValorEhUmaString() {
        var naoEstaVazio = (nome && sobrenome);
        var ehUmaString = (typeof(nome) == 'string' && typeof(sobrenome) == 'string');
                
        return (naoEstaVazio && ehUmaString);
    }

}

// 2. Módulos
// 2.1. Exportando o Módulo
module.exports = Professor;
     
        
    
  
            function Cliente (nome, sobrenome, numeroDaAgencia, numeroDaConta, saldoAtual){
                this.nome= nome;
                this.sobrenome= sobrenome;
                this.numeroDaAgencia= numeroDaAgencia;
                this.numeroDaConta= numeroDaConta;
                this.saldoAtual= saldoAtual;
                
                this.depositar= function (valorDoDeposito) {
                    this.saldoAtual += valorDoDeposito;
                    return `Agora seu Saldo Atual é de R$ ${this.saldoAtual}.`;  
                },
                this.sacar= function(valorDoSaque) {
                    var temSaldoParaOSaque = this.saldoAtual >= valorDoSaque;
                 
                    if(temSaldoParaOSaque) {
                   
                        this.saldoAtual -= valorDoSaque;
                   
                        return `Você realizou um saque de R$ ${valorDoSaque}. Agora seu Saldo Atual é de R$ ${this.saldoAtual}.`;
                    }
                    else {
                        
                        return `Saldo insuficiente! Seu Saldo Atual é de R$ ${this.saldoAtual}.`;
                    }
                }
            }
            module.exports = Cliente;
import readline from 'readline'
import { DebitoConta } from './DebitoConta'

export class CaixaEletronico {
    
    Operacoes(): void {
        this.MenuOperacoes()
        const opcao = readline

    }

    private MenuOperacoes(): void {
        console.clear();
        console.log("Caixa Eletrônico SOLID");
        console.log("Escolha sua opção:");
        console.log();
        console.log("1 - Saque Conta Corrente");
        console.log("2 - Saque Conta Poupança");
        console.log("3 - Saque Conta Investimento");
    }

    private static DadosDebito(): DebitoConta {
        console.log();
        console.log("..............................");
        console.log();
        console.log("Digite a Conta");
        let conta = readline;
        console.log("Digite o Valor");
        let valor = readline;

        let debitoConta = new DebitoConta(String(conta), Number(valor))
        return debitoConta;
    }
}
import readline from 'readline'
import { DebitoConta } from './DebitoConta'

export class CaixaEletronico {
    
    Operacoes(): void {
        this.MenuOperacoes()
        const opcao = readline
        let retorno: string = null
        let debitoConta = CaixaEletronico.DadosDebito()

        switch (opcao.toString()) {
            case '1':
                console.log("Efetuando operação em Conta Corrente")
                retorno = debitoConta.DebitarContaInvestimento()
                break;
            case '2':
                console.log("Efetuando operação em Conta Poupança")
                retorno = debitoConta.DebitarContaPoupanca()
                break;
            case '3':
                console.log("Efetuando operação em Conta Investimento")
                retorno = debitoConta.DebitarContaInvestimento()
                break;
        }
        CaixaEletronico.RetornoTransacao(retorno)
    }

    private MenuOperacoes(): void {
        console.clear()
        console.log("Caixa Eletrônico SOLID")
        console.log("Escolha sua opção:")
        console.log()
        console.log("1 - Saque Conta Corrente")
        console.log("2 - Saque Conta Poupança")
        console.log("3 - Saque Conta Investimento")
    }

    private static DadosDebito(): DebitoConta {
        console.log()
        console.log("..............................")
        console.log()
        console.log("Digite a Conta")
        let conta = readline
        console.log("Digite o Valor")
        let valor = readline
        return new DebitoConta(String(conta), Number(valor))
    }

    private static RetornoTransacao(retorno: string) {
            console.log()
            console.log(`Sucesso! Transação: ${retorno}`)
            readline
    }

}
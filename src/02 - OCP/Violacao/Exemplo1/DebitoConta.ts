import { TipoConta } from './TipoConta'

export class DebitoConta {
    
    public Debitar(valor: number, conta: string, tipoConta: TipoConta) {
        if ((tipoConta == TipoConta.Corrente)) {
            //  Debita Conta Corrente
        }
        
        if ((tipoConta == TipoConta.Poupanca)) {
            //  Valida Aniversário da Conta
            //  Debita Conta Poupança
        }
        
    }
}
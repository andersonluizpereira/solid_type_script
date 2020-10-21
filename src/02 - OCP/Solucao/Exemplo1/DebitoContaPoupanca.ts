import { DebitoConta } from "./DebitoConta";

export class DebitoContaPoupanca extends DebitoConta { 
    Debitar(valor: number, conta: string) : string {
            // Valida Aniversário da Conta
            // Debita Conta Corrente
        return this.FormatarTransacao()
    }
}
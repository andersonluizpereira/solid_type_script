import { DebitoConta } from "./DebitoConta";

export class DebitoContaCorrente extends DebitoConta { 
    Debitar(valor: number, conta: string) : string {
        // Debita Conta Corrente
        return this.FormatarTransacao()
    }
}
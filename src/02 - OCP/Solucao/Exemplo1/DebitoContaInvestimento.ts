import { DebitoConta } from "./DebitoConta";

export class DebitoContaInvestimento extends DebitoConta { 
    Debitar(valor: number, conta: string) : string {
            // Debita Conta Investimento
            // Isentar Taxas
        return this.FormatarTransacao()
    }
}
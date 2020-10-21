import { DebitoConta } from "./DebitoConta";

export class DebitarContaInvestimento {
    
    public static DebitarContaInvestimento(debitoConta: DebitoConta): string {
        //  Logica de negócio para debito em conta corrente.
        return debitoConta.FormatarTransacao();
    }
}
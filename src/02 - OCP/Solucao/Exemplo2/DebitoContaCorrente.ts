import { DebitoConta } from "./DebitoConta";

export class DebitoContaCorrente {
    
    public static DebitarContaCorrente(debitoConta: DebitoConta): string {
        //  Logica de negócio para debito em conta corrente.
        return debitoConta.FormatarTransacao();
    }
}
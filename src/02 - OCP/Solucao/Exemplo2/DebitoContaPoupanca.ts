import { DebitoConta } from "./DebitoConta";

export class DebitoContaPoupanca {
    
    public static DebitoContaPoupanca(debitoConta: DebitoConta): string {
            // Logica de negócio para debito em conta poupanca.
            return debitoConta.FormatarTransacao();
    }
}

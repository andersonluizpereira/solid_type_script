export class DebitoConta {

    public NumeroConta: string
    
    public Valor: number
    
    public NumeroTransacao: string

    /**
     *
     */
    constructor(conta: string, valor: number) {
        this.NumeroConta = conta
        this.Valor = valor
    }

    FormatarTransacao (): string {
        const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length;
        for ( var i = 0; i < 15; i++ ) {
            this.NumeroTransacao += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return this.NumeroTransacao;
    }
}
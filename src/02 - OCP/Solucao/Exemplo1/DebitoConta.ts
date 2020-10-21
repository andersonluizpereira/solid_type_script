export class DebitoConta {
    
    NumeroTransacao: string    
    
    Debitar(valor: number, conta: string): string {
        return ''
    }
    
    FormatarTransacao (): string {
        const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            this.NumeroTransacao += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return this.NumeroTransacao;
    }
}
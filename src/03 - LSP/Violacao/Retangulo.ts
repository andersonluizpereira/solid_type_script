export class Retangulo { 
    
    private _altura: number
    private _largura: number

    get altura(): number {
        return this._altura
    }
    set altura(value: number) {
        this._altura = value
    }

    get largura(): number {
        return this._largura
    }
    set largura(value: number) {
        this._largura = value
    }

    Area(): number {
        return this.altura * this.largura
    }
}
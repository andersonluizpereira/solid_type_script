import { Retangulo } from "./Retangulo";

export class Quadrado extends Retangulo { 
    public /* override */ set Altura(value: number)  {
        super.largura = value
        super.altura = value
    }
    public /* override */ set Largura(value: number)  {
        super.largura = value
        super.altura = value
    }     
}
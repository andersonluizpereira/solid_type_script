import { Quadrado } from "./Quadrado"
import { Retangulo } from "./Retangulo"
import readline from 'readline'

export class CalculoArea {
    private static ObterAreaRetangulo(ret: Retangulo) {
        console.clear()
        console.log("Calculo da área do Retangulo")
        console.log()
        console.log(ret.altura + " * " + ret.largura)
        console.log()
        console.log(ret.Area())
        readline
    }
    public static Calcular() {
        var quad = new Quadrado()
            quad.Altura = 10,
            quad.Largura = 5    
        CalculoArea.ObterAreaRetangulo(quad)
    }
}
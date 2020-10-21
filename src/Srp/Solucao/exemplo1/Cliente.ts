import { EmailServices } from './EmailServices'
import { CpfServices } from './CpfServices'

export class Cliente {
    clienteId: number
    nome: string
    email: string
    cpf: string
    dataCadastro: string 
    
    IsValid(): Boolean {
        return EmailServices.IsValid(this.email) && CpfServices.IsValid(this.cpf);
    }

}

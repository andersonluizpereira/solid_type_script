import { Cliente } from './Cliente'
import { ClienteRepository } from './ClienteRepository';
import { EmailServices } from './EmailServices'

export class ClienteService {
    
    public AdicionarCliente(cliente: Cliente): string {
        if (!cliente.IsValid()) {
            return "Dados inválidos";
        }
        
        let repo = new ClienteRepository();
        repo.AdicionarCliente(cliente);
        EmailServices.Enviar("empresa@empresa.com", cliente.email, "Bem Vindo", "Parabéns está Cadastrado");
        return "Cliente cadastrado com sucesso";
    }
}
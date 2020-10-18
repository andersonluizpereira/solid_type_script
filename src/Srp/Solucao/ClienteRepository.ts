import { Cliente } from './Cliente'
import { Connection, Request } from 'tedious'

export class ClienteRepository {
    
    public AdicionarCliente(cliente: Cliente) {
        // Create connection to database
        const config = {
            authentication: {
                options: {
                    userName: "username", // update me
                    password: "password" // update me
                },
                type: "default"
            },
            server: "your_server.database.windows.net", // update me
            options: {
                database: "your_database", //update me
                encrypt: true
            }
        }

        const connection = new Connection(config)

        // Attempt to connect and execute queries if connection goes through
        connection.on("connect", err => {
            if (err) {
                console.error(err.message)
            } else {
                const request = new Request(
                    `INSERT INTO CLIENTE (NOME, EMAIL CPF, DATACADASTRO) VALUES (${cliente.nome}, ${cliente.email}, ${cliente.cpf}, ${cliente.dataCadastro}))`,
                    (err, rowCount) => {
                        if (err) {
                            console.error(err.message)
                        } else {
                            console.log(`${rowCount} row(s) returned`)
                        }
                    }
                )
                connection.execSql(request)
            }
        })
    }
}
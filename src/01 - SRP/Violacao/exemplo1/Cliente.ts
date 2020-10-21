import { Connection, Request } from 'tedious'
import { nodemailer } from 'nodemailer'

export class Cliente {
    clienteId: number
    nome: string
    email: string
    cpf: string
    dataCadastro: string

    AdicionarCliente(): String {
        if (!this.email.includes("@"))
            return "Cliente com e-mail inválido"

        if (this.cpf.length != 11)
            return "Cliente com CPF inválido"

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
                    `INSERT INTO CLIENTE (NOME, EMAIL CPF, DATACADASTRO) VALUES (${this.nome}, ${this.email}, ${this.cpf}, ${this.dataCadastro}))`,
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


        const transporter = nodemailer.createTransport({
            host: "smtp.seuhost.com",
            port: 587,
            secure: false,
            auth: {
                user: "email",
                pass: "senha"
            },
            tls: { rejectUnauthorized: false }
        })

        const mailOptions = {
            from: 'de@empresa.com',
            to: 'empresa@empresa.com',
            subject: 'Bem Vindo.',
            html: 'Parabéns! Você está cadastrado.'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('[x]Enviando email')
            }
        });

        return 'Cliente cadastrado com sucesso!'
    }
}
import { nodemailer } from 'nodemailer'

export class EmailServices {
    
    public static IsValid(email: string): boolean {
        return email.includes("@");
    }
    
    public static Enviar(de: string, para: string, assunto: string, mensagem: string) {
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
            from: de,
            to: para,
            subject: assunto,
            html: mensagem
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('[x]Enviando email')
            }
        });
    }
}
export class CpfServices {
    
    public static IsValid(cpf: string): boolean {
        return (cpf.length == 11);
    }
}
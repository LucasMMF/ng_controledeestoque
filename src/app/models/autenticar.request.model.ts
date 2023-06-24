/*
    Modelo de dados para autenticação
    dos usuários
*/
export class AutenticarRequestModel {
    constructor(
        public email: string,
        public senha: string
    ) {
        
    }
}
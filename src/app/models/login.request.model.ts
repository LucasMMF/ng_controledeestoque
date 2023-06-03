/*
    Modelo de dados para autenticação
    dos usuários
*/
export class LoginRequest {
    constructor(
        public username: string,
        public password: string
    ) {
        
    }
}
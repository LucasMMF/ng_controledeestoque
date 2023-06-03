/*
    Modelo de dados para obter a resposta
    da autenticação dos usuários
*/
export class LoginResponse {
    constructor(
        public message: string,
        public username: string,
        public accessToken: string,
        public expiration: Date
    ){
        
    }
}
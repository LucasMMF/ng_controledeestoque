/*
    Modelo de dados para obter a resposta
    da autenticação dos usuários
*/
export class AutenticarResponseModel {
    id: string = '';
    nome: string = '';
    email: string = '';
    accessToken: string = '';
    dataHoraAcesso: Date | null = null;
    dataHoraExpiracao: Date | null = null;
}
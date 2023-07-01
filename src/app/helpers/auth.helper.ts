import { AutenticarResponseModel } from "../models/autenticar.response.model";
import { saveData, removeData, getData } from "./storage.helper";

// Chave para salvar os dados de autenticação
const authUser: string = 'auth-user';

// Função para autenticar o usuário
export function signIn(model: AutenticarResponseModel): void {
    saveData(authUser, model);
}

// Função para logout
export function signOut(): void {
    removeData(authUser);
}

// Função para ler os dados do usuário autenticado
export function getAuthData(): AutenticarResponseModel | null {
    // Lendo os dados gravados na local storage
    let data = getData(authUser);
    // Verificando se não está vazio
    if (data != null) {
        let model = JSON.parse(data) as AutenticarResponseModel;
        // Verificando se o token não está vazio
        if (model.accessToken != null) {
            // Verificar se o token ainda é válido
            let dataAtual = new Date();
            let dataExpiracao = new Date(model.dataHoraExpiracao as Date);
            if (dataAtual <= dataExpiracao) {
                return model; // Retornar os dados do usuário autenticado
            }
        }
    }

    return null;
}
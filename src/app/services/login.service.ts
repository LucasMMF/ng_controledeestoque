import { LoginRequest } from "../models/login.request.model";
import { LoginResponse } from "../models/login.response.model";
import { Observable } from 'rxjs';
import axios from 'axios';
import { environment } from "src/environments/environment";

/*
    Função para executar a chamada para o serviço
    de autenticação de usuários na API
*/
export function postLogin(request: LoginRequest): Observable<LoginResponse> {

    // Fazendo a chamada para a API com o AXIOS HTTP
    return new Observable<LoginResponse>(observer => {
        axios.post<LoginResponse>(environment.apiEstoque + "/login", request)
            .then(response => {
                observer.next(response.data);
                observer.complete();
            })
            .catch(error => {
                observer.error(error);
            });
    });
}
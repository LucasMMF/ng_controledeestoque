import { AutenticarRequestModel } from "../models/autenticar.request.model";
import { AutenticarResponseModel } from "../models/autenticar.response.model";
import { Observable } from 'rxjs';
import axios from 'axios';
import { environment } from "src/environments/environment";

/*
    Função para executar a chamada para o serviço
    de autenticação de usuários na API
*/
export function autenticar(request: AutenticarRequestModel): Observable<AutenticarResponseModel> {

    // Fazendo a chamada para a API com o AXIOS HTTP
    return new Observable<AutenticarResponseModel>(observer => {
        axios.post<AutenticarResponseModel>(
            environment.apiEstoque + "/api/usuarios/autenticar",
            request)
            .then(response => {
                observer.next(response.data);
                observer.complete();
            })
            .catch(error => {
                observer.error(error);
            });
    });
}
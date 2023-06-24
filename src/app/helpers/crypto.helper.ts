import { environment } from "src/environments/environment";
import * as CryptoJS from "crypto-js";

/*
    Função para criptografar um valor
*/
export function encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, environment.secretKey)
        .toString();
}

/*
    Função para descriptografar um valor
*/
export function decrypt(data: string): string {
    return CryptoJS.AES.decrypt(data, environment.secretKey)
        .toString(CryptoJS.enc.Utf8);
}
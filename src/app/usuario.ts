import { Perfil } from "./Perfil";

export interface Usuario{
    name: string;
    cpfcnpj: number;
    tel: number;
    email: string;
    pass: string;
    cep: number;
    state: string;
    city: string;
    address: string;
    pass2: string;
    perfil: Perfil;
}
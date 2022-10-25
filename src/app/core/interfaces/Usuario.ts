export interface Usuario {
    id: number;
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

export enum Perfil {
    tutor = 1,
    //adocao = 2,
    veterinario = 2,
    petshop = 3
}
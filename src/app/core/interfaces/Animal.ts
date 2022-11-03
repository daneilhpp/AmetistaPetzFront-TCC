export interface Animal{
    id: number;
    nome: string;
    idEspecie: number;
    idRaca: number;
    idSexo: number;
    dtNascimento: Date;
    pelagem: string;
    idSituacao: number;
    peso: number;
}

export interface Especie{
    id: number;
    especieAnimal: string;
    grupoAnimal: string;
}
export interface Raca{
    id: number;
    idEspecie: number;
    descricao: string;
    porte: string;
    crRaca: string;
}
export interface Situacao{
    id: number;
    descricao: string;
}
export interface Sexos{
    idSexo: number;
    dsSexo: string;
}
export interface Animal{
    id: number;
    nome: string;
    especie: Especie["id"];
    raca: Raca["id"];
    dtNascimento: Date;
    pelagem: string;
    situacao: Situacao["id"];
    idRGA: number;
    peso: number;
}

export interface Especie{
    id: number;
    especieAnimal: string;
    grupoAnimal: string;
}
export interface Raca{
    id: number;
    idEspecie: Especie["id"];
    descricao: string;
    porte: string;
    crRaca: string;
}
export interface Situacao{
    id: number;
    descricao: string;
}
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

export interface Desaparecido{
    id: number;
    nome: string;
    idEspecie: number;
    idRaca: number;
    dtDesaparecimento: Date;
    lugar: string;
    dono: string;
    telefone: string;
    idAnimal: number;
    foto: string;
}

export interface Especie{
    id: number;
    especieAnimal: string;
    grupoAnimal: string;
}
export interface Raca{
    idRaca: number;
    idEspecie: number;
    dsRaca: string;
    ptRaca: string;
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
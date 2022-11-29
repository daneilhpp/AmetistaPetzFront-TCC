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
    dataAdicao: Date;
}

export interface Desaparecido{
    id: number;
    dtDesaparecimento: Date;
    lugar: string;
    dono: string;
    telefone: string;
    idAnimal: number;
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
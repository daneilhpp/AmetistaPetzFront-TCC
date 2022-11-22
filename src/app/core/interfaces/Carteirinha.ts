import { Animal, Especie } from "./Animal";

export interface Vaccine{
    idVacina: number;
    dataVacina: Date;
    proximaVacina: Date;
    medicamento: string;
    animalIdAnimal: number;
    carteiraId: number;
    //idVacina: Vacina["id"];
}

export interface Card{
    id: number;
    //petName: string;
    animalIdAnimal: number;
    dataAdicao: Date;
}

/* export interface Vacina{
    id: number;
    descricao: string;
    idEspecie: Especie["id"];
    dose: number;
    intervalo: number;
} */
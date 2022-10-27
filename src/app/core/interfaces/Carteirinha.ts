import { Animal, Especie } from "./Animal";

export interface Vaccine{
    idCarteira: number;
    dataVacina: Date;
    medicamento: string;
    TipoVacina: string;
    proximaVacina: Date;
    AnimalIdAnimal: Animal["id"];
    //idVacina: Vacina["id"];
}

export interface Card{
    Id: number;
    animal: string;
    carteiraVacina: Vaccine;
}

/* export interface Vacina{
    id: number;
    descricao: string;
    idEspecie: Especie["id"];
    dose: number;
    intervalo: number;
} */
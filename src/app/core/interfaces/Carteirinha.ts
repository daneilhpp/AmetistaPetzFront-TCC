import { Animal, Especie } from "./Animal";

export interface Carteirinha{
    id: number;
    dtVacina: Date;
    vacina: string;
    tipo: string;
    idAnimal: Animal["id"];
    proxVacina: Date;
    idVacina: Vacina["id"];
}

export interface Vacina{
    id: number;
    descricao: string;
    idEspecie: Especie["id"];
    dose: number;
    intervalo: number;
}
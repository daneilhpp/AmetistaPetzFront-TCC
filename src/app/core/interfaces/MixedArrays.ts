import { Animal, Especie, Raca, Sexos, Desaparecido, DesaparecidoSemRegistro } from "./Animal";
import { Card, Vaccine } from "./Carteirinha";
import { RGA } from "./Rga";

export interface MixedRGA{
    animal: Animal;
    especie: Especie;
    raca: Raca;
    sexo: Sexos;

}

export interface MixedAddRGA{
    rga: RGA;
    animal: Animal;
}

//vamos por que no banco o animal vai ter só aqueles tres atributos, mas de vdd tem bem mais

//interface do animal que vai ser chamada. IMPORTANTE que os nomes estejam iguais aos do construtor do back end
// ex: no construtor do back vai ter lá "this.Id = id;" o valor aqui precisa ser "id".
export interface Animal{
    id: number;
    name: string;
    foto: string;
}
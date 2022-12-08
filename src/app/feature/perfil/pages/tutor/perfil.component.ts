import { Component, OnInit } from '@angular/core';
import { AnimalType, PerfilService } from 'src/app/feature/perfil/services/perfil.service';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { Animal, Especie, Raca, Sexos } from 'src/app/core/interfaces/Animal';
import { AnimalServiceService } from '../../../carteirinha/services/animal-service.service';
import { RGA } from 'src/app/core/interfaces/Rga';
import { RgaService } from 'src/app/feature/rga/services/rga.service';

declare var window: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  formAddModal: any;
  deleteModal: any;
  //a variavel do tipo animal
  public animalfake$!: AnimalType[];  
  public animals$!: Animal[];
  public rgas$!: RGA[];
  public especs$!: Especie[];
  public racas$!: Raca[];
  public sexos$!: Sexos[];
  private ngDestroyed$ = new Subject();

  constructor(private rgaService: RgaService, private animaisService: AnimalServiceService, private animalFake: PerfilService) { }
  selectedItem2 = '';
  
  ngOnInit(): void {
    //o metodo sendo chamado
    this.animaisService.getAnimals()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(animalData => this.animals$ = animalData); 
    //os parametros sendo passados
    this.rgaService.getRgaList()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(rgaData => this.rgas$ = rgaData); 

    this.animalFake.getMock()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(animalData => this.animalfake$ = animalData); 

    this.animaisService.getEspecies()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(data => this.especs$ = data); 
    this.animaisService.getRacas()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(data => this.racas$ = data); 
    this.animaisService.getSexos()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(data => this.sexos$ = data); 

    this.formAddModal = new window.bootstrap.Modal(
      document.getElementById("addAnimal")
    );
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteAnimal")
    );
    //versao do metodo de cima, mas que acessa o back mesmo
    //this.animalService.getAllAnimal()
  //  .pipe(takeUntil(this.ngDestroyed$))
    //.subscribe(animalData => this.animals$ = animalData);
  }

  openAddModal() {
    this.formAddModal.show();
  }
  openDeleteModal() {
    this.deleteModal.show();
  }

  addAnimal(animal: Animal){
    this.animaisService.addAnimal(animal).subscribe();
    this.formAddModal.hide();
  }
  deleteAnimal(id: number){
    this.animaisService.deleteAnimal(id).subscribe();
    this.deleteModal.hide();
  }

  onSelected2(value: string): void {
    this.selectedItem2 = value;
  }

}


/*
  O que eu fiz foi, criar um atributo que leva o tipo animal que a gente criou, depois eu chamei o metodo
  que chama os animais no ngOnInit, que vai executar ele sempre que a pagina de perfil for acionada, e coloquei
  como parametros pra ele o atributo do tipo animal.

  Esse negocio de ngDestroyed é pra quando sair da pagina jogar fora o conteudo pra n pesar na memoria.@angular
  
  tendeu?simm

  okok
  o animalservice é algum arquivo?

  animalService é um atributo do tipo Service, no caso é o "perfil.service.ts"
*/

/* 
  a unica coisa que vai mudar aqui, é que em vez de chamar o mock quando iniciar, ele vai chamar
  o metodo que a gente criou que puxa o back, e tambem que a variavel que guarda o tipo animal,
  agora vai guardar a interface que a gente criou

  agora n vai mais funcionar, pq o metodo nem existe no back, mas quando existir, vc só passar o link do
  metodo, e a interface vc vai por os mesmos valores que ta no back, e pronto, conforme colocar animal
  no banco de dados, vai aparecendo mais cards. tendeu?

  eu acho que sim

  pode perguntar se tiver duvida, o link do metodo vai no service ne? 
  issoooo
  acho que seu continuar fazendo vou entender melhor, eu entendi agr pq tava perdida 

  sim sim, eu peguei na pratica mesmo, fui fuçando um monte de coisa ate entender, mas dps q vc
  pega, é de boa pra repetir

 sim, sim, muito obrigada danii

 magina po, qualquer coisa só chamar, vou tentar mexer no rga aqui tabomm
*/

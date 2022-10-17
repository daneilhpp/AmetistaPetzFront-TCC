import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CarteirinhaService, VaccineAnimalType } from '../services/carteirinha.service';

declare var window: any;

@Component({
  selector: 'app-carteirinha',
  templateUrl: './carteirinha.component.html',
  styleUrls: ['./carteirinha.component.css']
})
export class CarteirinhaComponent implements OnInit, OnDestroy {
  formAddModal: any;
  removeModal: any;
  public animals$!: VaccineAnimalType[];
  private ngDestroyed$ = new Subject();
  public vaccineList!: VaccineAnimalType[];

  constructor(private carteirinhaService: CarteirinhaService) { }

  ngOnInit(): void {
    this.carteirinhaService.getMock()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(animalData => this.animals$ = animalData);

    this.formAddModal = new window.bootstrap.Modal(
      document.getElementById("addVaccine")
    );
    this.removeModal = new window.bootstrap.Modal(
      document.getElementById("removeVaccine")
    );
  }

  openAddModal() {
    this.formAddModal.show();
  }
  closeAddModal() {
    //this.addAnimalVaccine();
    this.formAddModal.hide();
  }
  openRemoveModal() {
    this.removeModal.show();
  }
  closeRemoveModal() {
    //this.deleteAnimalVaccine(this.animals$.id);
    this.removeModal.hide();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.complete();
  }

  getAnimalVaccineList() {
    // aqui nesse get, você precisa fazer a inscrição no observer (no caso, esse serviço aqui)
    this.carteirinhaService.getAnimalVaccineList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(vaccineData => this.vaccineList = vaccineData);
  }
  // pra que serve o ngDestroyed?
  // da uma lida em ciclo de vida de hooks do angular. o ngDestroyed, que fica ali no ngOnDestroy(), é pra quando esse componente não for mais renderizado, parar de ficar inscrito escutando mudanças no seu serviço ou no observable qualquer. Se ele ficar inscrito o tempo todo, acaba gerando vazamento de memória na aplicação
  // saquei
  //então nunca esquece. Todo service que retorna um observable, precisa ser inscrito.
  // se você nao se inscrever no Observable, ele não vai executar nenhuma ação
  // então precisa por em todos os métodos?
  // só nos que retornam observable
  // okok, vc acha que os metodos que eu escrevi estão corretos? eu to usando os que tao feitos no back,
  // ss, estão certinhos
  // ufa ksksk
  // eu vi também que seu grupo não fez os testes unitários de nada... ja aproveita p fazer pelo menos desse da carteirinha
  // entao, disseram q fizeram teste da parte do back, fui até eu que fiz a branch, aí mandaram o link e eu anexei na tarefa, n sei se ta certo, se não tiver eu faço dessa parte
  // só fizeram uma migration, mas teste não teve nada feito. Já aproveita p fazer o daqui mesmo, pra ter uma ideia de como usa teste unitário
  // okok, ai faria com o specs como se fosse adicionar uma vacina por exemplo?
  //vai ali no carteirinha service spec pra eu te mostrar um exemplo de como fazer, e o resto você pode tentar fazer 
  addAnimalVaccine(vaccineAnimalType: VaccineAnimalType) {
    this.carteirinhaService.addAnimalVaccine(vaccineAnimalType).subscribe();
  }

  deleteAnimalVaccine(id: number) {
    this.carteirinhaService.deleteAnimalVaccine(id).subscribe();
  }

  deleteAllAnimalVaccine() {
    this.carteirinhaService.deleteAllAnimalVaccine();
  }
}



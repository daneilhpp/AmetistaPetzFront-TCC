
import { Component, OnInit } from '@angular/core';
import { AnimalType, PerfildService } from 'src/app/feature/perfil/services/perfild.service';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { Animal } from 'src/app/core/interfaces/Animal';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})
export class VetComponent implements OnInit {

   //a variavel do tipo animal
   public animals$!: AnimalType[];  
   //public animals$!: Animal[];
   private ngDestroyed$ = new Subject();

  constructor(private animalService: PerfildService) { }

  ngOnInit(): void {
    //o metodo sendo chamado
    this.animalService.getMock()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(animalData => this.animals$ = animalData); 
    //os parametros sendo passados
  }

  

}

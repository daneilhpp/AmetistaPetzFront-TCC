import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RgaAnimalType, RgaService } from 'src/app/feature/rga/services/rga.service';

declare var window: any;

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {
  createModal: any;
  public rgas$!: RgaAnimalType[];
  private ngDestroyed$ = new Subject();

  constructor(private rgaService: RgaService) { }

  ngOnInit(): void {
    this.rgaService.getRgaList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(rgaData => this.rgas$ = rgaData);
    this.createModal = new window.bootstrap.Modal(
      document.getElementById("openCreate")
    );

  }
  openCreateModal() {
    this.createModal.show();
  }
  closeSaveModal() {
    //this.addAnimalVaccine();
    this.createModal.hide();
  }

}

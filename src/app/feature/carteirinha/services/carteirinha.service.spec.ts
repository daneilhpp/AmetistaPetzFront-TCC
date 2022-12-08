import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarteirinhaService, VaccineAnimalType } from './carteirinha.service';
import { Card } from 'src/app/core/interfaces/Carteirinha';

describe('CarteirinhaService', () => {
  let service: CarteirinhaService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CarteirinhaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCards should return cards', (done)=> {
    const Cards: Card[] =[
      {id: 1, animalIdAnimal: 1, dataAdicao: new Date()},
      {id: 2, animalIdAnimal: 2, dataAdicao: new Date()},
      {id: 3, animalIdAnimal: 3, dataAdicao: new Date()}
    ];

    service.getVaccineCardList().subscribe(data => {
      expect(data).toEqual(Cards);
      done();
    })
  });
});




import { TestBed } from '@angular/core/testing';

import { CarteirinhaService } from './carteirinha.service';

describe('CarteirinhaService', () => {
  let service: CarteirinhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteirinhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
// roda no seu terminal o comando   npm run test
// ta carregando , apareceu algumas coisas, vou colar oq apareceu no terminal
// Member 'vaccineList' implicitly has an 'any' type.
// deu outro erro mas n tem a ver, e abriu uma aba no google - Incomplete: No specs found, , randomized with seed 44595
// commita tudo isso ai só pra eu b
it('Should return an vaccine array', (done) => {
    //stub
    //arrange
    const stubVaccine = [
      { animalName: 'name', id: 1, vaccine: 'teste1', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
      { animalName: 'name', id: 2, vaccine: 'teste2', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
      { animalName: 'name', id: 3, vaccine: 'teste3', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
    ];

    //act
    service.getMock().subscribe(data => {
      //assert
      expect(data).toEqual(stubVaccine);
      done();
    });

  });
});




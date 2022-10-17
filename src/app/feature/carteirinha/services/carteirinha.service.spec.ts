import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarteirinhaService } from './carteirinha.service';

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

// https://www.testim.io/blog/testing-angular-services/
it('Should return an vaccine array', (done) => {
    //stub
    //arrange
    const stubVaccine = [
      { animalName: 'name', id: 1, vaccine: 'teste1', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665) },
      { animalName: 'name', id: 2, vaccine: 'teste2', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665) },
      { animalName: 'name', id: 3, vaccine: 'teste3', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665) },
    ];

    //act
    service.getMock().subscribe(data => {
      //assert
      expect(data).toEqual(stubVaccine);
      done();
    });

  });
});




import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RgaService } from './rga.service';

describe('RgaService', () => {
  let service: RgaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RgaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return an rga array', (done) => {
    const stubRga = [
      { id: 1, nomeAnimal: 'Rosa', sexo: 'Femea', especie: 'Canina', raca: 'Pitbull', cor: 'Marrom', nascimento: new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 123456789123456, rga: 1234567, foto: 'assets/fotomock2.jpg'},
      { id: 2, nomeAnimal: 'Nome do Animal', sexo: 'Macho', especie: '??', raca: 'Elmo', cor: 'Vermelho', nascimento: new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 124124241342453, rga: 1111111, foto: 'assets/fotomock.jpg' },
      { id: 3, nomeAnimal: 'Teste', sexo: 'Teste', especie: 'Teste', raca: 'Teste', cor: 'Teste', nascimento: new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 111111111111111, rga: 2222222, foto: 'assets/fotomock2.jpg'}
    ];

    service.getRgaMockList().subscribe(data => {
      expect(data).toEqual(stubRga);
      done();
    });

  });

  it('Should return an rga by id from array', (done) => {
    const stubRga = [
      { id: 1, nomeAnimal: 'Rosa', sexo: 'Femea', especie: 'Canina', raca: 'Pitbull', cor: 'Marrom', nascimento: new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 123456789123456, rga: 1234567, foto: 'assets/fotomock2.jpg'},
      { id: 2, nomeAnimal: 'Nome do Animal', sexo: 'Macho', especie: '??', raca: 'Elmo', cor: 'Vermelho', nascimento: new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 124124241342453, rga: 1111111, foto: 'assets/fotomock.jpg' },
      { id: 3, nomeAnimal: 'Teste', sexo: 'Teste', especie: 'Teste', raca: 'Teste', cor: 'Teste', nascimento: new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 111111111111111, rga: 2222222, foto: 'assets/fotomock2.jpg'}
    ];

    service.getRgaMockList().subscribe(data => {
      expect(data.find(x => x.id === 3)).toEqual(stubRga.find(x => x.id === 3));
      done();
    });

  });
});

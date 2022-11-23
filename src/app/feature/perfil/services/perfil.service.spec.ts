import { TestBed } from '@angular/core/testing';

import { PerfilService } from '../../perfil/services/perfil.service';

describe('PerfilService', () => {
  let service: PerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

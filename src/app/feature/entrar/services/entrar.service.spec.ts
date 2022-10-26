import { TestBed } from '@angular/core/testing';

import { EntrarService } from './entrar.service';

describe('EntrarService', () => {
  let service: EntrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

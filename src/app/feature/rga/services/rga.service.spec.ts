import { TestBed } from '@angular/core/testing';

import { RgaService } from './rga.service';

describe('RgaService', () => {
  let service: RgaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RgaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

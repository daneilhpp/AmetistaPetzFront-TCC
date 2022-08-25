import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaComponent } from './denuncia.component';

describe('DenunciaComponent', () => {
  let component: DenunciaComponent;
  let fixture: ComponentFixture<DenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

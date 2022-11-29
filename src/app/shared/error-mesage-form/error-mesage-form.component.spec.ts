import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMesageFormComponent } from './error-mesage-form.component';

describe('ErrorMesageFormComponent', () => {
  let component: ErrorMesageFormComponent;
  let fixture: ComponentFixture<ErrorMesageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMesageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMesageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

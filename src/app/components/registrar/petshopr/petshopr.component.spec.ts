import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshoprComponent } from './petshopr.component';

describe('PetshoprComponent', () => {
  let component: PetshoprComponent;
  let fixture: ComponentFixture<PetshoprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetshoprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshoprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

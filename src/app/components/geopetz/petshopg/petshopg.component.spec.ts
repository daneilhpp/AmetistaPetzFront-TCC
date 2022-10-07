import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopgComponent } from './petshopg.component';

describe('PetshopgComponent', () => {
  let component: PetshopgComponent;
  let fixture: ComponentFixture<PetshopgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetshopgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

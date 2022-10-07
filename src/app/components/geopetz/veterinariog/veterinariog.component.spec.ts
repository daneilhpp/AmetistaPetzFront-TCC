import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariogComponent } from './veterinariog.component';

describe('VeterinariogComponent', () => {
  let component: VeterinariogComponent;
  let fixture: ComponentFixture<VeterinariogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinariogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

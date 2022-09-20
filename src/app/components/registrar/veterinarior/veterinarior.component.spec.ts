import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariorComponent } from './veterinarior.component';

describe('VeterinariorComponent', () => {
  let component: VeterinariorComponent;
  let fixture: ComponentFixture<VeterinariorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinariorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

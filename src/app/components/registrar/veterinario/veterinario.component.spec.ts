import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioComponent } from './veterinario.component';

describe('VeterinarioComponent', () => {
  let component: VeterinarioComponent;
  let fixture: ComponentFixture<VeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

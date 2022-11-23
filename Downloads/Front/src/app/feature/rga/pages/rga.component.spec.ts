import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgaComponent } from './rga.component';

describe('RgaComponent', () => {
  let component: RgaComponent;
  let fixture: ComponentFixture<RgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

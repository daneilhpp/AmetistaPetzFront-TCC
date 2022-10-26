import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoPetshopComponent } from './geo-petshop.component';

describe('GeoPetshopComponent', () => {
  let component: GeoPetshopComponent;
  let fixture: ComponentFixture<GeoPetshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoPetshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteirinhaComponent } from './carteirinha.component';

describe('CarteirinhaComponent', () => {
  let component: CarteirinhaComponent;
  let fixture: ComponentFixture<CarteirinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteirinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteirinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

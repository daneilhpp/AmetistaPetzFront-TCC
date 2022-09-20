import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdocaorComponent } from './adocaor.component';

describe('AdocaorComponent', () => {
  let component: AdocaorComponent;
  let fixture: ComponentFixture<AdocaorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdocaorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdocaorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

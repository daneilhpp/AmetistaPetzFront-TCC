import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeopetzComponent } from './geopetz.component';

describe('GeopetzComponent', () => {
  let component: GeopetzComponent;
  let fixture: ComponentFixture<GeopetzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeopetzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeopetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

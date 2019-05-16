import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrimeraVezPage } from './pantalla-primera-vez.page';

describe('PantallaPrimeraVezPage', () => {
  let component: PantallaPrimeraVezPage;
  let fixture: ComponentFixture<PantallaPrimeraVezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaPrimeraVezPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPrimeraVezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

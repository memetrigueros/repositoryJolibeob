import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SojaPage } from './soja.page';

describe('SojaPage', () => {
  let component: SojaPage;
  let fixture: ComponentFixture<SojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SojaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

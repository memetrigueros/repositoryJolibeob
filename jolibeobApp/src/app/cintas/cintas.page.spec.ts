import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CintasPage } from './cintas.page';

describe('CintasPage', () => {
  let component: CintasPage;
  let fixture: ComponentFixture<CintasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CintasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CintasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonchePage } from './ponche.page';

describe('PonchePage', () => {
  let component: PonchePage;
  let fixture: ComponentFixture<PonchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonchePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

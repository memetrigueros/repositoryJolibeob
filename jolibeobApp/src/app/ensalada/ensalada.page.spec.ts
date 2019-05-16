import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaladaPage } from './ensalada.page';

describe('EnsaladaPage', () => {
  let component: EnsaladaPage;
  let fixture: ComponentFixture<EnsaladaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsaladaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsaladaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

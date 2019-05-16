import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerenjenasPage } from './berenjenas.page';

describe('BerenjenasPage', () => {
  let component: BerenjenasPage;
  let fixture: ComponentFixture<BerenjenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerenjenasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerenjenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

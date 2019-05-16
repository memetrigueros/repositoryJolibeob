import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolletesPage } from './molletes.page';

describe('MolletesPage', () => {
  let component: MolletesPage;
  let fixture: ComponentFixture<MolletesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolletesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolletesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgaPage } from './alga.page';

describe('AlgaPage', () => {
  let component: AlgaPage;
  let fixture: ComponentFixture<AlgaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

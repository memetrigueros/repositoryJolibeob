import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulgurPage } from './bulgur.page';

describe('BulgurPage', () => {
  let component: BulgurPage;
  let fixture: ComponentFixture<BulgurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulgurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulgurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

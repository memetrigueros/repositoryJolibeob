import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerdoPage } from './cerdo.page';

describe('CerdoPage', () => {
  let component: CerdoPage;
  let fixture: ComponentFixture<CerdoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerdoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerdoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

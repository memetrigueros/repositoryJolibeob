import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HilachasPage } from './hilachas.page';

describe('HilachasPage', () => {
  let component: HilachasPage;
  let fixture: ComponentFixture<HilachasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HilachasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HilachasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

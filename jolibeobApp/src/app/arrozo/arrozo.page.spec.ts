import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrozoPage } from './arrozo.page';

describe('ArrozoPage', () => {
  let component: ArrozoPage;
  let fixture: ComponentFixture<ArrozoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrozoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrozoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

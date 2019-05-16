import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiambrePage } from './fiambre.page';

describe('FiambrePage', () => {
  let component: FiambrePage;
  let fixture: ComponentFixture<FiambrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiambrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiambrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

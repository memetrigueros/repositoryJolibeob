import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilePage } from './chile.page';

describe('ChilePage', () => {
  let component: ChilePage;
  let fixture: ComponentFixture<ChilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GazpachoPage } from './gazpacho.page';

describe('GazpachoPage', () => {
  let component: GazpachoPage;
  let fixture: ComponentFixture<GazpachoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GazpachoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GazpachoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NishimePage } from './nishime.page';

describe('NishimePage', () => {
  let component: NishimePage;
  let fixture: ComponentFixture<NishimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NishimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NishimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorcillaPage } from './morcilla.page';

describe('MorcillaPage', () => {
  let component: MorcillaPage;
  let fixture: ComponentFixture<MorcillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorcillaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorcillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

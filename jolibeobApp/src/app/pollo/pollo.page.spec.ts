import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolloPage } from './pollo.page';

describe('PolloPage', () => {
  let component: PolloPage;
  let fixture: ComponentFixture<PolloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

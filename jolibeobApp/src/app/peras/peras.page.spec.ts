import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerasPage } from './peras.page';

describe('PerasPage', () => {
  let component: PerasPage;
  let fixture: ComponentFixture<PerasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

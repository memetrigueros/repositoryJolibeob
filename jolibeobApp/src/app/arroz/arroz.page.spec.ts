import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrozPage } from './arroz.page';

describe('ArrozPage', () => {
  let component: ArrozPage;
  let fixture: ComponentFixture<ArrozPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrozPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrozPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

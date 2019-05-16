import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollitoPage } from './rollito.page';

describe('RollitoPage', () => {
  let component: RollitoPage;
  let fixture: ComponentFixture<RollitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollitoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

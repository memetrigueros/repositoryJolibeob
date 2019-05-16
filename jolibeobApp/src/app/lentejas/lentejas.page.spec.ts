import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LentejasPage } from './lentejas.page';

describe('LentejasPage', () => {
  let component: LentejasPage;
  let fixture: ComponentFixture<LentejasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LentejasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LentejasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

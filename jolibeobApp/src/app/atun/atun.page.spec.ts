import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtunPage } from './atun.page';

describe('AtunPage', () => {
  let component: AtunPage;
  let fixture: ComponentFixture<AtunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtunPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

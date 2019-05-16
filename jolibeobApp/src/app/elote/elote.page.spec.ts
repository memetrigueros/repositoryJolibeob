import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElotePage } from './elote.page';

describe('ElotePage', () => {
  let component: ElotePage;
  let fixture: ComponentFixture<ElotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

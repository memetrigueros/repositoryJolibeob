import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GambasPage } from './gambas.page';

describe('GambasPage', () => {
  let component: GambasPage;
  let fixture: ComponentFixture<GambasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GambasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GambasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

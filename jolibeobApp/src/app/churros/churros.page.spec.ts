import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurrosPage } from './churros.page';

describe('ChurrosPage', () => {
  let component: ChurrosPage;
  let fixture: ComponentFixture<ChurrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrocoliPage } from './brocoli.page';

describe('BrocoliPage', () => {
  let component: BrocoliPage;
  let fixture: ComponentFixture<BrocoliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrocoliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrocoliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

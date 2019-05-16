import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PataconesPage } from './patacones.page';

describe('PataconesPage', () => {
  let component: PataconesPage;
  let fixture: ComponentFixture<PataconesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PataconesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PataconesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

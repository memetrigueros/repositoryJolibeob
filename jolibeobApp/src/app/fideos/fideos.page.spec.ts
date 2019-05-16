import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FideosPage } from './fideos.page';

describe('FideosPage', () => {
  let component: FideosPage;
  let fixture: ComponentFixture<FideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

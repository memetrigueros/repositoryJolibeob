import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoPage } from './coco.page';

describe('CocoPage', () => {
  let component: CocoPage;
  let fixture: ComponentFixture<CocoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

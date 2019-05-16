import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicadoPage } from './picado.page';

describe('PicadoPage', () => {
  let component: PicadoPage;
  let fixture: ComponentFixture<PicadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallinaPage } from './gallina.page';

describe('GallinaPage', () => {
  let component: GallinaPage;
  let fixture: ComponentFixture<GallinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

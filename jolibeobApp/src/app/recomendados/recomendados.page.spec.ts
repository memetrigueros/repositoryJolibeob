import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendadosPage } from './recomendados.page';

describe('RecomendadosPage', () => {
  let component: RecomendadosPage;
  let fixture: ComponentFixture<RecomendadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

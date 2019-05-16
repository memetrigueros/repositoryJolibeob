import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YucaPage } from './yuca.page';

describe('YucaPage', () => {
  let component: YucaPage;
  let fixture: ComponentFixture<YucaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YucaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YucaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

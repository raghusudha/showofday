import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab4Component } from './tab4.component';

describe('Tab4Component', () => {
  let component: Tab4Component;
  let fixture: ComponentFixture<Tab4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab4Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

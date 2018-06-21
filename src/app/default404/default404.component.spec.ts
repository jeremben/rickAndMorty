import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Default404Component } from './default404.component';

describe('Default404Component', () => {
  let component: Default404Component;
  let fixture: ComponentFixture<Default404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Default404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Default404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form5Component } from './form5.component';

describe('Form5Component', () => {
  let component: Form5Component;
  let fixture: ComponentFixture<Form5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Form5Component]
    });
    fixture = TestBed.createComponent(Form5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

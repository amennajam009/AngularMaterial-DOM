import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComComponent } from './testing-com.component';

describe('TestingComComponent', () => {
  let component: TestingComComponent;
  let fixture: ComponentFixture<TestingComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingComComponent]
    });
    fixture = TestBed.createComponent(TestingComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

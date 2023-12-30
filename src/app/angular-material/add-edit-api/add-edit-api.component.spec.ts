import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditApiComponent } from './add-edit-api.component';

describe('AddEditApiComponent', () => {
  let component: AddEditApiComponent;
  let fixture: ComponentFixture<AddEditApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditApiComponent]
    });
    fixture = TestBed.createComponent(AddEditApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

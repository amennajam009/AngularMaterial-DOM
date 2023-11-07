import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDMainComponent } from './crud-main.component';

describe('CRUDMainComponent', () => {
  let component: CRUDMainComponent;
  let fixture: ComponentFixture<CRUDMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CRUDMainComponent]
    });
    fixture = TestBed.createComponent(CRUDMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

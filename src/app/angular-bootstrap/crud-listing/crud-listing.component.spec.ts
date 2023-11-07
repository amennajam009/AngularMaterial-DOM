import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudListingComponent } from './crud-listing.component';

describe('CrudListingComponent', () => {
  let component: CrudListingComponent;
  let fixture: ComponentFixture<CrudListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudListingComponent]
    });
    fixture = TestBed.createComponent(CrudListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

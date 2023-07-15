import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReviewMobileComponent } from './client-review-mobile.component';

describe('ClientReviewMobileComponent', () => {
  let component: ClientReviewMobileComponent;
  let fixture: ComponentFixture<ClientReviewMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientReviewMobileComponent]
    });
    fixture = TestBed.createComponent(ClientReviewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

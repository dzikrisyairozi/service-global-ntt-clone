import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReviewMediumComponent } from './client-review-medium.component';

describe('ClientReviewMediumComponent', () => {
  let component: ClientReviewMediumComponent;
  let fixture: ComponentFixture<ClientReviewMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientReviewMediumComponent]
    });
    fixture = TestBed.createComponent(ClientReviewMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

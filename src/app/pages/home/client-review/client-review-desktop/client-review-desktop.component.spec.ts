import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReviewDesktopComponent } from './client-review-desktop.component';

describe('ClientReviewDesktopComponent', () => {
  let component: ClientReviewDesktopComponent;
  let fixture: ComponentFixture<ClientReviewDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientReviewDesktopComponent]
    });
    fixture = TestBed.createComponent(ClientReviewDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

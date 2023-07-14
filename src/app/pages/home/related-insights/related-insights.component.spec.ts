import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedInsightsComponent } from './related-insights.component';

describe('RelatedInsightsComponent', () => {
  let component: RelatedInsightsComponent;
  let fixture: ComponentFixture<RelatedInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedInsightsComponent]
    });
    fixture = TestBed.createComponent(RelatedInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

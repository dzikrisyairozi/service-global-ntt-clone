import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOverviewMobileComponent } from './service-overview-mobile.component';

describe('ServiceOverviewMobileComponent', () => {
  let component: ServiceOverviewMobileComponent;
  let fixture: ComponentFixture<ServiceOverviewMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOverviewMobileComponent]
    });
    fixture = TestBed.createComponent(ServiceOverviewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

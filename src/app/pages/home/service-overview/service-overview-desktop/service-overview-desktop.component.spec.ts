import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOverviewDesktopComponent } from './service-overview-desktop.component';

describe('ServiceOverviewDesktopComponent', () => {
  let component: ServiceOverviewDesktopComponent;
  let fixture: ComponentFixture<ServiceOverviewDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOverviewDesktopComponent]
    });
    fixture = TestBed.createComponent(ServiceOverviewDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

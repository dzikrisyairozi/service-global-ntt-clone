import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PingCircleComponent } from './ping-circle.component';

describe('PingCircleComponent', () => {
  let component: PingCircleComponent;
  let fixture: ComponentFixture<PingCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PingCircleComponent]
    });
    fixture = TestBed.createComponent(PingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

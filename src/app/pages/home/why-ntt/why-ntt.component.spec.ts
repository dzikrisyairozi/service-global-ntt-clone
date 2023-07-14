import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNttComponent } from './why-ntt.component';

describe('WhyNttComponent', () => {
  let component: WhyNttComponent;
  let fixture: ComponentFixture<WhyNttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyNttComponent]
    });
    fixture = TestBed.createComponent(WhyNttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

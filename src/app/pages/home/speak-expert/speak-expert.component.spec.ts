import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakExpertComponent } from './speak-expert.component';

describe('SpeakExpertComponent', () => {
  let component: SpeakExpertComponent;
  let fixture: ComponentFixture<SpeakExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakExpertComponent]
    });
    fixture = TestBed.createComponent(SpeakExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

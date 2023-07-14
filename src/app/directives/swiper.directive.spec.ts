import { SwiperDirective } from './swiper.directive';
import { ElementRef } from '@angular/core';

describe('SwiperDirective', () => {
  it('should create an instance', () => {
    const nativeElement = document.createElement('div'); // Create a native DOM element
    const elementRef = new ElementRef<HTMLElement>(nativeElement); // Create an ElementRef instance
    
    const directive = new SwiperDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});

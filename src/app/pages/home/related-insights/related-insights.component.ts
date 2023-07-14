import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';


@Component({
  selector: 'app-related-insights',
  templateUrl: './related-insights.component.html',
  styleUrls: ['./related-insights.component.css']
})


export class RelatedInsightsComponent {
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  ngAfterViewInit(): void {
    register();
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onActiveIndexChange() {
    console.log(this.swiper?.activeIndex);
  }
}

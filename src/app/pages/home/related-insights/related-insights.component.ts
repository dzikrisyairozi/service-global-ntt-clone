import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';

interface Insight {
  imageUrl: string;
  title: string;
}

@Component({
  selector: 'app-related-insights',
  templateUrl: './related-insights.component.html',
  styleUrls: ['./related-insights.component.css'],
})
export class RelatedInsightsComponent {
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  insights: Insight[] = [
    {
      imageUrl:
        'https://pbs.twimg.com/media/FTims2dXoAEwf7R?format=jpg&name=large',
      title:
        'Detailed data delivers a fan-first experience at the Tour de France',
    },
    {
      imageUrl: 'https://i.ibb.co/9T6JL9c/Untitled.png',
      title: "NTT's Managd Campus Networks with Cisco Catalyst Center",
    },
    {
      imageUrl:
        'https://i.ibb.co/BgythNs/image-JP-Recovery-Services-bad-debt-1.png',
      title: 'Gartner Predicts 2023',
    },
    {
      imageUrl: 'https://i.ibb.co/nQTzQRM/FTims2d-Xo-AEwf7-R.jpg',
      title:
        'Smart cycling: how IoT and edge computing power the Tour de France',
    },
  ];

  ngAfterViewInit(): void {
    register();
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onActiveIndexChange() {
    console.log(this.swiper?.activeIndex);
  }
}

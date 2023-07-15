import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';

interface Insight {
  imageUrl: string;
  title: string;
  tag?: string;
}

@Component({
  selector: 'app-related-insights',
  template: `
    <section class="flex flex-col px-[22px] py-[40px] sm:p-[80px]">
      <p class="text-primary text-[40px]">Related insights and resources</p>
      <div class="mt-[40px]">
        <swiper-container
          initial-slide="0"
          slides-per-view="3"
          class="hidden sm:flex gap-x-4"
        >
          <swiper-slide
            *ngFor="let insight of insights"
            style="background-image: url('{{ insight.imageUrl }}');"
            class="relative scale-95 bg-cover mx-2 shadow-lg transition duration-200 hover:scale-105 hover:shadow-2xl rounded cursor-pointer"
          >
            <div
              *ngIf="insight.tag"
              class="absolute bg-[#BAD2ED] px-[16px] py-[8px] text-xs rounded-full top-12 left-12 uppercase tracking-widest"
            >
              {{ insight.tag }}
            </div>
            <div class="flex items-end min-h-[512px]">
              <div
                class="flex flex-col w-full backdrop-blur-xl h-[196px] p-[40px]"
              >
                <p
                  class="text-white text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light"
                >
                  {{ insight.title }}
                </p>
                <p class="text-white mt-4 text-lg">Read more</p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <swiper-container
          initial-slide="0"
          slides-per-view="1"
          class="sm:hidden flex gap-x-4"
        >
        <swiper-slide
            *ngFor="let insight of insights"
            style="background-image: url('{{ insight.imageUrl }}');"
            class="relative scale-95 bg-cover mx-2 shadow-lg transition duration-200 hover:scale-105 hover:shadow-2xl rounded cursor-pointer"
          >
            <div
              *ngIf="insight.tag"
              class="absolute bg-[#BAD2ED] px-[16px] py-[8px] text-xs rounded-full top-12 left-12 uppercase tracking-widest"
            >
              {{ insight.tag }}
            </div>
            <div class="flex items-end min-h-[512px]">
              <div
                class="flex flex-col w-full backdrop-blur-xl h-[196px] p-[40px]"
              >
                <p
                  class="text-white text-[20px] font-light"
                >
                  {{ insight.title }}
                </p>
                <p class="text-white mt-4 text-[14px]">Read more</p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  `,
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
      tag: 'Edge as Service',
    },
    {
      imageUrl: 'https://i.ibb.co/9T6JL9c/Untitled.png',
      title: "NTT's Managd Campus Networks with Cisco Catalyst Center",
    },
    {
      imageUrl:
        'https://i.ibb.co/BgythNs/image-JP-Recovery-Services-bad-debt-1.png',
      title: 'Gartner Predicts 2023',
      tag: 'Innovation',
    },
    {
      imageUrl: 'https://i.ibb.co/yF2Nx9h/j3-EL6ypo-APF4-DJA2-GTQma-P-970-80-jpg.webp',
      title:
        'Smart cycling: how IoT and edge computing power the Tour de France',
      tag: 'Edge as Service',
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

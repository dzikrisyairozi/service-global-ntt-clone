import { Component, ElementRef, ViewChild } from '@angular/core';
import { InsightData } from 'src/app/constant/home/insights.data';
import { Insight } from 'src/app/types/insight.types';
import SwiperCore from 'swiper';
import { register } from 'swiper/element';

SwiperCore.use([]);

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
          #swiperContainer
          navigation
        >
          <swiper-slide
            *ngFor="let insight of insights"
            style="background-image: url('{{ insight.imageUrl }}');"
            class="relative scale-95 bg-cover mx-2 shadow-lg transition duration-200 hover:scale-105 hover:shadow-2xl rounded cursor-pointer"
          >
            <div
              *ngIf="insight.tag"
              class="absolute bg-light_gray px-[16px] py-[8px] text-xs rounded-full top-12 left-12 uppercase tracking-widest"
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
  @ViewChild('swiperContainer') swiperContainer?: ElementRef;
  @ViewChild('swiperContainerMobile') swiperContainerMobile?: ElementRef;


  ngOnInit(): void {
    register();

  }

  insights: Insight[] = InsightData;

}

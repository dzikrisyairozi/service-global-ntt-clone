import { Component } from '@angular/core';
import { HeroItems } from 'src/app/constant/home/hero-items.data';
import { HeroItemsProps } from 'src/app/types/hero-items.types';

@Component({
  selector: 'app-hero',
  template: `
    <swiper-container
      initial-slide="0"
      slides-per-view="1"
      class=""
      autoplay
      loop
      crossFade="true"
    >
      <swiper-slide
        *ngFor="let hero_item of hero_items"
        style="
    background-image: url('{{ hero_item.imageUrl }}');
  "
        class="bg-cover bg-no-repeat"
      >
        <section
          class="min-h-screen flex flex-col justify-center sm:justify-start items-center sm:items-start w-full"
        >
          <div
            class="text-white flex flex-col justify-start items-start py-[40px] px-[22px] sm:py-[128px] sm:px-[80px] w-full md:w-3/5"
          >
            <div class="flex gap-8">
              <p class="border-b-2 border-white pb-4">Tour de France</p>
              <p class="hidden sm:block border-b-2 border-gray-400 pb-4">
                2023 Global Customer Experience Report
              </p>
              <p class="hidden sm:block border-b-2 border-gray-400 pb-4">
                Software-defined Infrastructure Services
              </p>
              <p class="hidden sm:block border-b-2 border-gray-400 pb-4">
                Edge report
              </p>
            </div>
            <p
              class="text-[48px] sm:text-[70px] leading-none font-light mt-[24px]"
            >
              {{ hero_item.title }}
            </p>
            <p class="text-[20px] mt-[40px]">
              {{ hero_item.description }}
            </p>
            <app-arrow-link class="mt-[60px]">{{
              hero_item.actionDescription
            }}</app-arrow-link>
          </div>
        </section>
      </swiper-slide>
    </swiper-container>
  `,
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  hero_items: HeroItemsProps[] = HeroItems;
}

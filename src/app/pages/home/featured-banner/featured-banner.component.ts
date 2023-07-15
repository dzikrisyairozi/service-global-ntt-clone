import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-banner',
  template: `
    <section
      class="relative flex w-full bg-dark_blue justify-between overflow-hidden"
    >
      <div class="md:relative absolute md:flex w-full bottom-0 left-0">
        <div
          class="absolute w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-dark_blue border-[32px] md:border-[100px] border-light_gray md:border-primary rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
        ></div>
      </div>
      <div
        class="flex flex-col text-white justify-center items-center px-[22px] py-[20px] md:py-[80px] w-full"
      >
        <p class="text-[32px]  sm:text-[40px] text-center">
          Drive competitive advantage
        </p>
        <p class="sm:mt-[24px] text-[12px]  sm:text-[20px] text-center">
          NTT can help you drive competitive advantage by solving some of the
          major business and technology challenges that you face.
        </p>
        <app-arrow-link class="md:mt-[24px]">Speak to an expert</app-arrow-link>
      </div>
      <div class="md:relative absolute md:flex w-full top-0 right-0">
        <div
          class="absolute w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-dark_blue border-[32px] md:border-[100px] border-primary md:border-light_gray rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
    </section>
  `,
  styleUrls: ['./featured-banner.component.css'],
})
export class FeaturedBannerComponent {}

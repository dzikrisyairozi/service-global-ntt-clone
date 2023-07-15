import { Component } from '@angular/core';

interface HeroItemsProps {
  imageUrl: string;
  title: string;
  description: string;
  actionDescription: string;
}

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
        *ngFor="let hero_item of HeroItems"
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
  HeroItems: HeroItemsProps[] = [
    {
      imageUrl:
        'https://prodau-cdn.azureedge.net/-/media/ntt/global/homepage/ntt-v2/july-2023/tdf_homepage_banner_2800x1800.png?rev=79d0edd0ac8d4ba78ba13f56442c3bb6&mw=1440&hash=F33045D914BA4256C99BB09C76839505',
      title: 'Edge to fans',
      description:
        'Data and insights power the Tour de France and Tour de France Femmes avec Zwift.',
      actionDescription: 'See how',
    },
    {
      imageUrl:
        'https://prodau-cdn.azureedge.net/-/media/ntt/global/homepage/ntt-v2/june-2023/cx-ex-report-homepage-banner-2880x1800.jpg?rev=8c0acb993a034d4c868d7dc7e656b2fd&mw=1440&hash=E0F847128D3AEAF684F63430F8061722',
      title: '2023 Global Customer Experience Report',
      description:
        'The rise of AI, cloud and employee experience in shaping the CX of the future',
      actionDescription: 'Download the report',
    },
    {
      imageUrl:
        'https://prodau-cdn.azureedge.net/-/media/ntt/global/homepage/ntt-v2/june-2023/blog_sdis_090223_2880x1800.jpg?rev=8c2b69e3d5334415bdcd0ee6028b9551&mw=1440&hash=D5987C58B38CDCDCD57E6E3586C64DEB',
      title: 'Take control of evolving infrastructure',
      description:
        'Learn how to simplify IT operations and ensure lifecycle value as your infrastructure evolves.',
      actionDescription: 'Read the blog',
    },
    {
      imageUrl:
        'https://prodau-cdn.azureedge.net/-/media/ntt/global/insights/2023-edge-advantage-report/2880x1800.jpg?rev=fd2cff1c92f7467d8c7d0b5852e9286b&mw=1440&hash=D93DE68EC8A88CE6EC9D106DC864C17B',
      title: 'Secure, grow and excel with edge as a service',
      description:
        'The edge advantage brings intelligence, security and performance closer to where they’re needed.',
      actionDescription: 'Get the 2023 report',
    },
  ];
}

import { Component } from '@angular/core';
import { ClientReviewData } from 'src/app/constant/home/client-review.data';
import { ClientReviewProps } from 'src/app/types/client-review.types';

@Component({
  selector: 'app-client-review-mobile',
  template: `
    <div class="w-full">
      <swiper-container
        initial-slide="0"
        slides-per-view="1"
        autoplay
        loop
        class="w-full"
      >
        <swiper-slide
          *ngFor="let client_review of ClientReviews"
          class="flex flex-col justify-between items-end  h-[700px] w-full"
        >
          <div
            style="background-image: url('{{ client_review.bgImageUrl }}');"
            class="bg-cover h-[200px] w-full"
          ></div>
          <div class="w-full bg-white px-[22px] py-[80px]">
            <div class=""></div>
            <p class="text-[16px] font-normal">
              See the connection - {{ client_review.upTitle }}
            </p>
            <p class="mt-[35px] text-primary font-thin text-[24px]">
              {{ client_review.title }}
            </p>
            <p class="mt-[24px] text-[16px]">
              {{ client_review.description }}
            </p>
            <div class="">
              <app-arrow-link class="-ml-4" variant="primary">
                {{ client_review.caseStudy }}
              </app-arrow-link>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="flex bg-white flex-col ">
        <div
          class="bg-primary text-white px-[40px] py-[20px] mb-[24px] uppercase cursor-pointer"
        >
          <p>Related Service</p>
        </div>
        <div
          class="bg-white mb-[30px] pl-[40px] flex justify-between mr-16 transition duration-200 hover:text-primary group hover:mr-8"
        >
          <p class="font-light">Network as Service</p>
          <mat-icon class="text-primary font-thin"> arrow_forward </mat-icon>
        </div>
        <div
          class="bg-white mb-[30px] pl-[40px] flex justify-between mr-16 transition duration-200 hover:text-primary group hover:mr-8"
        >
          <p class="font-light">Cloud Services</p>
          <mat-icon class="text-primary font-thin"> arrow_forward </mat-icon>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./client-review-mobile.component.css'],
})
export class ClientReviewMobileComponent {
  ClientReviews: ClientReviewProps[] = ClientReviewData;
}

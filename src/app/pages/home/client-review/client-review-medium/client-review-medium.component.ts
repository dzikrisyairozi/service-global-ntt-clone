import { Component } from '@angular/core';
import { ClientReviewData } from 'src/app/constant/home/client-review.data';
import { ClientReviewProps } from 'src/app/types/client-review.types';

@Component({
  selector: 'app-client-review-medium',
  template: `
    <div class="w-full">
      <swiper-container
        initial-slide="0"
        slides-per-view="1"
        autoplay
        loop
        effect="fade"
        class="w-full"
      >
        <swiper-slide
          *ngFor="let client_review of ClientReviews"
          style="background-image: url('{{ client_review.bgImageUrl }}');"
          class="flex justify-between items-end bg-cover h-[700px] w-full"
        >
          <div class="w-full backdrop-blur-[96px] p-[80px] text-white">
            <div class=""></div>
            <p>See the connection - {{ client_review.upTitle }}</p>
            <p class="mt-[35px] text-[32px]">{{ client_review.title }}</p>
            <p class="mt-[24px] text-[16px]">
              {{ client_review.description }}
            </p>
            <div class="pt-[64px]">
              <app-arrow-link class="mt-[40px] -ml-4" variant="primary">
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
  styleUrls: ['./client-review-medium.component.css'],
})
export class ClientReviewMediumComponent {
  ClientReviews: ClientReviewProps[] = ClientReviewData;
}

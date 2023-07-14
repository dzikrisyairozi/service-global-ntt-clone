import { Component } from '@angular/core';

type TopFooterData = {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-top-footer',
  template: `
    <div class="flex w-full justify-between p-[80px] border-t-2 border-t-primary">
    <div class="flex w-full">
      <div class="w-full" *ngFor="let section of TOP_FOOTER_DATA">
        <p class="text-[12px] text-primary">{{ section.title }}</p>
        <div class="flex flex-col mt-6 text-[20px] font-light gap-y-[7px]">
          <a *ngFor="let item of section.items" class="cursor-pointer hover:text-primary">{{ item }}</a>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between w-1/4">
        <div class="flex w-full justify-end">
            <img src="../../../../assets/NTTLogo.svg" alt="">
        </div>
        <div class="flex w-full justify-center gap-x-4">
            <mat-icon class="text-gray-500 text-base" fontIcon="home"></mat-icon>
            <mat-icon class="text-gray-500 text-base" fontIcon="home"></mat-icon>
            <mat-icon class="text-gray-500 text-base" fontIcon="home"></mat-icon>
            <mat-icon class="text-gray-500 text-base" fontIcon="home"></mat-icon>
            <mat-icon class="text-gray-500 text-base" fontIcon="home"></mat-icon>
        </div>
    </div>
  </div>
  `,
  styleUrls: ['./top-footer.component.css']
})

export class TopFooterComponent {
  TOP_FOOTER_DATA: TopFooterData[] = [
    {
      title: 'SOLUTION',
      items: [
        'Hybrid Workplace',
        'Technology Modernization',
        'Digital Acceleration',
        'Connected Industries'
      ]
    },
    {
      title: 'SERVICES AND PRODUCTS',
      items: [
        'Network as a Service',
        'Multicloud as a Service',
        'Edge as a Service',
        'Software-defined Infrastructure Services',
        'Global Data Centers',
        'Digital Collaboration and CX'
      ]
    },
    {
      title: 'ABOUT NTT',
      items: [
        'Leadership',
        'Newsroom',
        'Locations',
        'Our partners',
        'Sustainability',
        'Innovation',
        'Industries',
        'Tour de France',
        'Red Bull Basement'
      ]
    },
  ];
}

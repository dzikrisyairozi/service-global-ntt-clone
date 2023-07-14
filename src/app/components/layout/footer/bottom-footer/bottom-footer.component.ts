import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-footer',
  template: `
      <div class="flex flex-col sm:flex-row w-full justify-between bg-primary p-[40px] sm:px-[80px] sm:py-[40px]">
        <ul class="hidden sm:flex sm:flex-wrap text-white text-xs gap-x-[2rem]">
          <li *ngFor="let item of FOOTER_ITEMS" class="cursor-pointer">{{ item }}</li>
        </ul>
        <ul class="sm:hidden flex text-white text-xs gap-x-[2rem]">
          <div class="flex flex-col gap-y-2">
            <li *ngFor="let item of FOOTER_ITEMS_MOBILE_LEFT" class="cursor-pointer">{{ item }}</li>
          </div>
          <div class="flex flex-col gap-y-2">
            <li *ngFor="let item of FOOTER_ITEMS_RIGHT" class="cursor-pointer">{{ item }}</li>
          </div>
        </ul>
        <div class="flex text-xs text-gray-300 mt-[40px] sm:mt-0">
          <p>Copyright © 2022 NTT Limited</p>
        </div>
      </div>
  `,
})
export class BottomFooterComponent {
  FOOTER_ITEMS: string[] = [
    'Contact us',
    'Legal',
    'Privacy',
    'Website terms of use',
    'Code of Conduct',
    'Cookie preferences',
    'Unsubscribe',
    'Report an ethics concern or fraud',
    'Modern slavery statement',
    'Sitemap',
    'Enforce my privacy rights',
    'Manage my communication preference'
  ];

  FOOTER_ITEMS_MOBILE_LEFT: string[] = [
    'Contact us',
    'Privacy',
    'Code of Conduct',
    'Unsubscribe',
    'Modern slavery statement',
    'Enforce my privacy rights',
  ];

  FOOTER_ITEMS_RIGHT: string[] = [
    'Legal',
    'Website terms of use',
    'Cookie preferences',
    'Report an ethics concern or fraud',
    'Sitemap',
    'Manage my communication preference'
  ];
}

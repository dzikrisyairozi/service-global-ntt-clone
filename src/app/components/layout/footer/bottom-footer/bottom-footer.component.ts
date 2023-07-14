import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-footer',
  template: `
      <div class="flex w-full justify-between bg-primary px-[80px] py-[40px]">
        <ul class="flex flex-wrap text-white text-xs gap-x-[2rem]">
          <li *ngFor="let item of FOOTER_ITEMS" class="cursor-pointer">{{ item }}</li>
        </ul>
        <div class="flex text-xs text-gray-300">
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
}

import { Component } from '@angular/core';

interface NavItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-header',
  template: `
    <header class="flex items-center border-b-4 border-b-primary h-[80px] divide-x-2">
      <a href="/" class="px-[30px] h-full flex justify-center items-center w-[180px]">
        <img src="../../../../assets/NTTLogo.svg" alt="">
      </a>
      <nav class="flex justify-between px-[30px] w-full h-full items-center">
        <div class="flex gap-10">
          <div *ngFor="let navItem of leftNavItems" class="flex h-[76px]">
            <button class="hover:text-primary hover:border-b-4 hover:border-b-primary">{{ navItem.label }}</button>
          </div>
        </div>
        <div class="flex gap-10">
          <div *ngFor="let navItem of rightNavItems" class="flex h-[76px]">
            <button class="hover:text-primary hover:border-b-4 hover:border-b-primary">{{ navItem.label }}</button>
          </div>
        </div>
      </nav>
      <div class="flex items-center justify-center p-6 ">
        <mat-icon class="text-primary font">language</mat-icon>
      </div>
      <div class="flex items-center justify-center p-6 ">
        <mat-icon class="text-primary">search</mat-icon>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  leftNavItems: NavItem[] = [
    { label: 'Solutions', link: '/solutions' },
    { label: 'Services and products', link: '/services' },
    { label: 'Insights and resources', link: '/resources' }
  ];

  rightNavItems: NavItem[] = [
    { label: 'About us', link: '/about' },
    { label: 'Careers', link: '/careers' },
    { label: 'Contact', link: '/contact' }
  ];
}

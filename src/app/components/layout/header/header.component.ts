import { Component } from '@angular/core';

interface NavItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-header',
  template: `
    <header class="flex items-center border-b-4 border-b-primary h-[80px] divide-x-2">
      <a href="/" class="px-[30px] h-[80px] flex justify-center items-center w-[180px]">
        <img src="../../../../assets/NTTLogo.svg" alt="" class="w-[180px] h-[80px]">
      </a>
      <nav class="flex justify-between sm:px-[30px] sm:w-full w-1/2 h-full items-center">
        <div class="sm:flex gap-10 hidden">
          <div *ngFor="let navItem of leftNavItems" class="flex h-[76px]">
            <button class="hover:text-primary hover:border-b-4 hover:border-b-primary">{{ navItem.label }}</button>
          </div>
        </div>
        <div class="lg:flex gap-10 hidden">
          <div *ngFor="let navItem of rightNavItems" class="flex h-[76px]">
            <button class="hover:text-primary hover:border-b-4 hover:border-b-primary">{{ navItem.label }}</button>
          </div>
        </div>
      </nav>
      <div class="hidden sm:flex items-center justify-center p-6 ">
        <mat-icon class="text-primary font">language</mat-icon>
      </div>
      <div class="flex items-center justify-center p-6 ">
        <mat-icon class="text-primary">search</mat-icon>
      </div>
      <div class="flex items-center justify-center p-6 lg:hidden">
        <mat-icon class="text-primary">menu</mat-icon>
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

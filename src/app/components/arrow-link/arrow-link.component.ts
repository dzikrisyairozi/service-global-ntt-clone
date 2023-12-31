import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-link',
  template: `
    <button
      [ngClass]="{
        ' bg-white text-primary transition duration-200 ease-in-out hover:bg-gray-200':
          variant === 'accent',
        ' bg-[#0FC8F2] text-black transition duration-200 ease-in-out hover:bg-accent':
          variant === 'primary'
      }"

      class="rounded-md px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg flex items-center group justify-center"
    >
      <p class="text-start font-thin text-sm">
        <ng-content></ng-content>
      </p>
      <mat-icon
        class="ml-4 font-thin text-[15px] transition duration-500 group-hover:ml-8 mt-2 animate-ease-in-out flex justify-center items-center"
      >
        arrow_forward
      </mat-icon>
    </button>
  `,
  styleUrls: ['./arrow-link.component.css'],
})
export class ArrowLinkComponent {
  @Input() variant: 'primary' | 'accent' = 'primary';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ping-circle',
  template: `
    <div
      class="relative w-[285px] h-[285px] rounded-full bg-white border-[24px] border-primary transition duration-500 ease-in-out hover:border-accent group"
    >
      <div
        class="absolute lg:flex flex-col items-center justify-center w-full h-full text-primary group-hover:text-accent"
      >
        <p class="text-16px sm:text-[24px] md:text-[32px] lg:text-[40px]">{{ title }}</p>
        <p class="text-center px-2">{{ description }}</p>
      </div>
      <div
        class="absolute top-0 w-full h-full rounded-full border-2 border-primary transition duration-500 ease-in-out group-hover:animate-custom-ping group-hover:border-accent"
      >
        <div
          class="w-full h-full rounded-full border-2 transition duration-500 ease-in-out border-primary group-hover:animate-custom-ping group-hover:border-accent"
        ></div>
      </div>
    </div>
  `,
})
export class PingCircleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-why-ntt',
  template: `
    <section class="flex flex-col p-[80px]">
      <p class="text-primary text-[40px]">Why NTT</p>
      <div class="sm:mt-[80px] flex flex-wrap justify-between gap-y-16 mx-16">
        <app-ping-circle
          title="7 billion"
          description="client engagements each year"
        ></app-ping-circle>
        <app-ping-circle
          title="2 billion"
          description="threats mitigated every year"
        ></app-ping-circle>
        <app-ping-circle
          title="190+"
          description="countries with network, cloud and data center services"
        ></app-ping-circle>
        <app-ping-circle
          title="600,000m2+"
          description="current and planned global data center space"
        ></app-ping-circle>
      </div>
    </section>
  `,
  styleUrls: ['./why-ntt.component.css'],
})
export class WhyNttComponent {}

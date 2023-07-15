import { Component } from '@angular/core';

@Component({
  selector: 'app-service-overview',
  template: `
    <section>
      <app-service-overview-desktop
        class="hidden sm:block"
      ></app-service-overview-desktop>
      <app-service-overview-mobile
        class="sm:hidden flex"
      ></app-service-overview-mobile>
    </section>
  `,
})
export class ServiceOverviewComponent {
  
}


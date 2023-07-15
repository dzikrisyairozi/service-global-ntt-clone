import { Component } from '@angular/core';

@Component({
  selector: 'app-client-review',
  template: `
    <section>
      <app-client-review-desktop class='hidden lg:block'></app-client-review-desktop>
      <app-client-review-medium class='hidden sm:block lg:hidden'></app-client-review-medium>
      <app-client-review-mobile class='sm:hidden block'></app-client-review-mobile>
    </section>
  `,
})
export class ClientReviewComponent {
  
}


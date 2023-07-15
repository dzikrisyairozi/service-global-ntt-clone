import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  template: `
    <main class="">
      <app-hero></app-hero>
      <app-service-overview></app-service-overview>
      <app-client-review></app-client-review>
      <app-featured-banner></app-featured-banner>
      <app-related-insights></app-related-insights>
      <app-why-ntt></app-why-ntt>
      <app-speak-expert></app-speak-expert>
    </main>
  `,
  styleUrls: ['./home.page.css'],
})
export class HomePage {}

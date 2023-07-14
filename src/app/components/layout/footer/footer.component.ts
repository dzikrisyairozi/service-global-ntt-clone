import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer> 
      <app-top-footer></app-top-footer>
      <app-bottom-footer></app-bottom-footer>
    </footer>
  `,
})
export class FooterComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-layout>
        <router-outlet></router-outlet>
      </app-layout>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NTT: Delivering digital transformation';
}

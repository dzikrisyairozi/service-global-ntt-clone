import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <app-header></app-header>
        <ng-content></ng-content>
      <app-footer></app-footer>
    </div>
  `
})
export class LayoutComponent {
  @Input() children: any;
}

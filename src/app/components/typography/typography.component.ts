import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  template: `
    <ng-container [ngSwitch]="variant">
        <h1 *ngSwitchCase="'j1'" [ngClass]="['font-averta', 'text-4xl', 'font-bold', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </h1>
        <h2 *ngSwitchCase="'j2'" [ngClass]="['font-averta', 'text-3xl', 'font-bold', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </h2>
        <h3 *ngSwitchCase="'h1'" [ngClass]="['font-averta', 'text-2xl', 'font-semibold', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </h3>
        <h4 *ngSwitchCase="'h2'" [ngClass]="['font-averta', 'text-xl', 'font-semibold', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </h4>
        <h5 *ngSwitchCase="'h3'" [ngClass]="['font-averta', 'text-lg', 'font-semibold', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </h5>
        <h6 *ngSwitchCase="'h4'" [ngClass]="['font-averta', 'text-base', 'font-bold', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </h6>
        <p *ngSwitchCase="'h5'" [ngClass]="['font-averta', 'text-base', 'font-semibold', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'h6'" [ngClass]="['font-averta', 'text-sm', 'font-semibold', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'s1'" [ngClass]="['text-lg', 'font-medium', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'s2'" [ngClass]="['text-base', 'font-medium', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'s3'" [ngClass]="['text-sm', 'font-medium', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'s4'" [ngClass]="['text-xs', 'font-medium', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'b1'" [ngClass]="['text-lg', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'b2'" [ngClass]="['text-base', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'b3'" [ngClass]="['text-sm', 'font-normal', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'c1'" [ngClass]="['text-xs', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <p *ngSwitchCase="'c2'" [ngClass]="['text-[11px]', 'leading-[14px]', colorClass, fontClass]" [ngStyle]="styleObject">
          <ng-content></ng-content>
        </p>
        <ng-container *ngSwitchDefault>
            <p [ngClass]="[colorClass, fontClass]" [ngStyle]="styleObject">
              <ng-content></ng-content>
            </p>
          </ng-container>
    </ng-container>
  `,
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent {
  @Input() variant: string = 'b2';
  @Input() color: string = 'primary';
  @Input() font: string | null = null;

  get colorClass(): string {
    switch (this.color) {
      case 'primary':
        return 'text-typo';
      case 'secondary':
        return 'text-typo-secondary';
      case 'tertiary':
        return 'text-typo-tertiary';
      case 'danger':
        return 'text-red-500';
      case 'white':
        return 'text-white';
      default:
        return '';
    }
  }

  get fontClass(): string {
    switch (this.font) {
      case 'averta':
        return 'font-averta';
      case 'inter':
        return 'font-primary';
      default:
        return '';
    }
  }

  get styleObject(): { [key: string]: string } {
    switch (this.variant) {
      case 'j1':
        return { 'font-size': '36px', 'font-weight': '700' };
      case 'j2':
        return { 'font-size': '30px', 'font-weight': '700' };
      case 'h1':
        return { 'font-size': '24px', 'font-weight': '600' };
      case 'h2':
        return { 'font-size': '20px', 'font-weight': '600' };
      case 'h3':
        return { 'font-size': '18px', 'font-weight': '600' };
      case 'h4':
        return { 'font-size': '16px', 'font-weight': '700' };
      case 'h5':
        return { 'font-size': '16px', 'font-weight': '600' };
      case 'h6':
        return { 'font-size': '14px', 'font-weight': '600' };
      case 's1':
        return { 'font-size': '18px', 'font-weight': '500' };
      case 's2':
        return { 'font-size': '16px', 'font-weight': '500' };
      case 's3':
        return { 'font-size': '14px', 'font-weight': '500' };
      case 's4':
        return { 'font-size': '12px', 'font-weight': '500' };
      case 'b1':
        return { 'font-size': '18px', 'font-weight': '400' };
      case 'b2':
        return { 'font-size': '16px', 'font-weight': '400' };
      case 'b3':
        return { 'font-size': '14px', 'font-weight': '400' };
      case 'c1':
        return { 'font-size': '12px', 'font-weight': '400' };
      case 'c2':
        return { 'font-size': '11px', 'line-height': '14px' };
      default:
        return {};
    }
  }
}
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { LayoutComponent } from "./layout/layout.component";
import { CommonModule } from "@angular/common";
import { TypographyComponent } from "./typography/typography.component";
import { TopFooterComponent } from "./layout/footer/top-footer/top-footer.component";
import { BottomFooterComponent } from "./layout/footer/bottom-footer/bottom-footer.component";
import { MaterialDesignModule } from "../lib/material.design.module";
import { ArrowLinkComponent } from './arrow-link/arrow-link.component';
import { PingCircleComponent } from './ping-circle/ping-circle.component';

@NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    TypographyComponent,
    TopFooterComponent,
    BottomFooterComponent,
    ArrowLinkComponent,
    PingCircleComponent,
],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    TypographyComponent,
    TopFooterComponent,
    BottomFooterComponent,
    ArrowLinkComponent,
    PingCircleComponent,
  ],
})
export class ComponentsModule {}
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
import { SpeakExpertComponent } from "../pages/home/speak-expert/speak-expert.component";

@NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    TypographyComponent,
    TopFooterComponent,
    BottomFooterComponent,
    ArrowLinkComponent,
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
  ],
})
export class ComponentsModule {}
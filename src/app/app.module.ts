import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxPage } from './pages/sandbox/sandbox.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './lib/material.design.module';
import { HomePage } from './pages/home/home.page';
import { SpeakExpertComponent } from './pages/home/speak-expert/speak-expert.component';
import { ComponentsModule } from './components/components.module';
import { WhyNttComponent } from './pages/home/why-ntt/why-ntt.component';
import { RelatedInsightsComponent } from './pages/home/related-insights/related-insights.component';
import {register} from 'swiper/element/bundle';
import { SwiperDirective } from './directives/swiper.directive';
import { FeaturedBannerComponent } from './pages/home/featured-banner/featured-banner.component';
import { ServiceOverviewComponent } from './pages/home/service-overview/service-overview.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    SandboxPage,
    HomePage,
    SpeakExpertComponent,
    WhyNttComponent,
    RelatedInsightsComponent,
    FeaturedBannerComponent,
    ServiceOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ComponentsModule,
    SwiperDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { SpeakExpertComponent } from './speak-expert/speak-expert.component';
import { WhyNttComponent } from './why-ntt/why-ntt.component';
import { RelatedInsightsComponent } from './related-insights/related-insights.component';
import { FeaturedBannerComponent } from './featured-banner/featured-banner.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import { ComponentsModule } from 'src/app/components/components.module';
import {register} from 'swiper/element/bundle';
import { MaterialDesignModule } from 'src/app/lib/material.design.module';
import { SwiperDirective } from 'src/app/directives/swiper.directive';

register();

@NgModule({
  declarations: [
    HomePage,
    SpeakExpertComponent,
    WhyNttComponent,
    RelatedInsightsComponent,
    FeaturedBannerComponent,
    ServiceOverviewComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ComponentsModule,
    SwiperDirective,
  ],
  exports: [
    HomePage,
    SpeakExpertComponent,
    WhyNttComponent,
    RelatedInsightsComponent,
    FeaturedBannerComponent,
    ServiceOverviewComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }

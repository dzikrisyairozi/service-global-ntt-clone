import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { SpeakExpertComponent } from './speak-expert/speak-expert.component';
import { WhyNttComponent } from './why-ntt/why-ntt.component';
import { RelatedInsightsComponent } from './related-insights/related-insights.component';
import { FeaturedBannerComponent } from './featured-banner/featured-banner.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';


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
  ],
})
export class HomeModule { }

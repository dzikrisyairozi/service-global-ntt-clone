import { Component } from '@angular/core';

import { ClientReviewProps } from '../client-review.component';

@Component({
  selector: 'app-client-review-desktop',
  templateUrl: './client-review-desktop.component.html',
  styleUrls: ['./client-review-desktop.component.css']
})

export class ClientReviewDesktopComponent {
  ClientReviews: ClientReviewProps[] = [
    {
      bgImageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/about-us/case-studies/tdf/tdf-banner-2023.jpg?rev=38683d9976eb41d28d73142b97fe8bc6&hash=9199F619C13C71EFD787EEC24F052D29',
      upTitle: 'NTT and Tour de France',
      title: 'Edge, IoT and a revolutionary fan experience for the Tour de France',
      description: 'The partnership between NTT DATA and Amaury Sport Organisation (A.S.O.) stretches back to 2015. By connecting what’s happening at the very edge of the network to passionate fans and race organizers, we’ve changed the way the race is viewed and managed.',
      caseStudy: 'Tour de France'
    },
    {
      bgImageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/about-us/case-studies/ntt-ea-and-sdis/banner.jpg?rev=fc8f97463a3c43949384a38723cb8466&hash=06A7D5634A1A2DADD2D9EF4F10D223E9',
      upTitle: 'NTT EA and SDIS',
      title: 'NTT’s dynamic business environment is underpinned by operational transformation',
      description: 'By establishing fit-for-purpose Enterprise Agreements and simplifying technology lifecycle management, we benefit from enhanced visibility and control of our software-defined and legacy hardware assets.',
      caseStudy: 'NTT Operations'
    },
    {
      bgImageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/about-us/case-studies/georg-fischer-piping-systems/banner.jpg?rev=b9d87f4dd1884af481ccd6b2c31e94ce&hash=FEAD734D99A2B1405CBF583AEE77A621',
      upTitle: 'NTT and Georg Fischer Piping Systems',
      title: 'Hybrid cloud voice simplifies how Georg Fischer Piping Systems handles calls',
      description: 'A combination of Luware and Microsoft Teams for all voice calls, including contact center calls, makes it possible to add more users, features and functionality without having to invest in new infrastructure.',
      caseStudy: 'Georg Fischer calls'
    },
    {
      bgImageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/about-us/case-studies/ics_ai/banner.jpg?rev=7eff555a8739407c95b2a3fa5305c027&hash=623AE01944497A50D4EE82778C252C7F',
      upTitle: 'NTT and ICS.AI',
      title: 'ICS.AI’s voicebot handles routine queries about municipal services',
      description: 'An AI-driven voicebot answers routine questions on certain topics with no processing or speech delays. This service, powered by NTT’s Cloud Voice for CX, has reduced the pressure on call center agents, freeing them to make proactive calls instead.',
      caseStudy: 'ICS.AI voicebot'
    },
  ]
}

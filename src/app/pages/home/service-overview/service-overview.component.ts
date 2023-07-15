import { Component } from '@angular/core';

interface Service {
  imageUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-service-overview',
  templateUrl: './service-overview.component.html',
  styleUrls: ['./service-overview.component.css']
})


export class ServiceOverviewComponent {
  services: Service[] = [
    {
      imageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/services-and-products/edge-as-a-service/eaas_home-page_solutions-image-1260x880.jpg?rev=da1f625605724371bbc72468e60b8863&hash=CDECC97BD7F134311EFED8F806FB1FB8',
      title: 'Edge as a Service',
      description: "We help you deliver new business outcomes made possible by new technologies. Edge as a Service manages and delivers on-demand automation and user experience to achieve greater operational efficiency, security and business growth."
    },
    {
      imageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/services-and-products/software-defined-infrastructure-services/soft_home-page_solutions-image-1260x880.jpg?rev=8ac76fac4f20444999f6407b90893b8c&hash=E996AABE2912BF9D86F41F621B158D45',
      title: 'Software-defined Infrastructure Services',
      description: 'For a successful migration to the cloud and the integration of subscription software, you need a consistent lifecycle strategy for new and legacy assets. With a combination of experience and innovation, we can smooth your path to the future.'
    },
    {
      imageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/services-and-products/cloud/landing-page/caas_home-page_solutions-image-1260x880.jpg?rev=a072dfd4d6c4460fbdca966dd9131ba5&hash=C583F63DD56E651831B68A145CC06E26',
      title: 'Software-defined Infrastructure Services',
      description: 'For a successful migration to the cloud and the integration of subscription software, you need a consistent lifecycle strategy for new and legacy assets. With a combination of experience and innovation, we can smooth your path to the future.'
    },
    {
      imageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/services-and-products/networks/landing-page/naas_home-page_solutions-image-1260x880.jpg?rev=8b29701568ed486084113c4a3d451693&hash=361CDA96E55FCF0DFAA3621D0E63DDF8',
      title: 'Network as a Service',
      description: 'Drive automation, optimization and transformation in your organization with intelligent and secure network infrastructure.'
    },
    {
      imageUrl: 'https://prodau-cdn.azureedge.net/-/media/ntt/global/services-and-products/landing-page/wtp-services-and-products_header-image_2880x1800.jpg?rev=c9dae4b4b6e3433b8892b0d8056ccaa9&hash=673EAB96478D08923E417585F4838846',
      title: 'Services and products',
      description: 'Focusing on technology as a service, we connect your edge-to-cloud network, simplify the complexity of your multicloud environment, innovate at the edge and support your journey to a software-defined future.'
    },
    // Add more services as needed
  ];
}






// <section class="flex flex-col px-[22px] py-[40px] sm:p-[80px]">
// <p class="text-primary text-[40px]">How we can help you</p>
// <div class="mt-[40px]">
//   <swiper-container initialSlide="0" slidesPerView="3" class="bg-gray-100" navigation>
//   <swiper-slide
//     style="
//       background-image: url('https://prodau-cdn.azureedge.net/-/media/ntt/global/services-and-products/collaboration-cx/landing-page/ccx-thumbnail-824x540.jpg?rev=920bad5820a540d1b430b8b639ea0563&hash=16666582EADAC4BB3A2EA9B64D4A015A');
//     "
//     class="flex items-end justify-start bg-cover mb-2 mr-6 hover:shadow-2xl !w-[36%] min-h-[440px] h-[557px]"
//   >
//     <div class="flex h-[67.5%] flex-col justify-end items-start">
//       <div class="bg-white flex flex-col p-[40px] w-3/4">
//         <p class="text-primary text-[32px]">Digital Collaboration and CX</p>
//         <p class="mt-[24px] text-[16px]">
//           Enable your people to work together effectively and securely, at
//           any time and from anywhere. Transform your customer experience and
//           deliver value at every touchpoint to create differentiated,
//           personalized and hyper-automated experiences.
//         </p>
//         <app-arrow-link class="-ml-4" variant="accent"
//           >Read more</app-arrow-link
//         >
//       </div>
//     </div>
//   </swiper-slide>
//   <swiper-slide *ngFor="let service of services" class="h-[557px] bg-white mr-6 !w-[25%] hover:shadow-2xl">
//     <div
//       [style.backgroundImage]="'url(' + service.imageUrl + ')'"
//       class="bg-cover h-[191px]"
//     ></div>
//     <div class="bg-white flex flex-col p-[40px]">
//       <p class="text-primary text-[20px]">{{ service.title }}</p>
//       <p class="mt-[16px] text-[16px]">
//         {{ service.description }}
//       </p>
//       <app-arrow-link class="-ml-4" variant="accent"
//         >Learn more {{ service.title }}</app-arrow-link
//       >
//     </div>
//   </swiper-slide>
//       <!-- <swiper-slide  *ngFor="let service of services" class="h-[557px] bg-white mr-6 w-[25%]">
//         <div [style.backgroundImage]="'url(' + service.imageUrl + ')'" class="bg-cover h-[191px]"></div>
//         <div class="bg-white flex flex-col p-[40px]">
//           <p class="text-primary text-[20px]">{{ service.title }}</p>
//           <p class="mt-[16px] text-[16px]">{{ service.description }}</p>
//           <app-arrow-link class="-ml-4" variant="accent">Learn more {{ service.title }}</app-arrow-link>
//         </div>
//       </swiper-slide> -->
//   </swiper-container>
// </div>
// </section>
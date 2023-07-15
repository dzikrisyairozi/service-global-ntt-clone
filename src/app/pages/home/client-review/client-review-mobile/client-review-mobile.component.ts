import { Component } from '@angular/core';
import { ClientReviewData, ClientReviewProps } from '../client-review.component';

@Component({
  selector: 'app-client-review-mobile',
  templateUrl: './client-review-mobile.component.html',
  styleUrls: ['./client-review-mobile.component.css']
})
export class ClientReviewMobileComponent {
  ClientReviews: ClientReviewProps[] = ClientReviewData;
}

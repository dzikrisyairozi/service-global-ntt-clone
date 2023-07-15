import { Component } from '@angular/core';
import { ClientReviewData, ClientReviewProps } from '../client-review.component';

@Component({
  selector: 'app-client-review-medium',
  templateUrl: './client-review-medium.component.html',
  styleUrls: ['./client-review-medium.component.css']
})
export class ClientReviewMediumComponent {
  ClientReviews: ClientReviewProps[] = ClientReviewData;
}

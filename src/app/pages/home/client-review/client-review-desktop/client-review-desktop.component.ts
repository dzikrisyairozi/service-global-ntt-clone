import { Component } from '@angular/core';

import { ClientReviewData, ClientReviewProps } from '../client-review.component';

@Component({
  selector: 'app-client-review-desktop',
  templateUrl: './client-review-desktop.component.html',
  styleUrls: ['./client-review-desktop.component.css']
})

export class ClientReviewDesktopComponent {
  ClientReviews: ClientReviewProps[] = ClientReviewData;
}

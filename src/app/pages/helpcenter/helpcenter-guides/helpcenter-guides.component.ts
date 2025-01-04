import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { GetInTouchComponent } from '../../../components/get-in-touch/get-in-touch.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-helpcenter-guides',
  standalone: true,
  imports: [CommonModule,NavbarComponent,GetInTouchComponent,RouterLink],
  templateUrl: './helpcenter-guides.component.html',
  styleUrl: './helpcenter-guides.component.scss'
})
export class HelpcenterGuidesComponent {
  guidesData = [
    {
      title:'Getting started',
      features:[
        'Deciding to purchase','List your space','Landing an experience or adventure','Top uses questions'
      ]
    },
    {
      title:'Your calendar',
      features:[
        'Pricing & availability','Booking settings','Responding to enquiries & requests','Snoozing or deactivating your listing'
      ]
    },
    {
      title:'Your listings',
      features:[
        'Updating your listing','Neighbourhoods','Listing photos & photography','Cartzio Plus','API-connected software'
      ]
    },
    {
      title:'How payouts work',
      features:[
        'Getting paid','Adding payout info','Your payout status','Donations','Taxes'
      ]
    },
    {
      title:'Your reservations',
      features:[
        'Cartzio safely','Cartzio Experiences and Adventures','Changing a reservation','Cancelling a reservation','Long-term reservations'
      ]
    },
    {
      title:'Reservation help',
      features:[
        'Help with a reservation or guest','Guest cancellations'
      ]
    },
    {
      title:'Your account',
      features:[
        'Your profile','Account security','Identification & verifications','Reviews','Superhost status'
      ]
    }

  ]
}

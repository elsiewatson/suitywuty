import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AccountTabComponent } from '../../../components/account-tab/account-tab.component';

@Component({
  selector: 'app-user-payment',
  standalone: true,
  imports: [CommonModule,NavbarComponent,AccountTabComponent],
  templateUrl: './user-payment.component.html',
  styleUrl: './user-payment.component.scss'
})
export class UserPaymentComponent {
  isOpen:boolean = false
  modelClick(){
    this.isOpen=!this.isOpen;
  }
  paymentMethod = [
    {
      image:'assets/images/payments/visa.jpg',
      name:'Visa ending in 4578',
      date:'Expires in 13/03/2024'
    },
    {
      image:'assets/images/payments/american-express.jpg',
      name:'American Express ending in 4578',
      date:'Expires in 05/05/2024'
    },
    {
      image:'assets/images/payments/discover.jpg',
      name:'Discover ending in 4578',
      date:'Expires in 19/06/2024'
    },
    {
      image:'assets/images/payments/mastercard.jpg',
      name:'Master Card ending in 4578',
      date:'Expires in 20/06/2024'
    },
  ]
}

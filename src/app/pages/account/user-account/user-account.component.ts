import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AccountTabComponent } from '../../../components/account-tab/account-tab.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [CommonModule,NavbarComponent,AccountTabComponent,RouterLink],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss'
})
export class UserAccountComponent {
    favouriteItem =[
      {
        image:'assets/images/shop/apple-smart-watch.jpg',
        name:'Apple Smart Watch',
        descRate:'$16.00',
        rate:'$21.00'
      },
      {
        image:'assets/images/shop/ladies-2.jpg',
        name:'Ladies Top',
        descRate:'$16.00',
        rate:'$21.00'
      },
      {
        image:'assets/images/shop/ladies-sun-glasses.jpg',
        name:'Ladies Sunglasses',
        descRate:'$16.00',
        rate:'$21.00'
      },
    ]
    orderData = [
      {
        no:7107,
        date:'13th March 2024',
        status:'Delivered',
        rate:'$ 320',
        item:'for 2items'
      },
      {
        no:8007,
        date:'5th May 2024',
        status:'Processing',
        rate:'$ 800',
        item:'for 1items'
      },
      {
        no:8008,
        date:'19th June 2024',
        status:'Canceled',
        rate:'$ 800',
        item:'for 1items'
      },
    ]
}

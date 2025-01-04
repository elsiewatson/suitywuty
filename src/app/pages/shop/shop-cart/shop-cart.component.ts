import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { MobileAppComponent } from '../../../components/mobile-app/mobile-app.component';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,MobileAppComponent],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.scss'
})
export class ShopCartComponent {

}

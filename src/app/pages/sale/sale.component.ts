import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MobileAppComponent } from '../../components/mobile-app/mobile-app.component';
import ProductData from '../../data/productData.json';
@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,MobileAppComponent],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {
  product = ProductData

  saleData = [
    {
      off:'20% Off',
      code:'SALE20OFF'
    },
    {
      off:'30% Off',
      code:'SALE30OFF'
    },
    {
      off:'50% Off',
      code:'SALE50OFF'
    },
    {
      off:'75% Off',
      code:'SALE75OFF'
    },
  ]
}

import { Component } from '@angular/core';
import ProductData from '../../../../data/productData.json';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FilterComponent } from '../../../../components/filter/filter.component';
@Component({
  selector: 'app-shop-grid-right-sidebar',
  standalone: true,
  imports: [CommonModule,NavbarComponent, RouterLink,FilterComponent],
  templateUrl: './shop-grid-right-sidebar.component.html',
  styleUrl: './shop-grid-right-sidebar.component.scss'
})
export class ShopGridRightSidebarComponent {
  product = ProductData
}

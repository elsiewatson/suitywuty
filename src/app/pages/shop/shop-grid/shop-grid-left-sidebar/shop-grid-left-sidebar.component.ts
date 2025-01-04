import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { FilterComponent } from '../../../../components/filter/filter.component';
import ProductData from '../../../../data/productData.json';
@Component({
  selector: 'app-shop-grid-left-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink, NavbarComponent,FilterComponent],
  templateUrl: './shop-grid-left-sidebar.component.html',
  styleUrl: './shop-grid-left-sidebar.component.scss'
})
export class ShopGridLeftSidebarComponent {
  product = ProductData
}

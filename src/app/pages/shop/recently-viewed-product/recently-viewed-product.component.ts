import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recently-viewed-product',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterLink],
  templateUrl: './recently-viewed-product.component.html',
  styleUrl: './recently-viewed-product.component.scss'
})
export class RecentlyViewedProductComponent {

}

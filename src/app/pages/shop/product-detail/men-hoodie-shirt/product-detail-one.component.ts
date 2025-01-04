import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { TaglineComponent } from '../../../../components/tagline/tagline.component';
import ProductData from '../../../../data/productData.json';
import { ProductDetailTabComponent } from '../../../../components/product-detail-tab/product-detail-tab.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'men-hoodie-shirt',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    TaglineComponent,
    ProductDetailTabComponent,
  ],
  templateUrl: './product-detail-one.component.html',
  styleUrl: './product-detail-one.component.scss',
})
export class MenshoodieshirtComponent {
  product = ProductData;
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the meta title
    this.titleService.setTitle('Men’s hoodie shirt for rent | Suitywuty');

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'Stay stylish and comfortable with our mens hoodie shirts. Rent this item for your casual outing combining style and comfort effortlessly.',
    });
  }
}

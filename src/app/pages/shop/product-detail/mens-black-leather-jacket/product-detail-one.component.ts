import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { TaglineComponent } from '../../../../components/tagline/tagline.component';
import ProductData from '../../../../data/productData.json';
import { ProductDetailTabComponent } from '../../../../components/product-detail-tab/product-detail-tab.component';
import { ProductDetailComponent } from '../../../../components/mens-black-leather-jacket/product-detail.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'mens-black-leather-jacket',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    TaglineComponent,
    ProductDetailTabComponent,
    ProductDetailComponent,
  ],
  templateUrl: './product-detail-one.component.html',
  styleUrl: './product-detail-one.component.scss',
})
export class MensblackleatherjacketComponent {
  product = ProductData;
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the meta title
    this.titleService.setTitle(
      'Get bold style with men’s black leather jacket | Suitywuty'
    );

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'Rent the mens black leather jacket for a fashionable, sleek look. Perfect for redefining your personality on any casual occasion or event.',
    });
  }
}

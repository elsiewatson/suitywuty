import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { TaglineComponent } from '../../../../components/tagline/tagline.component';
import ProductData from '../../../../data/productData.json';
import { ProductDetailTabComponent } from '../../../../components/product-detail-tab/product-detail-tab.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'mens-red-and-white-suit',
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
export class MensredandwhitesuitComponent {
  product = ProductData;
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the meta title
    this.titleService.setTitle('Rent our red and white suit | Suitywuty');

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'The red and white suit is the perfect option for formal events with an eye-catching and stylish design. Stand out with our exclusive rental collection of suits.',
    });
  }
}

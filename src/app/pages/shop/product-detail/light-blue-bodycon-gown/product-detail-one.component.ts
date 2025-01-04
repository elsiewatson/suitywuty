import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { TaglineComponent } from '../../../../components/tagline/tagline.component';
import ProductData from '../../../../data/productData.json';
import { ProductDetailTabComponent } from '../../../../components/product-detail-tab/product-detail-tab.component';
import { ProductDetailComponent } from '../../../../components/light-blue-bodycon-gown/product-detail.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail-one',
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
export class LightbluebodycongownComponent {
  product = ProductData;
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the meta title
    this.titleService.setTitle('Rent our bodycon gown | Suitywuty');

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'Looking for elegance? Renting this light blue bodycon dress gives you a combination of comfort and elegance for your next special event.',
    });
  }
}

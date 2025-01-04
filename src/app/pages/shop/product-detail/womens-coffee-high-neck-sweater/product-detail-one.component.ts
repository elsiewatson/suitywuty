import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { TaglineComponent } from '../../../../components/tagline/tagline.component';
import ProductData from '../../../../data/productData.json';
import { ProductDetailTabComponent } from '../../../../components/product-detail-tab/product-detail-tab.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'modern-sheath-dresses',
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
export class WomenscoffeehighnecksweaterComponent {
  product = ProductData;
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set the meta title
    this.titleService.setTitle('Stylish women high-neck sweater | Suitywuty');

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get the ultimate blend of style and comfort with our women’s coffee high-neck sweater.	 This is a must-have product, offering a comfortable and stylish fit.',
    });
  }
}

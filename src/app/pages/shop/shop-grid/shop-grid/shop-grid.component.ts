import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import ProductData from '../../../../data/productData.json';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shop-grid',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './shop-grid.component.html',
  styleUrl: './shop-grid.component.scss',
})
export class ShopGridComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle = 'Rent from our exclusive collection | Suitywuty';
    const metaDescription =
      'Browse our exclusive collection of dresses and rent one for every occasion. Shine with confidence and stay stylish with our rental solutions.';

    // Set the document title
    this.titleService.setTitle(metaTitle);

    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }
  product = ProductData;
}

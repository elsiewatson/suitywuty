import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaglineComponent } from '../../../components/tagline/tagline.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import ProductData from '../../../data/productData.json';
import { ClientComponent } from '../../../components/client/client.component';

@Component({
  selector: 'app-index-three',
  standalone: true,
  imports: [CommonModule, RouterLink,TaglineComponent,NavbarComponent,ClientComponent],
  templateUrl: './index-three.component.html',
  styleUrl: './index-three.component.scss'
})
export class IndexThreeComponent {

  product = ProductData

  heroImage = [
    {
      image:'assets/images/categories/ladies-ware.jpg',
      name:'Ladies Wear'
    },
    {
      image:'assets/images/categories/kids-ware.jpg',
      name:'Kids Wear'
    },
    {
      image:'assets/images/categories/mens-ware.jpg',
      name:'Gents Wear'
    },
  ]
}

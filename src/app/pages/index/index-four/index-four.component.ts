import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import ProductData from '../../../data/productData.json';
import { ClientComponent } from '../../../components/client/client.component';
import { CtaComponent } from '../../../components/cta/cta.component';

@Component({
  selector: 'app-index-four',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,ClientComponent,CtaComponent],
  templateUrl: './index-four.component.html',
  styleUrl: './index-four.component.scss'
})
export class IndexFourComponent {
  product = ProductData
  collectionData = [
    {
      image:'assets/images/categories/smart-watch.jpg',
      name:'Smart Watch'
    },
    {
      image:'assets/images/categories/sunglasses.jpg',
      name:'Sunglasses'
    },
    {
      image:'assets/images/categories/chappal-shoes.jpg',
      name:'Casual Shoes'
    },
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

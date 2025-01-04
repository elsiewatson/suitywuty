import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TaglineComponent } from '../../../components/tagline/tagline.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CtaComponent } from '../../../components/cta/cta.component';
import { ClientComponent } from '../../../components/client/client.component';

import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

import ProductData from '../../../data/productData.json';

@Component({
  selector: 'app-index-two',
  standalone: true,
  imports: [CommonModule,TaglineComponent,NavbarComponent, RouterLink,CtaComponent, ClientComponent],
  templateUrl: './index-two.component.html',
  styleUrl: './index-two.component.scss'
})
export class IndexTwoComponent {
  product = ProductData

  swiper!: Swiper;
  constructor() {
    register()
  }
  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay:true,
      speed:3000,
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail-tab',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-detail-tab.component.html',
  styleUrl: './product-detail-tab.component.scss'
})
export class ProductDetailTabComponent {
  activeTab:number = 1;

  onTabClick(index:number){
    this.activeTab=index;
  }

  reviewData = [
    {
      image:'assets/images/client/01.jpg',
      name:'Calvin Carlo',
      time:'13th March 2024 at 01:00 pm',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/02.jpg',
      name:'Calvin Carlo',
      time:'5th May 2024 at 10:00 am',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/03.jpg',
      name:'Calvin Carlo',
      time:'19th June 2024 at 09:00 am',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
      image:'assets/images/client/04.jpg',
      name:'Calvin Carlo',
      time:'20th June 2024 at 01:30 pm',
      desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
  ]
}

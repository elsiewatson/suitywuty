// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { GetInTouchComponent } from '../../../components/get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-helpcenter-faqs',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterLink,GetInTouchComponent],
  templateUrl: './helpcenter-faqs.component.html',
  styleUrl: './helpcenter-faqs.component.scss'
})
export class HelpcenterFaqsComponent {
  activeTab:number = 1
  activeTab2:number = 1
  activeTab3:number = 1
  activeTab4:number = 1

  onTabClick(index:number){
    this.activeTab = index;
  }
  onTabClick2(index:number){
    this.activeTab2 = index;
  }
  onTabClick3(index:number){
    this.activeTab3 = index;
  }
  onTabClick4(index:number){
    this.activeTab4 = index;
  }

  faqData = [
    {
      id:1,
      title:'How does it work ?',
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:2,
      title:'Do I need a designer to use Cartzio ?',
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:3,
      title:'What do I need to do to start selling ?',
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:4,
      title:'What happens when I receive an order ?',
      desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
  ]
}

import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss'
})
export class SwitcherComponent {
  isSticky: boolean = false;

  constructor(private router: Router) {}

  isTopBtn(): boolean {
    return this.router.url.includes('login') || 
    this.router.url.includes('signup') || 
    this.router.url.includes('forgot-password') || 
    this.router.url.includes('lock-screen') ||  
    this.router.url.includes('email-confirmation') || 
    this.router.url.includes('email-cart') || 
    this.router.url.includes('email-offers') || 
    this.router.url.includes('email-order-success') || 
    this.router.url.includes('email-gift-voucher') || 
    this.router.url.includes('email-reset-password') || 
    this.router.url.includes('email-item-review') ||
    this.router.url.includes('comingsoon') || 
    this.router.url.includes('maintenance') || 
    this.router.url.includes('error') ;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset > 50;
  }
  scrollTop(){
    window.scroll(0, 0)
  }

  changeMode() {
    const htmlTag = document.documentElement;
    if (htmlTag.className.includes("dark")) {
      htmlTag.className = 'light'
    } else {
      htmlTag.className = 'dark'
    }
  }
  toggleMode() {
    const switcherRtl = document.getElementById("switchRtl") as any;
    if (switcherRtl.innerText === "LTR") {
      document.documentElement.dir = "ltr"
    }
    else {
      document.documentElement.dir = "rtl"
    }
  }
}

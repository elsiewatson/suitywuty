import { Component, Directive, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, SwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cartzio';

  constructor(private router: Router) {
    const normalizedUrl = this.router.url.replace(/\/{2,}/g, '/');
    if (this.router.url !== normalizedUrl) {
      this.router.navigateByUrl(normalizedUrl, { replaceUrl: true });
    }
  }
  
  isLoginPage(): boolean {
    return (
      this.router.url.includes('login') ||
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
      this.router.url.includes('error')
    );
  }

  isSwitcher(): boolean {
    return (
      this.router.url.includes('email-confirmation') ||
      this.router.url.includes('email-cart') ||
      this.router.url.includes('email-offers') ||
      this.router.url.includes('email-order-success') ||
      this.router.url.includes('email-gift-voucher') ||
      this.router.url.includes('email-reset-password') ||
      this.router.url.includes('email-item-review')
    );
  }

  // @HostListener('click', ['$event'])
  // onClick(event: MouseEvent) {
  //   const target = event.target as HTMLAnchorElement;
  //   const hasRouterLink = target.getAttribute('routerLink') !== null;
  //   const isEmptyRouterLink = target.getAttribute('routerLink') === '';

  //   if (!hasRouterLink || isEmptyRouterLink) {
  //     event.preventDefault();
  //   }
  // }
}

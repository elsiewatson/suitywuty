import { CommonModule } from '@angular/common';
import { Component, HostListener, Input  } from '@angular/core';
import { RouterLink, Router  } from '@angular/router';
import * as feather from 'feather-icons';
import { ClickOutsideModule } from 'ng-click-outside';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink, ClickOutsideModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() navLight: any;
  @Input() navClass:any
  
  manu:string = '';
  subManu:string = '';
  toggleManu:boolean = false

  // sticky-navbar 
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset > 0;
    
  }

  constructor(private router: Router) {}
  ngAfterViewInit() {
    feather.replace();
  }
  ngOnInit() {
    const current = this.router.url;
    this.manu = current
    this.subManu = current
    window.scrollTo(0, 0);
  }
  openManu(item:string){
    this.subManu = item
  }
  toggleMenu(){
    this.toggleManu = !this.toggleManu
  }

  // search- modal 

  searchManu:boolean = false;
  searchModal(){
    this.searchManu=!this.searchManu
  }
  closeSearchModal() {
    this.searchManu = false;
  }

  // cart-modal 
  cart:boolean = false;
  cartModal(){
    this.cart=!this.cart
  }
  closeCartModal() {
    this.cart = false;
  }

    // user-modal 
    user:boolean = false;
    userModal(){
      this.user=!this.user
    }
    closeUserModal() {
      this.user = false;
    }
   
}

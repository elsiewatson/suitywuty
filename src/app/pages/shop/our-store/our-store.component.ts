import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-our-store',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './our-store.component.html',
  styleUrl: './our-store.component.scss',
})
export class OurStoreComponent {
  isModal: boolean = false;

  onModalClick() {
    this.isModal = !this.isModal;
  }

  storeData = [
    {
      image: 'assets/images/ab1.jpg',
      name: 'Cartzio, U.S.A.',
      address: '268 St, South New York/NY 98944,',
      country: 'United States',
      phone: ' +852 69856574',
    },
    {
      image: 'assets/images/ab3.jpg',
      name: 'Cartzio, U.S.A.',
      address: '268 St, South New York/NY 98944,',
      country: 'United States',
      phone: ' +852 69856574',
    },
    {
      image: 'assets/images/ab4.jpg',
      name: 'Cartzio, U.S.A.',
      address: '268 St, South New York/NY 98944,',
      country: 'United States',
      phone: ' +852 69856574',
    },
  ];
}

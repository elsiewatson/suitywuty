import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-compare-product',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './compare-product.component.html',
  styleUrl: './compare-product.component.scss'
})
export class CompareProductComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-user-invoice',
  standalone: true,
  imports: [CommonModule,RouterLink, NavbarComponent],
  templateUrl: './user-invoice.component.html',
  styleUrl: './user-invoice.component.scss'
})
export class UserInvoiceComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AccountTabComponent } from '../../../components/account-tab/account-tab.component';

@Component({
  selector: 'app-user-billing',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, AccountTabComponent],
  templateUrl: './user-billing.component.html',
  styleUrl: './user-billing.component.scss'
})
export class UserBillingComponent {

}

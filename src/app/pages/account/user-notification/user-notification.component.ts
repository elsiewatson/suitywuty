import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { AccountTabComponent } from '../../../components/account-tab/account-tab.component';

@Component({
  selector: 'app-user-notification',
  standalone: true,
  imports: [CommonModule,NavbarComponent,AccountTabComponent],
  templateUrl: './user-notification.component.html',
  styleUrl: './user-notification.component.scss'
})
export class UserNotificationComponent {

}

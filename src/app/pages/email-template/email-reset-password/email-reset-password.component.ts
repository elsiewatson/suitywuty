import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-reset-password',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-reset-password.component.html',
  styleUrl: './email-reset-password.component.scss'
})
export class EmailResetPasswordComponent {
date:any = '';
ngOnInit(): void {
  this.date = new Date().getFullYear();
}
}

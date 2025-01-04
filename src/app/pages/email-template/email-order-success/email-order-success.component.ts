import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-order-success',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-order-success.component.html',
  styleUrl: './email-order-success.component.scss'
})
export class EmailOrderSuccessComponent {
date:any = ''
ngOnInit(): void {
  this.date=new Date().getFullYear();
}
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-cart.component.html',
  styleUrl: './email-cart.component.scss'
})
export class EmailCartComponent {
  date:any = ''
  ngOnInit(): void {
    this.date=new Date().getFullYear();
  }
}

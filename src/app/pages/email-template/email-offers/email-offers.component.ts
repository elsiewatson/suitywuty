import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-offers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-offers.component.html',
  styleUrl: './email-offers.component.scss'
})
export class EmailOffersComponent {
  date:any = ''
  ngOnInit(): void {
    this.date=new Date().getFullYear();
  }
}

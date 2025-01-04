import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-item-review',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './email-item-review.component.html',
  styleUrl: './email-item-review.component.scss'
})
export class EmailItemReviewComponent {
  date:any=''
  ngOnInit(): void {
    this.date = new Date().getFullYear()
  }
}

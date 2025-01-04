import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  color=[
    'bg-red-600','bg-indigo-600','bg-emerald-600','bg-slate-900','bg-gray-400','bg-orange-600','bg-violet-600'
  ]
  brand =[
    'Alexander McQueen','Alexander Wang','Allegra K','AllSaints','Badgley Mischka','Baldinini'
  ]
  size = [
    'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'
  ]
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MobileAppComponent } from '../../components/mobile-app/mobile-app.component';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,MobileAppComponent, CountUpModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
    jobOpening = [
      {
        title:'Frontend Developer',
        openings:'Total Openings: 1'
      },
      {
        title:'Business Development Manager',
        openings:'Total Openings: 2'
      },
      {
        title:'Backend Developer',
        openings:'Total Openings: 4'
      },
    ]
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { HelpcenterAboutComponent } from '../../../components/helpcenter-about/helpcenter-about.component';

@Component({
  selector: 'app-helpcenter-support',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,HelpcenterAboutComponent],
  templateUrl: './helpcenter-support.component.html',
  styleUrl: './helpcenter-support.component.scss'
})
export class HelpcenterSupportComponent {

}

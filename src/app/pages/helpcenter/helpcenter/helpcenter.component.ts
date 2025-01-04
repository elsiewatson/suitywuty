import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { HelpcenterAboutComponent } from '../../../components/helpcenter-about/helpcenter-about.component';
import { GetInTouchComponent } from '../../../components/get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-helpcenter',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterLink,HelpcenterAboutComponent,GetInTouchComponent],
  templateUrl: './helpcenter.component.html',
  styleUrl: './helpcenter.component.scss'
})
export class HelpcenterComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,RouterLink, BackToHomeComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  date:any = ''
  ngOnInit(): void {
    this.date=new Date().getFullYear()
  }
}

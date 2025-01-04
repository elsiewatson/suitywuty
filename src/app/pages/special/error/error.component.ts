import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToHomeComponent } from '../../../components/back-to-home/back-to-home.component';
import { NavbarComponent } from "../../../components/navbar/navbar.component";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, RouterLink, BackToHomeComponent, NavbarComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
date:any = ''

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.date= new Date().getFullYear()
}
}

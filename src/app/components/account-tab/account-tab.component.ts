import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

import { RouterLink, Router  } from '@angular/router';

@Component({
  selector: 'app-account-tab',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './account-tab.component.html',
  styleUrl: './account-tab.component.scss'
})
export class AccountTabComponent {
  image:any  = ''
  loadFile(event:any){
   this.image = document.getElementById(event.target.name);
   this.image.src = URL.createObjectURL(event.target.files[0]);
  }

  constructor(private router: Router) {}

  current:any = '';
  ngOnInit() {
    this.current = this.router.url;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  brandData = [
    {
      id:1,
      brands:[
        'Adrianna Papell','AG - Adriano','Aglini','Alberta Ferretti','Alexander McQueen','Alexander Wang','Allegra K','AllSaints','Badgley Mischka','Baldinini','Balenciaga','Ballantyne','Ballard Designs','Bally','Balmain','Barba','Barbour'
      ]
    },
    {
      id:2,
      brands:[
        'Barena','BaubleBar','Baxton Studio','BCBGeneration','Bcbgmaxazria','Beatrice .B','C.P. Company','Carhartt Work in Progress','Carolines Treasures','Carve Designs','Casadei','Ballantyne','Ballard Designs','Catch Some Rays','Certified International','Champion'
      ]
    },
    {
      id:3,
      brands:[
        'Cherokee','Chiara Ferragni','Daniele Alessandrini','Daniele Fiesoli','Demdaco','Department Five','Design Toscano','Designq','Desigual','Dolce Vita','Dondup','Dorothee Schumacher','Doucal','Dr. Martens','Logitech','Cartzio',
      ]
    },
  ]
}

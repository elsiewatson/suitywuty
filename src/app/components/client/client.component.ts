import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  slider: any;

  ngAfterViewInit() {
    const sliderContainer = document.querySelector('.tiny-single-item');
    if (sliderContainer) {
      this.slider = tns({
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
      });
    }
  }
  clientData = [
    {
      image:'assets/images/client/01.jpg',
      name:'Christa Smith',
      possition:'Manager',
      desc:'" Cartzio made the processes so easy. Cartzio instantly increased the amount of interest and ultimately saved us over $10,000. "'
    },
    {
      image:'assets/images/client/02.jpg',
      name:'Christa Smith',
      possition:'Manager',
      desc:'" I highly recommend Cartzio as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home."'
    },
    {
      image:'assets/images/client/03.jpg',
      name:'Christa Smith',
      possition:'Manager',
      desc:'" My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! "'
    },
    {
      image:'assets/images/client/04.jpg',
      name:'Christa Smith',
      possition:'Manager',
      desc:'" Great experience all around! Easy to use and efficient. "'
    },
    {
      image:'assets/images/client/05.jpg',
      name:'Christa Smith',
      possition:'Manager',
      desc:'" Cartzio made selling my home easy and stress free. They went above and beyond what is expected. "'
    },
    {
      image:'assets/images/client/06.jpg',
      name:'Christa Smith',
      possition:'Manager',
      desc:'" Cartzio is fair priced, quick to respond, and easy to use. I highly recommend their services!  "'
    },
  ]
}

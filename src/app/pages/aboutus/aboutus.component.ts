import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
})
export class AboutusComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle = 'Redefined dress rental company | Suitywuty';
    const metaDescription =
      'Explore Suitywuty’s journey in making high-end fashion accessible for everyone through our comprehensive rental service.';

    // Set the document title
    this.titleService.setTitle(metaTitle);

    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }

  isModal: boolean = false;

  onModalClick() {
    this.isModal = !this.isModal;
  }

  promiseData = [
    {
      icon: 'mdi mdi-truck-check-outline',
      title: 'Our mission',
      desc: 'We offer affordable, eco-friendly, and high-quality fashion through our innovative rental service, enhancing style and confidence for all.',
    },
    {
      icon: 'mdi mdi-account-wrench-outline',
      title: 'Our vision',
      desc: 'We want to be the go-to destination for eco-friendly and fashionable dress rental services in Hong Kong.',
    },
    {
      icon: 'mdi mdi-cash-multiple',
      title: 'Our value',
      desc: 'We believe in customer-centric service, environmental responsibility, and integrity ensuring positive impact on fashion.',
    },
  ];

  teamData = [
    {
      image: 'assets/images/client/04.jpg',
      name: 'Jack John',
      possition: 'Designer',
    },
    {
      image: 'assets/images/client/16.jpg',
      name: 'Krista John',
      possition: 'Designer',
    },
    {
      image: 'assets/images/client/06.jpg',
      name: 'Roger Jackson',
      possition: 'Designer',
    },
    {
      image: 'assets/images/client/07.jpg',
      name: 'Johnny English',
      possition: 'Designer',
    },
  ];
}

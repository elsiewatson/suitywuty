import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { TaglineComponent } from '../../../components/tagline/tagline.component';
import { RouterLink } from '@angular/router';
import ProductData from '../../../data/productData.json';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-index-one',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TaglineComponent, RouterLink],
  templateUrl: './index-one.component.html',
  styleUrl: './index-one.component.scss',
})
export class IndexOneComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Example: Set the title and description
    this.setMetaTags();

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Set meta tags
    this.setMetaTags();

    // Scroll to top manually
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }

  setMetaTags() {
    const metaTitle = 'Trendy and fashionable dress rental | Suitywuty';
    const metaDescription =
      'Suitywuty is your ultimate destination for affordable, eco-friendly, and stylish dress rentals in Hong Kong. Rent from us now.';

    // Set the document title
    this.titleService.setTitle(metaTitle);

    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }

  product = ProductData;

  eventCountDown: any = new Date('June 25, 2024 16:37:52').getTime();
  now: any = new Date().getTime();
  timeleft: any = this.eventCountDown - this.now;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngAfterViewInit() {
    setInterval(() => {
      this.myfunction();
    }, 1000);
  }

  myfunction() {
    this.days = Math.floor(this.timeleft / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (this.timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((this.timeleft % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.timeleft % (1000 * 60)) / 1000);
  }

  collectiondata = [
    {
      image: 'assets/images/categories/mens-ware.jpg',
      name: 'Men’s Outerwear',
    },
    {
      image: 'assets/images/categories/ladies-ware.jpg',
      name: 'Men’s Formal Wear',
    },
    {
      image: 'assets/images/categories/kids-ware.jpg',
      name: 'Women’s Dresses',
    },
    {
      image: 'assets/images/categories/smart-watch.jpg',
      name: 'Women’s Knitwear',
    },
  ];

  blogData = [
    {
      image: 'assets/images/blog/1.jpg',
      date: '13th Sep 2024',
      url: '/how-to-style-your-rental-dress-for-maximum-impact',
      title: 'How to style your rental dress for maximum impact',
      desc: 'Want to enhance your styling and maximize your impact with rental dresses during essential business meetings, professional presentations or other important events?',
    },
    {
      image: 'assets/images/blog/2.jpg',
      date: '29th Nov 2024',
      url: '/how-renting-a-dress-can-make-your-fashion-choices-more-flexible',
      title: 'How renting a dress can make your fashion choices more flexible',
      desc: 'This is a fast-paced world of fashion, where trends come and go. Due to the volatile nature of fashion industry, it is tough to update yourself with the constant changes.',
    },
  ];
}

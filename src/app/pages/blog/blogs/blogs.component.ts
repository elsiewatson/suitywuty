import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle = 'Explore dress rental tips and trends | Suitywuty';
    const metaDescription =
      'Stay updated with our blogs, featuring dress rental trends, fashion insights, and different style tips for every occasion.';

    // Set the document title
    this.titleService.setTitle(metaTitle);

    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }

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

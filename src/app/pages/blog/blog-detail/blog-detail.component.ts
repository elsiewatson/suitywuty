import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle =
      'Tips for making a statement by styling rental dresses | Suitywuty';
    const metaDescription =
      'Looking to stand out in a rental dress? Discover practical tips for fitting, accessorizing, and personalizing your look.';

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
      image: 'assets/images/blog/6.jpg',
      date: '19th June 2024',
      title: 'Exploring the Timeless Allure of Fashion',
      desc: 'This is required when, for example, the final text is not yet available.',
    },
    {
      image: 'assets/images/blog/7.jpg',
      date: '20th Sep 2024',
      title: 'A Chic Journey Through Fashion Trends',
      desc: 'This is required when, for example, the final text is not yet available.',
    },
    {
      image: 'assets/images/blog/8.jpg',
      date: '31st Aug 2024',
      title: 'Unique Autumn Fashion Ideas',
      desc: 'This is required when, for example, the final text is not yet available.',
    },
  ];

  socialData = [
    'facebook',
    'instagram',
    'twitter',
    'linkedin',
    'github',
    'youtube',
    'gitlab',
  ];
}

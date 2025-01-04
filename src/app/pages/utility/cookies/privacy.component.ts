import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class CookiesComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle = 'Review our cookies policy | Suitywuty';
    const metaDescription =
      'Suitywuty uses cookies to enhance the user experience of its customers. Learn about our cookies policy here.';

    // Set the document title
    this.titleService.setTitle(metaTitle);

    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }
  privacyData = [
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand',
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand',
  ];
}

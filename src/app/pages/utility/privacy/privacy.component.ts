import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle = 'Our privacy policy | Suitywuty';
    const metaDescription =
      'Learn how Suitywuty collects, uses, and protects your personal data to provide a seamless and secure dress rental experience.';

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

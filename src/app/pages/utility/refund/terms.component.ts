import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FaqComponent } from '../../../components/faq/faq.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'refund-terms',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FaqComponent],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class RefundComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle = 'Explore our return and refund policy | Suitywuty';
    const metaDescription =
      'Be fully informed about our seamless return and refund policy for a worry-free and smooth dress rental experience.';

    // Set the document title
    this.titleService.setTitle(metaTitle);

    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }
  termsData = [
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand',
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand',
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { MobileAppComponent } from '../../../components/mobile-app/mobile-app.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shop-checkout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MobileAppComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './shop-checkout.component.html',
  styleUrl: './shop-checkout.component.scss',
})
export class ShopCheckoutComponent {
  myForm: FormGroup;
  isSubmitting = false;
  messageStatus = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.myForm = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle = 'Checkout | Suitywuty';
    const metaDescription =
      'Browse our collection, select your favorite piece, order it with the required details, and complete the payment with cash during delivery.';

    // Set the document title
    this.titleService.setTitle(metaTitle);

    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }

  get f() {
    return this.myForm.controls; // Use bracket notation to access controls
  }

  onSubmit(): void {
    this.messageStatus = '';
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formData = this.myForm.value;

    this.http.post('https://acomal.top/send-mail/77/', formData).subscribe({
      next: (response) => {
        this.messageStatus = 'Order placed successfully!';
        this.isSubmitting = false;
        this.myForm.reset();
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.messageStatus = 'Error sending message. Please try again.';
        this.isSubmitting = false;
      },
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  isModal: boolean = false;
  isSubmitting = false;
  messageStatus = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  ngOnInit() {
    // Example: Set the title and description
    this.setMetaTags();
  }

  setMetaTags() {
    const metaTitle = 'Reach out to us | Suitywuty';
    const metaDescription =
      'Feel free to contact our customer support team for any of your rental queries or assistance. We’re here to help you in every step of the way.';

    // Set the document title
    this.titleService.setTitle(metaTitle);

    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }

  onSubmit(): void {
    this.messageStatus = '';
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formData = this.contactForm.value;

    this.http.post('https://acomal.top/send-mail/77/', formData).subscribe({
      next: () => {
        this.messageStatus = 'Message Sent successfully!';
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: () => {
        this.messageStatus = 'Error sending message. Please try again.';
        this.isSubmitting = false;
      },
    });
  }

  onModalClick() {
    this.isModal = !this.isModal;
  }
}

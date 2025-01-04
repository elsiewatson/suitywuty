import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailItemReviewComponent } from './email-item-review.component';

describe('EmailItemReviewComponent', () => {
  let component: EmailItemReviewComponent;
  let fixture: ComponentFixture<EmailItemReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailItemReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailItemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

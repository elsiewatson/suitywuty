import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailGiftVoucherComponent } from './email-gift-voucher.component';

describe('EmailGiftVoucherComponent', () => {
  let component: EmailGiftVoucherComponent;
  let fixture: ComponentFixture<EmailGiftVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailGiftVoucherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailGiftVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

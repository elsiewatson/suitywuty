import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOrderSuccessComponent } from './email-order-success.component';

describe('EmailOrderSuccessComponent', () => {
  let component: EmailOrderSuccessComponent;
  let fixture: ComponentFixture<EmailOrderSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailOrderSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

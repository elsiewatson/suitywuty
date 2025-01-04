import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOffersComponent } from './email-offers.component';

describe('EmailOffersComponent', () => {
  let component: EmailOffersComponent;
  let fixture: ComponentFixture<EmailOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

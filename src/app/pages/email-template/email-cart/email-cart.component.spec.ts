import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCartComponent } from './email-cart.component';

describe('EmailCartComponent', () => {
  let component: EmailCartComponent;
  let fixture: ComponentFixture<EmailCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

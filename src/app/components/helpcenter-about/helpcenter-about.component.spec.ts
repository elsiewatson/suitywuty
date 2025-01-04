import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcenterAboutComponent } from './helpcenter-about.component';

describe('HelpcenterAboutComponent', () => {
  let component: HelpcenterAboutComponent;
  let fixture: ComponentFixture<HelpcenterAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpcenterAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpcenterAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

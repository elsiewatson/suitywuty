import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailOneComponent } from './product-detail-one.component';

describe('ProductDetailOneComponent', () => {
  let component: ProductDetailOneComponent;
  let fixture: ComponentFixture<ProductDetailOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

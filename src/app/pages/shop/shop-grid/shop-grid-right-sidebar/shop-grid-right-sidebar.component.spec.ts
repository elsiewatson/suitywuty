import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridRightSidebarComponent } from './shop-grid-right-sidebar.component';

describe('ShopGridRightSidebarComponent', () => {
  let component: ShopGridRightSidebarComponent;
  let fixture: ComponentFixture<ShopGridRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopGridRightSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopGridRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

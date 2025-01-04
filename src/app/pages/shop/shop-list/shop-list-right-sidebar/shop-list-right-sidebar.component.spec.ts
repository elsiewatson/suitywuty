import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListRightSidebarComponent } from './shop-list-right-sidebar.component';

describe('ShopListRightSidebarComponent', () => {
  let component: ShopListRightSidebarComponent;
  let fixture: ComponentFixture<ShopListRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopListRightSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopListRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

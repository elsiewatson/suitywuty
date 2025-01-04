import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridLeftSidebarComponent } from './shop-grid-left-sidebar.component';

describe('ShopGridLeftSidebarComponent', () => {
  let component: ShopGridLeftSidebarComponent;
  let fixture: ComponentFixture<ShopGridLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopGridLeftSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopGridLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

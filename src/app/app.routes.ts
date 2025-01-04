import { Routes } from '@angular/router';
import { NormalizeUrlGuard } from './guards/normalize-url.guard';
import { IndexOneComponent } from './pages/index/index-one/index-one.component';
import { ShopGridComponent } from './pages/shop/shop-grid/shop-grid/shop-grid.component';
import { ShopCheckoutComponent } from './pages/shop/shop-checkout/shop-checkout.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BlogsComponent } from './pages/blog/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { TermsComponent } from './pages/utility/terms/terms.component';
import { PrivacyComponent } from './pages/utility/privacy/privacy.component';
import { ErrorComponent } from './pages/special/error/error.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogDetailComponent2 } from './pages/blog/blog-detail2/blog-detail.component';
import { CookiesComponent } from './pages/utility/cookies/privacy.component';
import { RefundComponent } from './pages/utility/refund/terms.component';
import { MensblackleatherjacketComponent } from './pages/shop/product-detail/mens-black-leather-jacket/product-detail-one.component';
import { LightbluebodycongownComponent } from './pages/shop/product-detail/light-blue-bodycon-gown/product-detail-one.component';
import { MenshoodieshirtComponent } from './pages/shop/product-detail/men-hoodie-shirt/product-detail-one.component';
import { MensredandwhitesuitComponent } from './pages/shop/product-detail/mens-red-and-white-suit/product-detail-one.component';
import { WomenscoffeehighnecksweaterComponent } from './pages/shop/product-detail/womens-coffee-high-neck-sweater/product-detail-one.component';
import { ModernsheathdressesComponent } from './pages/shop/product-detail/modern-sheath-dresses/product-detail-one.component';

export const routes: Routes = [
  { path: '', component: IndexOneComponent, canActivate: [NormalizeUrlGuard] },
  {
    path: 'shop',
    component: ShopGridComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'light-blue-bodycon-gown',
    component: LightbluebodycongownComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'mens-black-leather-jacket',
    component: MensblackleatherjacketComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'men-hoodie-shirt',
    component: MenshoodieshirtComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'mens-red-and-white-suit',
    component: MensredandwhitesuitComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'modern-sheath-dresses',
    component: ModernsheathdressesComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'womens-coffee-high-neck-sweater',
    component: WomenscoffeehighnecksweaterComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'checkout',
    component: ShopCheckoutComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'about',
    component: AboutusComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'how-to-style-your-rental-dress-for-maximum-impact',
    component: BlogDetailComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'how-renting-a-dress-can-make-your-fashion-choices-more-flexible',
    component: BlogDetailComponent2,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'cookies-policy',
    component: CookiesComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'privacy-policy',
    component: PrivacyComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'return-and-refund-policy',
    component: RefundComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'terms-and-conditions',
    component: TermsComponent,
    canActivate: [NormalizeUrlGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [NormalizeUrlGuard],
  },
  { path: '**', component: ErrorComponent, pathMatch: 'full' },
];

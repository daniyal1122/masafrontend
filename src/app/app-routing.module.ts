import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './SHOP/product-list/product-list.component';
import { IndexComponent } from './HOME/index/index.component';
import { DetailsComponent  } from './SHOP/details/details.component';
import { CartComponent } from './SHOP/cart/cart.component';
import { CheckoutComponent } from './SHOP/checkout/checkout.component';
import { ConfirmComponent } from './SHOP/confirm/confirm.component';
import { RegisterComponent } from './ACCOUNTS/register/register.component';
import { LoginComponent } from './ACCOUNTS/login/login.component';
import { ContactComponent } from './ACCOUNTS/contact/contact.component';
import { AccountComponent } from './ACCOUNTS/account/account.component';
import { AboutusComponent } from './HOME/aboutus/aboutus.component';
import { BlogslistComponent } from './BLogs/blogslist/blogslist.component'; 
import { BlogsdetailComponent } from './BLogs/blogsdetail/blogsdetail.component';
import { BrandshomeComponent } from './BRANDS/brandshome/brandshome.component';
import { ConfirmuserComponent } from './CONFIRMATION/confirmuser/confirmuser.component';
const routes: Routes = [
   { path: '', component: IndexComponent },
   { path: 'products', component: ProductListComponent },
  { path: 'products/:name', component: ProductListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details/:id#name', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'my-account', component: AccountComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'blogs', component: BlogslistComponent },
  { path: 'blogdetails/:id', component: BlogsdetailComponent },
  { path: 'brands/:id', component: BrandshomeComponent },
  { path: 'confirmuser', component: ConfirmuserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload', useHash: true })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [IndexComponent, ProductListComponent,CartComponent,CheckoutComponent,ConfirmComponent,RegisterComponent,LoginComponent,ContactComponent,AccountComponent,AboutusComponent,BlogslistComponent,BlogsdetailComponent,BrandshomeComponent,ConfirmuserComponent]

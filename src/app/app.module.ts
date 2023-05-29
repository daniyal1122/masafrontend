import { Component, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from './shared.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './SHOP/product-list/product-list.component';
import { IndexComponent } from './HOME/index/index.component';
import { DetailsComponent } from './SHOP/details/details.component';
import * as $ from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CartComponent } from './SHOP/cart/cart.component';
import { CheckoutComponent } from './SHOP/checkout/checkout.component';
import { ConfirmComponent } from './SHOP/confirm/confirm.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { RegisterComponent } from './ACCOUNTS/register/register.component';
import { LoginComponent } from './ACCOUNTS/login/login.component';
import { ContactComponent } from './ACCOUNTS/contact/contact.component';
import { AccountComponent } from './ACCOUNTS/account/account.component';
import { ModalModule } from 'ngb-modal';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';
import { AboutusComponent } from './HOME/aboutus/aboutus.component';
import {NgPipesModule} from 'ngx-pipes';
import { BlogslistComponent } from './BLogs/blogslist/blogslist.component';
import { BlogsdetailComponent } from './BLogs/blogsdetail/blogsdetail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrandshomeComponent } from './BRANDS/brandshome/brandshome.component';
import { TabModule } from 'angular-tabs-component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterCategoriesPipe } from './PIPES/filter-categories.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmuserComponent } from './CONFIRMATION/confirmuser/confirmuser.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    IndexComponent,
    DetailsComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    AccountComponent,
    AboutusComponent,
    BlogslistComponent,
    BlogsdetailComponent,
    BrandshomeComponent,
    FilterCategoriesPipe,
    ConfirmuserComponent,
  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxImageZoomModule,
    NgxSliderModule,
    ModalModule,
    NgxAutocompleteModule,
    NgPipesModule,
    NgxPaginationModule,
    TabModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule
     
  ],
 
  providers: [SharedService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

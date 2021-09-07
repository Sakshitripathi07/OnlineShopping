import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './components/review/review.component';
import { OrderedProductsComponent } from './components/ordered-products/ordered-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    ProductListComponent,
    ReviewComponent,
    OrderedProductsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

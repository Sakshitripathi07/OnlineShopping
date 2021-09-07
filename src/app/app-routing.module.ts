import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { OrderedProductsComponent } from './components/ordered-products/ordered-products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent,
  },
  {
    path: 'user', component:UserComponent,

  },
  {
    path: 'product/:model', component:ProductComponent,

  },
  {
    path: 'product-list/:category',component:ProductListComponent,

  },
  {
    path:'cart',component:CartComponent,

  },
  {
    path:'checkout', component:CheckoutComponent,

  },
  {
    path:'orderedProducts/:orderId',component:OrderedProductsComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CurrentOrderPageComponent } from "./current-order-page/current-order-page.component";
import { PreviousOrdersPageComponent } from "./previous-orders-page/previous-orders-page.component";
import { SupportComponent } from "./support/support.component";
import {OrderProductComponent} from "./order-product/order-product.component";
import {ProductDetailPageComponent} from "./product-detail-page/product-detail-page.component";
import {PreviousOrdersItemsComponent} from "./previous-orders-items/previous-orders-items.component";
import {TrackingComponent} from "./tracking/tracking.component";
import {PaymentComponent} from "./payment/payment.component";
import {ReviewOfServiceComponent} from "./review-of-service/review-of-service.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/view-cart',
    component: CurrentOrderPageComponent
  },
  {
    path: 'home/past-orders',
    component: PreviousOrdersPageComponent,
  },
  {
    path: 'home/request-support',
    component: SupportComponent,
  },
  {
    path: 'home/review-of-service',
    component: ReviewOfServiceComponent,
  },
  {
    path: 'home/shop',
    component: OrderProductComponent,
  },
  {
    path: 'home/shop/view-product-detail',
    component: ProductDetailPageComponent,
  },
  {
    path: 'home/pay',
    component: PaymentComponent,
  },
  {
    path: 'home/past-orders/previous-orders-items',
    component: PreviousOrdersItemsComponent,
  },
  {
    path: 'home/past-orders/tracking',
    component: TrackingComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

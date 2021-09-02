import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { LoginUserService } from './services/loginUser/login-user.service';
import { ShopInfoService } from './services/shopInfo/shop-info.service';
import { PurchaseInfoService } from './services/purchaseInfo/purchase-info.service';

import { CustomerNavBarComponent } from './components/nav-bars/customer-nav-bar/customer-nav-bar.component';
import { EmployeeNavBarComponent } from './components/nav-bars/employee-nav-bar/employee-nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeBaseComponent } from './components/componentBases/employee-base/employee-base.component';
import { CustomerBaseComponent } from './components/componentBases/customer-base/customer-base.component';
import { AddBookComponent } from './components/add-book/add-book.component';

import { ShopComponent } from './components/shop/shop.component';
import { CustomerPurchasesComponent } from './components/customerPurchases/customer-purchases.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { DatePipePipe } from './pipes/datePipe/date-pipe.pipe';
import { EmployeePurchasesComponent } from './components/employee-purchases/employee-purchases.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CustomerNavBarComponent,
    EmployeeNavBarComponent,
    LoginComponent,
    EmployeeBaseComponent,
    CustomerBaseComponent,
    AddBookComponent,
    ShopComponent,
    CustomerPurchasesComponent,
    WishlistComponent,
    DatePipePipe,
    EmployeePurchasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginUserService,
    ShopInfoService,
    PurchaseInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


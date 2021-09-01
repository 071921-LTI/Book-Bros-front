import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { LoginUserService } from './services/loginUser/login-user.service';
import { ShopInfoService } from './services/shopInfo/shop-info.service';

import { CustomerNavBarComponent } from './components/customer-nav-bar/customer-nav-bar.component';
import { EmployeeNavBarComponent } from './components/employee-nav-bar/employee-nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeBaseComponent } from './components/componentBases/employee-base/employee-base.component';
import { CustomerBaseComponent } from './components/componentBases/customer-base/customer-base.component';
import { ShopComponent } from './components/shop/shop.component';
import { CustomerRequestComponent } from './components/customer-request/customer-request.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CustomerNavBarComponent,
    EmployeeNavBarComponent,
    LoginComponent,
    EmployeeBaseComponent,
    CustomerBaseComponent,
    ShopComponent,
    CustomerRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginUserService,
    ShopInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


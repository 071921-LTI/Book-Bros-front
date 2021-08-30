import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CustomerNavBarComponent } from './components/customer-nav-bar/customer-nav-bar.component';
import { EmployeeNavBarComponent } from './components/employee-nav-bar/employee-nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginUserService } from './services/loginUser/login-user.service';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CustomerNavBarComponent,
    EmployeeNavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


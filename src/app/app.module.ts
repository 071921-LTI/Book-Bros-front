import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerNavBarComponent } from './customer-nav-bar/customer-nav-bar.component';
import { EmployeeNavBarComponent } from './employee-nav-bar/employee-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerNavBarComponent,
    EmployeeNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

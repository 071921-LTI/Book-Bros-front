import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { EmployeeBaseComponent } from './components/componentBases/employee-base/employee-base.component';
import { CustomerBaseComponent } from './components/componentBases/customer-base/customer-base.component';
import { AddBookComponent } from './components/add-book/add-book.component';


const routes: Routes = [
  {
  path:'',
  component: AppComponent,
  children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path:'customer',
    component: CustomerBaseComponent,
    children: [
        {
          path: 'shop',
          component: ShopComponent
        }
      ]
    },
    {
      path:'employee',
      component: EmployeeBaseComponent,
      children: [
          {
            path: 'add-book',
            component: AddBookComponent
          },
          {
            path: 'shop',
            component: ShopComponent
          }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

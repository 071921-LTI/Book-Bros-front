import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { EmployeeBaseComponent } from './components/componentBases/employee-base/employee-base.component';
import { CustomerBaseComponent } from './components/componentBases/customer-base/customer-base.component';
import { CustomerRequestComponent } from './components/customer-request/customer-request.component';

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
            path: 'shop',
            component: ShopComponent
          }
        ]
      },
      {
        path:'customer',
        component: CustomerBaseComponent,
        children: [
            {
              path: 'request',
              component: CustomerRequestComponent
            }
          ]
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

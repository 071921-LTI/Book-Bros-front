import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginBaseComponent } from './components/loginBase/login-base/login-base.component';
import { EmployeeBaseComponent } from './components/employeeBase/employee-base/employee-base.component';
import { CustomerBaseComponent } from './components/customerBase/customer-base/customer-base.component';

const routes: Routes = [
  {
  path:'',
  component: LoginBaseComponent,
  children: [
      {
        path: 'login',
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
          path: 'placeholder',
          component: CustomerBaseComponent
        }
      ]
    },
    {
      path:'employee',
      component: EmployeeBaseComponent,
      children: [
          {
            path: 'placeholder',
            component: EmployeeBaseComponent
          }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

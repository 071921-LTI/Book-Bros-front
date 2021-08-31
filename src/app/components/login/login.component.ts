import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../services/loginUser/login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

ngOnInit(): void {
  
}

constructor(private loginS: LoginUserService, private router: Router) {}

navigateUser(router:Router): void {

  let authToken = sessionStorage.getItem('token')
  if (authToken != null) {
    let tArr;
    tArr = authToken.split(":");
            
    if (tArr[1] === 'Customer') {
      router.navigate(['customer/placeholder']);
              
    } else if (tArr[1] === 'Employee'){
      router.navigate(['employee/placeholder']);
    }
  }
}

  login(username:string, password:string) {

    this.loginS.loginUser(username, password, () => this.navigateUser(this.router))
 }
}


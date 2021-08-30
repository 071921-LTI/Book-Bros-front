import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../services/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

ngOnInit(): void {
  
}

constructor(private loginS: LoginUserService) {}

  login(username:string, password:string) {

    this.loginS.loginUser(username, password)
 }
}


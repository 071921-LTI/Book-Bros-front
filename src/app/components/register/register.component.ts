import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  credentials = {
    username: '',
    password: '',
    passwordCheck: ''
  }

  register() {
    this.userService.register(this.credentials.username, this.credentials.password).subscribe(response => {
      console.log(response)
    })
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/registerUser/user.service';

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

    const alertText: string = this.validate();

    if (alertText) return alert(alertText);

    this.userService.register(this.credentials.username, this.credentials.password).subscribe(response => {
      window.location.href = '/';
    })
  }

  validate(): string {

    if (this.credentials.username.trim() === '' || this.credentials.password.trim() === '') return 'Please fill in all fields';

    if (this.credentials.password !== this.credentials.passwordCheck) return 'Passwords do not match';

    return '';
  }
}

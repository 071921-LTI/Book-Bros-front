import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginUserService {
  authToken: string = '';
  loginUser(username:string, password:string, navigate:any) {

    let xhr = new XMLHttpRequest();
    xhr.open("POST", environment.apiUrl + "login");

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200){
        let authToken = xhr.getResponseHeader("Authorization");
        if (authToken != null) {
          sessionStorage.setItem("token", authToken);
          navigate();
        } else if (xhr.readyState === 4){
          console.log('Something went wrong...');
        }
      } 
    }

    let credentials = {
      username: username,
      password: password,
    }

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(credentials));
  }
}

import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginUserService {

  authToken: string = '';
    loginUser(username:string, password:string) {

      // console.log(username);
      // console.log(password);

      let xhr = new XMLHttpRequest();
    
      xhr.open("POST", "http://localhost:8080/login");

      xhr.onreadystatechange = function() {
          if(xhr.readyState === 4 && xhr.status === 200){
              let authToken = xhr.getResponseHeader("Authorization");
              let tArr;

              if (authToken != null) {
               sessionStorage.setItem("token", authToken);
               // console.log(authToken);
                tArr = authToken.split(":");
            
                // console.log(tArr[1]);

                // if (tArr[1] === 'Employee') {
                //   window.location.href = 'employee.html';
                // } else if (tArr[1] === 'Manager'){
                //   window.location.href = 'manager.html';
                // }
            
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

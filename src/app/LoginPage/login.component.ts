import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private baseUrl:any = 'http://localhost:8182/user'; 

  constructor(private http: HttpClient,private router: Router) { 

  }

  loginForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.pattern(/^\S*$/)]),
    password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{4,20}$/)  ]),
    
  });
  
  

  get username():any{
    return this.loginForm.get('username');
  }

  get password():any{
    return this.loginForm.get('password')
  }

  myForm:any;
 
  onLogin(){
    this.myForm=this.loginForm;

    if (this.myForm.valid) {
      const loginData = new FormData();
      loginData.append('username', this.username.value);
      loginData.append('password', this.password.value);
  
      this.http.post(this.baseUrl + "/login", loginData)
        .subscribe(
          response => {
            if(response!=null)
            {
              alert("Login Successfully")
              console.log('Login successful', response);
              //this.router.navigate(['/home']);

              const loggedUser=response;

              //console.log("Logged User "+loggedUser);
              sessionStorage.setItem("LoggedUser", JSON.stringify(loggedUser));

              //sessionStorage.setItem("loggedUser",loggedUser);
              
              this.router.navigateByUrl("/home");
            }
            else{
              alert("Wrong Credentials")
              console.log('Wrong User', response);
            }       
          },
          error => {
            console.error('Login failed', error);
          }
        );
    
        }
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  loginForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]).{8,}$/)  ]),
  });

  

  get username():any{
    return this.loginForm.get('username');
  }

  get password():any{
    return this.loginForm.get('password')
  }

 
  onLogin(){

  }
}

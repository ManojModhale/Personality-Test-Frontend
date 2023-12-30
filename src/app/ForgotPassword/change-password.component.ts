import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  private baseUrl:any = 'http://localhost:8182/user'; 

  isSubmited:boolean=false;

  constructor(private http: HttpClient,private router: Router) { 

  }

  showOtp = false;
  showNewPassword = false;

  forgotPasswordForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.pattern(/^\S*$/)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    otp:new FormControl("",[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
    password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{4,20}$/)]),
    confirmpass:new FormControl("",[Validators.required, this.matchPassword.bind(this)])
  });

  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    if (!this.forgotPasswordForm || !this.forgotPasswordForm.get('password')) {
      console.error('Form or password control not initialized.');
      return { 'passwordMismatch': true }; 
    }

    const password = this.forgotPasswordForm.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  get username():any{
    return this.forgotPasswordForm.get('username');
  }

  get email():any{
    return this.forgotPasswordForm.get('email');
  }

  get otp():any{
    return this.forgotPasswordForm.get('otp');
  }

  get password():any{
    return this.forgotPasswordForm.get('password');
  }

  get confirmpass():any{
    return this.forgotPasswordForm.get('confirmpass');
  }

  submitForm() {

    const forgotpassData = new FormData();
    forgotpassData.append('username', this.username.value);
    forgotpassData.append('email', this.email.value);

    console.log(forgotpassData);

    this.http.post(this.baseUrl + "/forgotpass", forgotpassData).subscribe(
      (response: any) => {
        // Handle success response
        
        console.log(response);

        if(response!=null)
            {
              alert("User Found successfully!");
              this.showOtp = true;
              console.log('User Found successful', response);
            }
            else{
              alert("Wrong User")
              console.log('Wrong User', response);
            }     
      },
      (error: any) => {
        // Handle error response
        alert("Error in Forgot Password: " + error.message);
        console.error('Error Register:', error);
      }
    );
    
  }

  verifyOtp() {
    // Add logic to verify OTP and show New Password fields
    // For now, let's simulate OTP verification
    this.showNewPassword = true;
  }

  updatePassword() {
    
    const changepass = new FormData();
    changepass.append('username', this.username.value);
    changepass.append('password', this.password.value);

    console.log(changepass);

    this.http.post(this.baseUrl + "/changepass", changepass).subscribe(
      (response: any) => {
        
        console.log(response);

          if(response==true)
            {
              alert("Password has been successfully Updated!");
              
              console.log("Password Change successful"+ response);
              this.router.navigate(['/login']);
            }
            else{
              alert("Not Updated Password")
              console.log("Not Updated Password"+ response);
            }     
      },
      (error: any) => {
        // Handle error response
        alert("Error in Update Password: " + error.message);
        console.error('Error Update Passsord:', error);
      }
    );

    //console.log(this.forgotPasswordForm.value);
    alert('Password updated successfully!');
  }
}

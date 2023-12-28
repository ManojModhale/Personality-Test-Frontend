import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  showOtp = false;
  showNewPassword = false;

  submitForm() {
    // Add logic to submit the form and show OTP field
    // For now, let's simulate the form submission
    this.showOtp = true;
  }

  verifyOtp() {
    // Add logic to verify OTP and show New Password fields
    // For now, let's simulate OTP verification
    this.showNewPassword = true;
  }

  updatePassword() {
    // Add logic to update the password
    alert('Password updated successfully!');
  }
}

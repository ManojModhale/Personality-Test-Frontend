import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  UName:string="Bhagya"
  fName: string = 'Bhagyashri'; // Initialize these variables with your data
  lName: string = 'katkamwar';
  email: string = 'bhagya@gmail.com';
  cNumber: number = 8830152896;
  qualification:string='Btech'
}

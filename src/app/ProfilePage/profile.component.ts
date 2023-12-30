import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface UserProfile {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  mobileno: number;
  qualification: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  private baseUrl:any = 'http://localhost:8182/user'; 

  userProfile: UserProfile = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    mobileno: 0,
    qualification: ''
  };
  
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(){
    const username = 'ganesh1'; 
    this.http.get<UserProfile>(`${this.baseUrl}/profile/${username}`).subscribe(
      response => {
        this.userProfile = response;
      },
      error => {
        console.error('Error fetching user profile', error);
      }
    );
  }

  
  
}

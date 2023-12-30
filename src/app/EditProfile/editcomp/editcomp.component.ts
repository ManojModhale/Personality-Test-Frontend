import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface UserProfile {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  mobileno: any;
  qualification: string;
  designation:string;
}

@Component({
  selector: 'app-editcomp',
  templateUrl: './editcomp.component.html',
  styleUrl: './editcomp.component.css'
})
export class EditcompComponent implements OnInit {

  private baseUrl:any = 'http://localhost:8182/user'; 

  editProfile: UserProfile = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    mobileno: 0,
    qualification: '',
    designation: ''
  };
  
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(){
    const username = 'manoj0123'; 
    this.http.get<UserProfile>(`${this.baseUrl}/profile/${username}`).subscribe(
      response => {
        this.editProfile = response;
        this.editProfile.mobileno = +this.editProfile.mobileno;

        this.updateprof.patchValue({
          firstname: this.editProfile.firstname,
          lastname: this.editProfile.lastname,
          email: this.editProfile.email,
          mobileno:this.editProfile.mobileno,
          designation: this.editProfile.designation,
          qualification: this.editProfile.qualification
        });

      },
      error => {
        console.error('Error fetching user profile', error);
      }
    );
  }

  updateprof = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    lastname: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobileno: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    designation: new FormControl("", [Validators.required]),
    qualification: new FormControl("", [Validators.required]),
  })
  

  
  
get firstname():any{
  return this.updateprof.get('firstname');
}


get lastname():any{
  return this.updateprof.get('lastname');
}

get email():any{
  return this.updateprof.get('email');
}

get mobileno():any{
  return this.updateprof.get('mobileno');
}

get designation():any{
  return this.updateprof.get('designation');
}

get qualification():any{
  return this.updateprof.get('qualification');
}
myForm:any;


   updateProfile(){

    console.log("FirstName after : "+this.firstname.patchValue);
    
    this.myForm=this.updateprof;
    const username = 'manoj0123'; 
    if (this.updateprof.valid) 
    {
      const updatedProfile = {
        firstname: this.myForm.value.firstname,
        lastname: this.myForm.value.lastname,
        email: this.myForm.value.email,
        mobileno: +this.myForm.value.mobileno,
        designation: this.myForm.value.designation,
        qualification: this.myForm.value.qualification,
      };

      this.http.put(`${this.baseUrl}/updateprofile/${username}`, updatedProfile).subscribe(
        (response: any) => {
          // Handle success response
          alert("Profile updated successfully!");
          console.log(response);
          
        },
        (error: any) => {
          // Handle error response
          alert("Error in updation: " + error.message);
          console.error('Error update:', error);
        }
      )

   }
}
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private http: HttpClient,private router: Router) { 

  }
  logoutHandler(){
    // console.log("logging out")
    // //sessionStorage.setItem("LoggedUser",JSON.stringify(null));
    // //localStorage.setItem("LoggedUser",JSON.stringify(null));
    // sessionStorage.removeItem("LoggedUser");
    // localStorage
    // console.log(sessionStorage.getItem("LoggedUser"))
    // this.router.navigateByUrl("/");

    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout logic
        console.log('Logging out');
        sessionStorage.removeItem('LoggedUser');
        console.log(sessionStorage.getItem('LoggedUser'));
        this.router.navigateByUrl('/');
      }
    });
  }

}

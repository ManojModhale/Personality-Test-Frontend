import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent{
  constructor(private router:Router){

  }

  ngOnInit() {
    console.log("inside logging out");
    sessionStorage.removeItem("LoggedUser");
    sessionStorage.clear();
    console.log(sessionStorage.getItem("LoggedUser"));

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

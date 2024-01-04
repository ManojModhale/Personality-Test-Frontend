import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { 

  }

  loggingout(){
    console.log("inside logging out");
    sessionStorage.removeItem("LoggedUser");
    sessionStorage.clear();
    console.log(sessionStorage.getItem("LoggedUser"));
    this.router.navigateByUrl("/");
  }

}

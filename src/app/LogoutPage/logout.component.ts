import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl("/");
  }

}

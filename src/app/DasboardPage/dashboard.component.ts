import { Component } from '@angular/core';
import { GetAllTestsService } from '../All-Servicess/get-all-tests.service';
import { Test } from './test';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrl: './dashboard.component.css'
  styleUrls: ['./dashboard.component.css', '../HomePage/home.component.css']
})
export class DashboardComponent {
  tests: Test[] = [];
  username: string = "";
  firstname:string="";
  lastname:string="";


  constructor(private testService: GetAllTestsService) { }

  ngOnInit(): void {
    let LoggedUser = sessionStorage.getItem("LoggedUser");
    if (LoggedUser) {
    let parsedUser = JSON.parse(LoggedUser);
    
    this.username=parsedUser.username;
    this.firstname=parsedUser.firstname;
    this.lastname=parsedUser.lastname;
    this.loadTests();
    }
  }

  loadTests() {
    this.testService.getTestsByUsername(this.username)
      .subscribe(
        data => {
          this.tests = data
        },
        error => {
          console.error('Error loading tests', error)
        }
      );
  }

}





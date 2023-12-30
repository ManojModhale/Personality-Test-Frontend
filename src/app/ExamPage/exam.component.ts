import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {

  isCheckboxChecked = false;

  constructor(private router: Router) { 

  }

  startExam(){
    if (this.isCheckboxChecked) {
      console.log('Redirecting to the exam component...');
      //this.router.navigate(['/']);
    } 
    else {
      console.log('Checkbox is not checked. Display validation message.');
      
    }
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcomp',
  templateUrl: './editcomp.component.html',
  styleUrl: './editcomp.component.css'
})
export class EditcompComponent {

  updateprof=new FormGroup({
    firstname:new FormControl("Bhagyashri",[Validators.required,Validators.pattern(/^[A-Z][a-z]*$/)]),
    lastname:new FormControl("Katkamwar",[Validators.required,Validators.pattern(/^[A-Z][a-z]*$/)]),
    email:new FormControl("bhagyashree@gmail.com",[Validators.required,Validators.email]),
    mobileno:new FormControl("785284519",[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),
    designation:new FormControl("Student",[Validators.required]),
    qualification:new FormControl("BTech",[Validators.required]),
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
  
   updateProf(){

   }

}

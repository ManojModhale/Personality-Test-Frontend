import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './WelcomePage/welcome.component';
import { LoginComponent } from './LoginPage/login.component';
import { RegisterComponent } from './RegistrationPage/register.component';
import { HomeComponent } from './HomePage/home.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}

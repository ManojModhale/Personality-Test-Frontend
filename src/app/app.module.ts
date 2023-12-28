import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './WelcomePage/welcome.component';
<<<<<<< HEAD
import { LoginComponent } from './LoginPage/login.component';
=======
import { RegisterComponent } from './RegistrationPage/register.component';
>>>>>>> 9652be3a5afa43bf90bd3d112538a9dc4db4f659

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
<<<<<<< HEAD
    LoginComponent
=======
    RegisterComponent
>>>>>>> 9652be3a5afa43bf90bd3d112538a9dc4db4f659
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

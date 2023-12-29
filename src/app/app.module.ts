import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './WelcomePage/welcome.component';
import { LoginComponent } from './LoginPage/login.component';
import { RegisterComponent } from './RegistrationPage/register.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './ProfilePage/profile.component';
import { EditcompComponent } from './EditProfile/editcomp/editcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    CarouselComponent,
    ProfileComponent,
    EditcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './WelcomePage/welcome.component';
import { LoginComponent } from './LoginPage/login.component';
import { RegisterComponent } from './RegistrationPage/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './ForgotPassword/change-password.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './HomePage/home.component';
import { TestComponent } from './Testing/test.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    CarouselComponent,
    HomeComponent,
    TestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

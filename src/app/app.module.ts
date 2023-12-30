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
import { HomeComponent } from './HomePage/home.component';
import { TestComponent } from './Testing/test.component';
import { HttpClientModule } from '@angular/common/http';
import { ExamComponent } from './ExamPage/exam.component';
import { ChangePasswordComponent } from './ForgotPassword/change-password.component';
import { TimerComponent } from './Timer/timer/timer.component';
import { QuestionComponent } from './QuestionPage/question.component';
import { TestFComponent } from './TestingF/test-f.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    CarouselComponent,
    ProfileComponent,
    EditcompComponent,
    ChangePasswordComponent,
    CarouselComponent,
    HomeComponent,
    TestComponent,
    ExamComponent,
    TimerComponent,
    QuestionComponent,
    TestFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { SigninComponent } from './components/signin/signin.component';
import { AboutComponent } from './components/about/about.component';
import { PrivateprofileComponent } from './components/privateprofile/privateprofile.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import {FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TechearsComponent } from './components/techears/techears.component'


@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    SigninComponent,
    AboutComponent,
    PrivateprofileComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    TechearsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

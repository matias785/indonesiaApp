import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AboutComponent } from './components/about/about.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { SigninComponent } from './components/signin/signin.component';
import { PrivateprofileComponent } from './components/privateprofile/privateprofile.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TechearsComponent } from './components/techears/techears.component'

import { AuthGuard } from './auth.guard';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'newuser',
    component: NewuserComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'privateprofile',
    component: PrivateprofileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'teachers',
    component: TechearsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AboutComponent } from './components/about/about.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { SigninComponent } from './components/signin/signin.component';
import { PrivateprofileComponent } from './components/privateprofile/privateprofile.component';
import { HomeComponent } from './components/home/home.component';
import { TechearsComponent } from './components/techears/techears.component'

import { AuthGuard } from './auth.guard';
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {NewsComponent} from "./components/news/news.component";




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
    path: 'new-user',
    component: NewuserComponent
  },
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
    path: 'private-profile/:name',
    component: PrivateprofileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'teachers',
    component: TechearsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pre-inscription',
    component: InscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  user = {
    name: '',
    lastName: '',
    gender: '',
    yearsOld: '',
    dni: '',    
    adress: '',        
    email: '',
    type: '',
    matter: '',
    password: ''  
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  newUser() { 
    console.log
    this.authService.newUser(this.user)
      .subscribe(
        res =>  {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['dashboard']);
        }, 
        err =>  console.log(err)
      )

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'app-privateprofile',
  templateUrl: './privateprofile.component.html',
  styleUrls: ['./privateprofile.component.css']
})
export class PrivateprofileComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private teachersService: TeachersService 
  ) { }

  teacher = '';
  profile:any ;
  param = {"name": ''}


  ngOnInit(): void {
    this.route.params.subscribe( (params) =>{this.teacher = params.name } )
    this.param.name = this.teacher
    console.log(this.param)
    this.teachersService.getOneTeacher(this.param)
      .subscribe(
        res => { 
          this.profile = res
          console.log(this.profile)
        },
        err => console.log(err)

      )

    }



  }





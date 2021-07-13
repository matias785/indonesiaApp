import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';


@Component({
  selector: 'app-techears',
  templateUrl: './techears.component.html',
  styleUrls: ['./techears.component.css']
})
export class TechearsComponent implements OnInit {

  teachers = [];
  




  constructor(
    private teachersService: TeachersService
  ) { }

  ngOnInit(): void {
    this.teachersService.getTeacher()
      .subscribe(
        res => {
          this.teachers = res;
        },
        err => console.log(err)
      )
  }

}

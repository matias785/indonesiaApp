import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'app-techears',
  templateUrl: './techears.component.html',
  styleUrls: ['./techears.component.css']
})
export class TechearsComponent implements OnInit {

  teachers = [];

  motos = [
    {
      marca: "honda",
      cilidrada:150
      },
    {
      marca: 'yamaha',
      cilidrada: 125
        },
    {
      marca: "motomel",
      cilidrada: 50
          }
  ]



  constructor(
    private teachersService: TeachersService
  ) { }

  ngOnInit(): void {
    this.teachersService.getTeacher()
      .subscribe(
        res => {

          this.teachers = res
          console.log(this.teachers[0]["name"])
        },
        err => console.log(err)
      )
  }

}

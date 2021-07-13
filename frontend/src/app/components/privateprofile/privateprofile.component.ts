import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privateprofile',
  templateUrl: './privateprofile.component.html',
  styleUrls: ['./privateprofile.component.css']
})
export class PrivateprofileComponent implements OnInit {

  constructor( 
    private router: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      const id = params.get('name')
    })
  }

}

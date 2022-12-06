import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
ID=0;
student:any;
  constructor(public activate:ActivatedRoute, public myservice:DemoService) {
    this.ID=activate.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.myservice.getStudentById(this.ID).subscribe(
      (data)=>{this.student=data}
    )
  }

}

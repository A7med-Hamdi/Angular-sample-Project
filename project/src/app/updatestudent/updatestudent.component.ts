import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  ID=0;
  student:any;
  constructor(public myservice:DemoService,public activate:ActivatedRoute) {
    this.ID=activate.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myservice.getStudentById(this.ID).subscribe(
      (data)=>{this.student=data})
  }
  updatestudent(n:string,a:number,e:string,s:number){
    this.myservice.updateStudent(this.ID,{name:n,age:a,email:e,salary:s}).subscribe();

  }

}

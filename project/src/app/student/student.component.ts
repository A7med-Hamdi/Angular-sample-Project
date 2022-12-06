import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any;
  decision:boolean =false;
  posts:any;

  constructor(public myservice:DemoService) {
   }

  ngOnInit(): void {
    this.myservice.getAllStudent().subscribe(
      (data)=>{
      console.log(data)}

    )
  }
  deletestudent(id:any){
  this.decision= confirm("are you sure you want to delete this student")
  if(this.decision){
    this.myservice.deleteStudent(id).subscribe();
    window.location.reload();
  }
  }

}

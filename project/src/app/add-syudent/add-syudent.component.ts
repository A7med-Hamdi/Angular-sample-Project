import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-add-syudent',
  templateUrl: './add-syudent.component.html',
  styleUrls: ['./add-syudent.component.css']
})
export class AddSyudentComponent implements OnInit {

  constructor(public myservice:DemoService) { }

  ngOnInit(): void {

  }


  addNewStudent(n:string,a:number,e:string,s:number){

    this.myservice.addStudent({name:n,age:a,email:e,salary:s}).subscribe();


  }


}

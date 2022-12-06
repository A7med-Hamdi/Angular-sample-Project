import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DemoService {

  #DB_URL="https://localhost:7272/api/Product";

  constructor(private myClient:HttpClient) {

  }
  getAllStudent(){
     return this.myClient.get(this.#DB_URL);
  }
  getStudentById(id:number){
     return this.myClient.get(this.#DB_URL+"/"+id);
  }
  addStudent(student:any): Observable<any>{
    return this.myClient.post(this.#DB_URL, student);

  }
  updateStudent(id:number,updatestudent:any){
    return this.myClient.put(this.#DB_URL+"/"+id,updatestudent );

  }
  deleteStudent(id:number){
    return this.myClient.delete(this.#DB_URL+"/"+id );

  }
}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSyudentComponent } from './add-syudent/add-syudent.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

const routes: Routes = [
  {path:"",component:StudentComponent},
  {path:"students",component:StudentComponent},
  {path:"addstudent",component:AddSyudentComponent},
  {path:"student/:id",component:StudentdetailsComponent},
  {path:"update/:id",component:UpdatestudentComponent},
  {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

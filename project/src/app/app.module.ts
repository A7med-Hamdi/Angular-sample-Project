import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddSyudentComponent } from './add-syudent/add-syudent.component';
import { HeaderComponent } from './header/header.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ErrorComponent } from './error/error.component';
import { DemoService } from './Services/demo.service';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddSyudentComponent,
    HeaderComponent,
    StudentdetailsComponent,
    ErrorComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

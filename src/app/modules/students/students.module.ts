import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentsComponent } from './components/students/students.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import { StudentComponent } from './components/student/student.component';
import {MatButtonModule} from "@angular/material/button";
import { StudentEditPageComponent } from './pages/student-edit-page/student-edit-page.component';
import { StudentEditFormComponent } from './components/student-edit-form/student-edit-form.component';


@NgModule({
  declarations: [
    StudentPageComponent,
    StudentsComponent,
    StudentComponent,
    StudentEditPageComponent,
    StudentEditFormComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class StudentsModule { }

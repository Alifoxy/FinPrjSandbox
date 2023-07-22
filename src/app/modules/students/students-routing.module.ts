import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentPageComponent} from "./pages/student-page/student-page.component";
import {StudentEditPageComponent} from "./pages/student-edit-page/student-edit-page.component";
import {studentResolver} from "../../services";

const routes: Routes = [
  {
    path: '', component: StudentPageComponent, children: [
      {path: ':id', component: StudentEditPageComponent, resolve: {data: studentResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {
}

import {ResolveFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {IStudent} from "../../interfaces";
import {StudentService} from "../student.service";

export const studentResolver: ResolveFn<IStudent> = (route, state) => {
  const student = inject(Router).getCurrentNavigation()?.extras.state as IStudent;

  if (student) {
    return student
  }
  const {id} = route.params;
  return inject(StudentService).getById(id)
};

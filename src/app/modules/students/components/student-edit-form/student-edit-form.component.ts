import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IStudent} from "../../../../interfaces";

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IStudent) {
  }
}

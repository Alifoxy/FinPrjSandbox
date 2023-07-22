import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentEditFormComponent} from "../../components/student-edit-form/student-edit-form.component";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-student-edit-page',
  template: '',
})
export class StudentEditPageComponent implements OnInit {
  constructor(private matDialog: MatDialog, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      console.log(data);
      this.matDialog.open(StudentEditFormComponent, {data})
    })
  }

}

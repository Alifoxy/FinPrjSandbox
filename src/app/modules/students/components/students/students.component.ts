import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../../../../interfaces";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input()
  students: IStudent[];
  panelOpenState = false;

  ngOnInit(): void {
  }

}

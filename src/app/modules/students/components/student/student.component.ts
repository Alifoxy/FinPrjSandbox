import {Component, Input} from '@angular/core';
import {IStudent} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input()
  student: IStudent;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  edit(): void {
    this.router.navigate([this.student.id], {relativeTo: this.activatedRoute, state:this.student})
  }
}

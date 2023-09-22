import {Component} from '@angular/core';
import {IStudent} from "../../../../interfaces";
import {StudentService} from "../../../../services";
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {MainInterceptor} from "../../../../main.interceptor";

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  students: IStudent[];
  length: number;
  pageIndex: number;

  pageSize = 10;
  showFirstLastButtons = true;


  constructor(private studentService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.pageIndex = page-1
      this.studentService.getAll(page).subscribe(value => {
        this.length = value.total_items
        this.students = value.items
      })
    })
  }

  handlePageEvent(e: PageEvent) {
    this.router.navigate([], {queryParams: {page: e.pageIndex + 1}})
  }

}

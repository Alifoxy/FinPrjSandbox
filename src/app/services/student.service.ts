import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPagination} from "../interfaces/pagination.interface";
import {IStudent} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(page = 1): Observable<IPagination<IStudent>> {
    return this.httpClient.get<IPagination<IStudent>>(urls.students.full, {params: {page}})
  }

  getById(id: number): Observable<IStudent> {
    return this.httpClient.get<IStudent>(urls.students.byId(id))
  }
}

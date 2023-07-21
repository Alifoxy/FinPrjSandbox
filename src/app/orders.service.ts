import { Injectable } from '@angular/core';
import {delay, Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Order} from "./order";

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  public baseURL = "http://lego12@owu.linkpc.net/mysql";
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.post<Order[]>('http://localhost:3006/auth/login')
      .pipe(delay(500))
  }
}

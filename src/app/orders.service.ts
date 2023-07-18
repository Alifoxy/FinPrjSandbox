import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  public baseURL = "http://lego12@owu.linkpc.net:3306/lego12";
  constructor(private http: HttpClient) { }

  public getOrders(): Observable<any> {
    return this.http.get(`${this.baseURL}/orders`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  public baseUrl = "mysql://lego12:lego12@owu.linkpc.net:3306/lego12";

  constructor(private httpClient: HttpClient) { }
  public getOrders(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}

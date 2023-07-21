import { Component } from '@angular/core';
import {Order} from "./order";
import {OrdersService} from "./orders.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  orders: Order[] = []
  loading = false

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.loading = true
    this.ordersService.getOrders()
      .subscribe(orders => {
        this.orders = orders
        this.loading = false
      })
  }
  // title = 'FinPrjSandbox';
  // orders!: Order[];
  // order: Order = new Order();
  // constructor(private orderService: OrdersService, private router: Router,) { }
  // public baseURL = "http://lego12@owu.linkpc.net/mysql";
  // private powered: string | null;
  // constructor(private http: HttpClient) { }
  //
  // getData() {
  //   this.http.get<Order>(this.baseURL, { observe: 'response' }).subscribe(res => {
  //     this.powered = res.headers.get('X-Powered-By');
  //     this.postTitle = res.body.title;
  //   });
  // }

  // ngOnInit() {
  //   this.orderService.getOrders().subscribe(data => {
  //     console.log(data);
  //     this.orders = data;
  //   })
  // }
  // orderDetails(id: number) {
  //   this.router.navigate(['orders', id]);
  //   console.log(id);
  //
  // }
}

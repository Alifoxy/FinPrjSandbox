import { Component } from '@angular/core';
import {Order} from "./order";
import {OrdersService} from "./orders.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinPrjSandbox';
  orders!: Order[];
  order: Order = new Order();
  constructor(private orderService: OrdersService, private router: Router,) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      console.log(data);
      this.orders = data;
    })
  }
  orderDetails(id: number) {
    this.router.navigate(['orders', id]);
    console.log(id);

  }
}

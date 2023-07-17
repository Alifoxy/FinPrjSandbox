import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from './order';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

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

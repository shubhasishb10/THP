import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from 'src/app/models/order.model';
import { Box } from 'src/app/models/box.model';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent implements OnInit {

  orders: Array<Order>;
  constructor(private orderSvc: OrderService) {
    this.orders = orderSvc.getOrders();
    console.log(this.orders);
   }

  ngOnInit() {
  }

  confirmOrder() {
    console.log(this.orders);
    this.orderSvc.setOrders(this.orders);
  }
  removeOrder(index) {
    this.orders.splice(index, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from '../order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  submitConfirm: boolean;
  isSubmitting: boolean;
  window: any;
  orders: Array<Order>;
  constructor(private orderSvc: OrderService, private http: HttpClient) {
    this.window = window;
    this.orders = orderSvc.getOrders();
    this.submitConfirm = false;
    this.isSubmitting = false;
  }

  submitData() {
    this.submitConfirm = true;
    this.isSubmitting = true;
    this.http.post("http://localhost:8080/medicine/order/bill",
      this.orders, { headers: { 'Content-Type': 'application/json' } }).subscribe((response) => {
        console.log(response);
        this.isSubmitting = false;
        setTimeout(() => {
          this.submitConfirm = false;
        }, 3000);
      });
  }

  ngOnInit() {
  }

}

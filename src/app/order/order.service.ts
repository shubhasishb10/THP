import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Array<Order>
  constructor() { }

  setOrders(orders: Array<Order>) {
    this.orders = orders;
    console.log(this.orders);
  }
  getOrders(){
    if(this.orders.length > 0){
      return this.orders;
    }
  }
}

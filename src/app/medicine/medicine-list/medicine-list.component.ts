import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../models/medicine.model';
import { Order } from '../../models/order.model';
import { HttpClient } from '@angular/common/http';
import { FetchType } from 'src/app/common/pagination-control-bar/pagination-control-bar.component';
import { OrderService } from 'src/app/order/order.service';
import { Box } from 'src/app/models/box.model';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  srchStr: string = '';
  tmpBox: Box;
  pageNumber: number;
  pageSize: number;
  medicines: Medicine[] = [];
  orders: Array<Order> = [];
  showClear: boolean = false;
  showSearch: boolean = true;
  totalPages: number;
  private static orderId: number = 1;
  private static baseURL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient, private orderSvc: OrderService) {
    this.pageSize = 10;
    this.pageNumber = 0;
    this.loadMedicines(this.pageNumber, this.pageSize);
  }
  loadMedicines(pn: number, ps: number) {
    let url = MedicineListComponent.baseURL + 'medicine/'
    if(this.srchStr != null && this.srchStr != '') {
      url += 'name/' + this.srchStr;
    } else {
      url += 'all';
    }
    this.http.get(url + '?pn=' + this.pageNumber + '&ps=' + this.pageSize).subscribe((response: any) => {
      console.log(response.content);
      console.log(response.totalPages);
      this.totalPages = response.totalPages;
      this.totalPages = this.totalPages - 1;
      this.medicines = response.content;
    })
  }
  loadSearchMedicine(srchKey:string, pn: number, ps:number) {
    this.pageNumber = 0;
    this.loadMedicines(this.pageNumber, this.pageSize);
    this.showClear = true;
    this.showSearch = false;
  }
  ngOnInit() {
  }
  resetSrchBox() {
    this.srchStr = '';
    this.showSearch = true;
    this.showClear = false;
    this.pageNumber = 0;
    this.loadMedicines(this.pageNumber, this.pageSize);
  }

  // Add Medicine to Order
  onAddingMedicineToOrder(medicine: Medicine) {
    let insertElement: boolean = true;
    if (this.orders.length > 0) {
      let i = 0;
      let checkedOnce: boolean = false;
      this.orders.map((k: Order) => {
        if (k.medicine.name === medicine.name && !checkedOnce) {
          insertElement = false;
          let tempOrderId = k.id;
          let tempCount = k.count;
          this.orders.splice(i, 1);
          this.orders.push({
            id: tempOrderId,
            medicine: medicine,
            count: ++tempCount
          })
          checkedOnce = true;
        }
        i++;
      })
    }
    if (insertElement) {
      this.orders.push({
        id: MedicineListComponent.orderId++,
        medicine: medicine,
        count: 1
      })
    }
    console.log(this.orders);
  }

  // Remove Medicine from Order
  onRemovingMedicineFromOrder(medicine: Medicine) {
    if (this.orders.length > 0) {
      let i = 0;
      let checkedOnce: boolean = false;
      this.orders.map((k: Order) => {
        if (k.medicine.name === medicine.name && !checkedOnce) {
          if (k.count == 1) {
            this.orders.splice(i, 1);
          } else if (k.count > 1) {
            let tempOrderId = k.id;
            let tempCount = k.count;
            this.orders.splice(i, 1);
            this.orders.push({
              id: tempOrderId,
              medicine: medicine,
              count: tempCount - 1
            });
          }
          checkedOnce = true;
        }
        i++;
      })
    }
  }
  setOrdersAndBox() {
    this.orderSvc.setOrders(this.orders);
  }

  setBox() {
    console.log('printing box details ----');
    console.log(this.orders);
  }
  // Pagination control
  resolvePagination(event: FetchType) {
    console.log(event);
    switch (event) {
      case FetchType.FIRST:
        this.pageNumber = 0;
        this.loadMedicines(this.pageNumber, this.pageSize);
        break;
      case FetchType.LAST:
        this.pageNumber = this.totalPages;
        this.loadMedicines(this.pageNumber, this.pageSize);
        break;
      case FetchType.NEXT:
        if (this.pageNumber == this.totalPages) {
          this.loadMedicines(this.totalPages, this.pageSize);
        } else {
          this.loadMedicines(++this.pageNumber, this.pageSize);
        }
        break;
      case FetchType.PREV:
        if (this.pageNumber <= 0) {
          this.loadMedicines(this.pageNumber, this.pageSize);
        } else {
          this.loadMedicines(--this.pageNumber, this.pageSize);
        }
        break;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../models/medicine.model';
import { Order } from '../../models/order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  srchStr: string = '';
  medicines: Medicine[] = [];
  orders: Array<Order> = [];
  showClear: boolean = false;
  showSearch: boolean = true;
  private static orderId: number = 1;

  constructor(private http: HttpClient) {
    this.loadMedicines();
  }
  loadMedicines() {
    this.http.get('http://localhost:8080/medicine/all').subscribe((response: Medicine[]) => {
      console.log(response);
      this.medicines = response;
    })
  }

  ngOnInit() {
  }
  searchMedicineByName() {
    if (this.srchStr != '' && this.srchStr != null) {
      let tempList: Medicine[] = [];
      this.medicines.map((value) => {
        if (value.name.toLowerCase().startsWith(this.srchStr.toString().toLowerCase())) {
          tempList.push(value);
        }
      })
      if (tempList.length > 0)
        this.medicines = tempList;
      this.showClear = true;
      this.showSearch = false;
    }
  }

  resetSrchBox() {
    this.srchStr = '';
    this.showSearch = true;
    this.showClear = false;
    this.loadMedicines();
  }

  // Add Medicine to Order
  onAddingMedicineToOrder(medicine: Medicine) {
    let insertElement: boolean = true;
    if (this.orders.length > 0) {
      let i = 0;
      let checkedOnce:boolean = false;
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
    if(insertElement){
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
    if(this.orders.length > 0) {
      let i = 0;
      let checkedOnce: boolean = false;
      this.orders.map( (k: Order) => {
        if(k.medicine.name === medicine.name && !checkedOnce) {
          if(k.count == 1){
            this.orders.splice(i, 1);
          } else if(k.count > 1) {
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
}

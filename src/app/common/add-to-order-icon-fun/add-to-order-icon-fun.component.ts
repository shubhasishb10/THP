import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Medicine } from 'src/app/models/medicine.model';

@Component({
  selector: 'app-add-to-order-icon-fun',
  templateUrl: './add-to-order-icon-fun.component.html',
  styleUrls: ['./add-to-order-icon-fun.component.css']
})
export class AddToOrderIconFunComponent implements OnInit {

  private static _id=0;

  @Input('medicine') medicine: Medicine;
  @Output() medicineAdd = new EventEmitter();
  @Output() medicineRemove = new EventEmitter();
  @Input() areaDisable: boolean = false;
  @Input() medicineCount: number = 0;
  @Input() maxCount:number = 0;

  constructor() { }

  ngOnInit() {
  }
  adjustAdd() {
    console.log(this.medicine);
    this.medicineAdd.emit(this.medicine);
    this.medicineCount++;
  }
  adjustRemove() {
    console.log(this.medicine);
    this.medicineRemove.emit(this.medicine);
    if (this.medicineCount == 0)
      this.medicineCount = 0
    else
      this.medicineCount--;
  }

}

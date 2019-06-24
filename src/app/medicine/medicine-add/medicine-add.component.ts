import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/models/medicine.model';
import { Box } from 'src/app/models/box.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MedQty } from 'src/app/enums/medicine.quantity.enum';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css']
})
export class MedicineAddComponent implements OnInit {

  medQtyKeys: string[] = [];
  medQtyValues: string[] = [];
  medicine: Medicine;
  boxes: Box[];
  hideSuccess: boolean = true;
  constructor(private http: HttpClient) { 
  }

  loadMedicine() {
    this.medicine = {
      id: 0,
      company: '',
      boxes: [],
      count: 0,
      createdDate: new Date(),
      description: '',
      expDate: new Date("00/00/0000"),
      mfgDate: new Date("00/00/0000"),
      name: '',
      price: 0.00,
      quantity: 100
    }
  }
  loadQuantityEnum(){
    this.medQtyKeys = Object.keys(MedQty);
    this.medQtyKeys = this.medQtyKeys.splice(this.medQtyKeys.length/2, this.medQtyKeys.length);
    //this.medQtyValues = this.medQtyKeys.splice(this.medQtyKeys.length/2);
  }
  loadBoxes(){
    this.http.get('http://localhost:8080/box/all').subscribe( (response: Box[]) => {
      this.boxes = response;
      console.log(this.boxes);
    })
  }
  ngOnInit() {
    this.loadQuantityEnum();
    this.loadMedicine();
    this.loadBoxes();
  }
  saveMedicineDetails(){
    console.log(this.medicine);
    this.http.post('http://localhost:8080/medicine', this.medicine, {
      headers: { 'ContentType' : 'application/json' }
    } ).subscribe(response=>{console.log(response);this.hideSuccess = false;});
    setTimeout(() => {
      this.hideSuccess = true;
    }, 3000);
    this.loadMedicine();
  }
}

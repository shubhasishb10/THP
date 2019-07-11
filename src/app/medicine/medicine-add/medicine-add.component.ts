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
      expDate: new Date(),
      mfgDate: new Date(),
      name: '',
      price: 0.00,
      quantity: 0
    }
  }
  loadQuantityEnum(){
    console.log(MedQty);
    console.log(Object.keys(MedQty));
    let tempArr = Array.from(Object.keys(MedQty));
    for(let v=0;v<tempArr.length;v++){
      if(v < (tempArr.length/2) ){
        this.medQtyValues.push(tempArr[v]);
      }
      else {
        this.medQtyKeys.push(tempArr[v]);
      }
    }
    console.log(this.medQtyKeys);
    console.log(this.medQtyValues);
  }
  loadBoxes(){
    this.http.get('http://localhost:8080/box/all?pn=0&ps=100').subscribe( (response: any) => {
      this.boxes = response.content;
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
    } ).subscribe(response=>{
      console.log(response);
      this.hideSuccess = false;
      setTimeout(() => {
        this.hideSuccess = true;
      }, 3000);
    });
    //this.loadMedicine();
  }
}

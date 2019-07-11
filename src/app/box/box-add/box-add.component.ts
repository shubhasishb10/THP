import { Component, OnInit } from '@angular/core';
import { Box } from 'src/app/models/box.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-box-add',
  templateUrl: './box-add.component.html',
  styleUrls: ['./box-add.component.css']
})
export class BoxAddComponent implements OnInit {

  box: Box;
  hideSuccess: boolean = true;

  constructor(private http: HttpClient) {
    this.loadMedicine();
  }

  loadMedicine() {
    this.box = {
      id: 0,
      name: '',
      number: '',
      capacity: 0,
      count: 1,
      createdDate: new Date(),
      medicines: [],
      location: ''
    };
  }

  ngOnInit() {
  }

  saveBoxDetails() {
    if (this.box.name != '' || this.box.number != '') {
      this.http.post("http://localhost:8080/box", JSON.stringify(this.box),
        { headers: { 'Content-Type': 'application/json' } }).subscribe((response) => {
          console.log(response);
          this.hideSuccess = false;
        });
      setTimeout(() => {
        this.hideSuccess = true;
      }, 3000);
      console.log('hello');
      console.log(this.box);
      this.loadMedicine();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Box } from 'src/app/models/box.model';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {

  boxes: Array<Box>;
  constructor(private http: HttpClient) { 
    this.loadBoxes();
  }

  loadBoxes() {
    this.http.get('http://localhost:8080/box/all').subscribe((response: Box[]) => {
      this.boxes = response;
      console.log('**Boxeses**')
      console.log(this.boxes);
    });
  }
  ngOnInit() {
  }

}

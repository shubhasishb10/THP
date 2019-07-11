import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Box } from 'src/app/models/box.model';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {

  boxes: Array<Box>;
  constructor(private http: HttpClient, private boxSvc: BoxService) { 
    this.loadBoxes();
  }

  loadBoxes() {
    this.http.get('http://localhost:8080/box/all?pn=0&ps=100').subscribe((response: any) => {
      this.boxes = response.content;
      console.log('**Boxeses**')
      console.log(this.boxes);
    });
  }
  ngOnInit() {
  }

  // setboxDetails(box: Box) {
  //   this.boxSvc.setBoxDetails(box);
  //   console.log("From box list component, BOX is");
  //   console.log(box);
  // }

}

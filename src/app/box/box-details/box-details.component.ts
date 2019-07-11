import { Component, OnInit } from '@angular/core';
import { BoxService } from '../box.service';
import { Box } from 'src/app/models/box.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css']
})
export class BoxDetailsComponent implements OnInit {

  box: Box;
  constructor(private http: HttpClient, private boxSvc: BoxService, private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      console.log(p);
      this.http.get("http://localhost:8080/box/id/" + p.boxId).subscribe((response: Box) => {
        this.box = response;
      });
    });
  }

  ngOnInit() {
  }
}

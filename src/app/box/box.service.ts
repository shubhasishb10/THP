import { Injectable } from '@angular/core';
import { Box } from '../models/box.model';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  box: Box;
  constructor() { }
  public getBoxDetails(){
    return this.box;
  }
  public setBoxDetails(box: Box){
    this.box = box;
  }
}

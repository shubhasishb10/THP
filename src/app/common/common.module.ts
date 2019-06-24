import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AddToOrderIconFunComponent } from './add-to-order-icon-fun/add-to-order-icon-fun.component';
import { PaginationControlBarComponent } from './pagination-control-bar/pagination-control-bar.component';

@NgModule({
  declarations: [
    PaginationControlBarComponent,
    // AddToOrderIconFunComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PaginationControlBarComponent,
    // AddToOrderIconFunComponent
  ]
})
export class CommonMModule { }

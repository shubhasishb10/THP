import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderReviewComponent } from './order-review/order-review.component';
import { RouterModule } from '@angular/router';
import { OrderRoutes } from './order.route';
import { AddToOrderIconFunComponent } from '../common/add-to-order-icon-fun/add-to-order-icon-fun.component';
import { CommonMModule } from '../common/common.module';
import { MedicineModule } from '../medicine/medicine.module';
import { FormsModule } from '@angular/forms';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [OrderReviewComponent, OrderConfirmComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(OrderRoutes),
    MedicineModule,
    HttpClientModule
  ]
})
export class OrderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { medicineRoutes } from './medicine.route';
import { AddToOrderIconFunComponent } from '../common/add-to-order-icon-fun/add-to-order-icon-fun.component';
import { PaginationControlBarComponent } from '../common/pagination-control-bar/pagination-control-bar.component';
import { CommonMModule } from '../common/common.module';

@NgModule({
  declarations: [
    MedicineAddComponent,
    MedicineListComponent,
    AddToOrderIconFunComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CommonMModule,
    RouterModule.forChild(medicineRoutes)
  ]
})
export class MedicineModule { }

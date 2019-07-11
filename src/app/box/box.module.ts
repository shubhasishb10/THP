import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { boxRoutes } from './box.route';
import { BoxAddComponent } from './box-add/box-add.component';
import { BoxListComponent } from './box-list/box-list.component';
import { CommonMModule } from '../common/common.module';
import { BoxDetailsComponent } from './box-details/box-details.component';

@NgModule({
  declarations: [
    BoxAddComponent,
    BoxListComponent,
    BoxDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonMModule,
    RouterModule.forChild(boxRoutes)
  ]
})
export class BoxModule { }

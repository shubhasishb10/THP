import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MedicineModule } from './medicine/medicine.module';
import { PaginationControlBarComponent } from './common/pagination-control-bar/pagination-control-bar.component';
import { BoxAddComponent } from './box/box-add/box-add.component';
import { BoxModule } from './box/box.module';
import { OrderReviewComponent } from './order/order-review/order-review.component';
// import { AddToOrderIconFunComponent } from './common/add-to-order-icon-fun/add-to-order-icon-fun.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    // AddToOrderIconFunComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MedicineModule,
    BoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

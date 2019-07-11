import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'medicine', loadChildren : './medicine/medicine.module#MedicineModule' },
  { path : 'box', loadChildren : './box/box.module#BoxModule' },
  { path: 'order', loadChildren: './order/order.module#OrderModule'},
  { path: '', loadChildren: './medicine/medicine.module#MedicineModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

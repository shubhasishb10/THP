import { Routes } from "@angular/router";
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';


export const medicineRoutes : Routes = [
    { path : 'list', component :  MedicineListComponent },
    { path: 'add', component : MedicineAddComponent }
]

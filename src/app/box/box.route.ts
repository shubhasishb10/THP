import { Routes } from "@angular/router";
import { BoxAddComponent } from './box-add/box-add.component';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxDetailsComponent } from './box-details/box-details.component';

export const boxRoutes : Routes = [
    { path : 'list', component :  BoxListComponent },
    { path: 'add', component : BoxAddComponent },
    { path: 'details/:boxId', component : BoxDetailsComponent, pathMatch : 'full' }
]

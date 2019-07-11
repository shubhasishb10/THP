import { Routes } from "@angular/router";
import { OrderReviewComponent } from './order-review/order-review.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';


export const OrderRoutes : Routes = [
    { path : 'review', component :  OrderReviewComponent },
    { path : 'confirm', component :  OrderConfirmComponent }
]

import { PipeTransform, Pipe } from '@angular/core';
import { FetchType } from '../common/pagination-control-bar/pagination-control-bar.component';
import { MedQty } from '../enums/medicine.quantity.enum';

@Pipe({
    name: 'resolveMl'
})
export class ResolveMlPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        console.log('This is from Pipe Method ' + args[0]);
        console.log(MedQty[value]);
        return MedQty[value];
    }
    
}
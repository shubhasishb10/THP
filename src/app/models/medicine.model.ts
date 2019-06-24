import { Box } from './box.model';

export interface Medicine {
    id: number,
    name: string,
    company: string,
    price: number,
    quantity: number,
    count: number,
    mfgDate: Date,
    expDate: Date,
    description: string,
    boxes: Box[],
    createdDate: Date
}

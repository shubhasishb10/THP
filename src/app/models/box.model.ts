import { Medicine } from './medicine.model';

export interface Box {
    id: number,
    name: string,
    number: string,
    location: string,
    capacity: number,
    count: number,
    createdDate: Date,
    medicines: Array<Medicine>
}

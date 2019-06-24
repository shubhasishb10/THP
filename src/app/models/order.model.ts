import { Medicine } from "./medicine.model";

export interface Order {
    id: number;
    medicine: Medicine;
    count: number;
}
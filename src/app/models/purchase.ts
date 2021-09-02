import { Book } from "./book";

export interface Purchase {
    id: number;
    book: Book;
    datePurchased: Date;
}
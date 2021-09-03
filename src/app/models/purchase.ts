import { Book } from "./book";
import { User } from "./user";

export interface Purchase {
    id: number;
    purchaser:User;
    book: Book;
    datePurchased: Date;
}
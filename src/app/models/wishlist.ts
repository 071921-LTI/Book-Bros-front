import { Book } from "./book";
import { User } from "./user";

export interface Wishlist {
    id: number;
    wisher: User;
    book: Book;
    dateAdded: Date;
}
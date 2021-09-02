import { Book } from "./book";

export interface Purchase {
    id: number;
    book: Book;
    date_purchased: string;
}
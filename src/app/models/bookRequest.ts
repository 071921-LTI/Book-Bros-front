import { User } from "./user";

export interface BookRequest {
    requester: User;
    title: string;
    author: string;
}
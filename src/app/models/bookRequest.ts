import { User } from "./user";

export interface BookRequest {
    id: number;
    dataTarget: string;
    requester: User;
    title: string;
    author: string;
}
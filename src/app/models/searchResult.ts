import { Work } from "./work";

export interface SearchResult {
    start: number;
    num_found: number;
    docs: Work[];
}
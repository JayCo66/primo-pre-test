import { merge } from './merge';

const collection_1 = [1, 2, 3];
const collection_2 = [4, 5, 6];
const collection_3 = [9, 8, 7];

console.log("collection 1 (Ascending):", collection_1);
console.log("collection 2 (Ascending):", collection_2);
console.log("collection 3 (Descending):", collection_3);

const result = merge(collection_1, collection_2, collection_3);

console.log("Result:", result);
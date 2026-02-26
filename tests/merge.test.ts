import { merge } from '../src/merge';

describe('merge function', () => {
    it('should successfully merge arrays', () => {
        const collection_1 = [0, 1, 2];
        const collection_2 = [3, 4, 5];
        const collection_3 = [9, 8, 7];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([0, 1, 2, 3, 4, 5, 7, 8, 9]);
    });

    it('should handle different lengths', () => {
        const collection_1 = [1, 2];
        const collection_2 = [3, 4, 5, 6];
        const collection_3 = [8, 7];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle empty arrays', () => {
        const collection_1: number[] = [];
        const collection_2 = [1, 2, 3];
        const collection_3: number[] = [];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3]);
    });

    it('should handle duplicate values', () => {
        const collection_1 = [1, 2, 5];
        const collection_2 = [2, 5, 6];
        const collection_3 = [8, 6, 2];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 2, 2, 5, 5, 6, 6, 8]);
    });
});
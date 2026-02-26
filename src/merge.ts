export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[],
): number[] {

    const result: number[] = [];

    const length_1 = collection_1.length;
    const length_2 = collection_2.length;
    const length_3 = collection_3.length;

    let i = 0;
    let j = 0;
    let k = length_3 - 1;

    while (i < length_1 && j < length_2 && k >= 0) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
            result.push(collection_1[i]);
            i++;
        } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            result.push(collection_2[j]);
            j++;
        } else {
            result.push(collection_3[k]);
            k--;
        }
    }

    while (i < length_1 && j < length_2) {
        if (collection_1[i] <= collection_2[j]) {
            result.push(collection_1[i]);
            i++;
        } else {
            result.push(collection_2[j]);
            j++;
        }
    }

    while (i < length_1 && k >= 0) {
        if (collection_1[i] <= collection_3[k]) {
            result.push(collection_1[i]);
            i++;
        } else {
            result.push(collection_3[k]);
            k--;
        }
    }

    while (j < length_2 && k >= 0) {
        if (collection_2[j] <= collection_3[k]) {
            result.push(collection_2[j]);
            j++;
        } else {
            result.push(collection_3[k]);
            k--;
        }
    }

    while (i < length_1) {
        result.push(collection_1[i]);
        i++;
    }

    while (j < length_2) {
        result.push(collection_2[j]);
        j++;
    }

    while (k >= 0) {
        result.push(collection_3[k]);
        k--;
    }

    return result;
}
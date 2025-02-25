function zipSortedArrays(a: number[], b: number[]) {
    let i = 0, j = 0;
    let ret = [];
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) ret.push(a[i++]);
        if (a[i] > b[j]) ret.push(b[j++]);
    }
    if (i < a.length) ret.push(...a.slice(i));
    if (j < b.length) ret.push(...b.slice(j));
    return ret;
}

function findMedianSortedArrays(a: number[], b: number[]): number {
    let sorted = zipSortedArrays(a, b);
    console.log({sorted});
    let medianIndex = sorted.length / 2 | 0;
    if (medianIndex == sorted.length / 2) {
        return sorted[medianIndex];
    } else {
        return (sorted[medianIndex] + sorted[medianIndex + 1]) / 2;
    }
}


console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8, 9]));

// merged = [1,2,3,4,5,6,7,8,9]
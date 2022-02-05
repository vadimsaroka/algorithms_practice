const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;

    while (arr1.length > i && arr2.length > j) {
        if (arr1[i] > arr2[j]) {
            results.push(arr2[j]);
            j++;
        } else {
            results.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results
};


const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);

};

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
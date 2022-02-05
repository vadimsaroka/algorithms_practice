const insertionSort = (arr) => {
    if (arr[0] > arr[1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = arr.length - 1; j > 0; j--) {
            if (arr[i] > arr[j]) {
                if (arr[j - 1] > arr[j]) {
                    let temp = arr[j - 1];
                    arr[j - 1] = arr[j]
                    arr[j] = temp;
                }
            }

        }
    }

    return arr;

};

console.log(insertionSort([34, 22, 10, 19, 17, -1]));
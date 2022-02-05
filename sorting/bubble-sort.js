
const bubbleSort = (arr) => {

    let length = arr.length;
    let noSwap;
    for (let i = 0; i < length; i++) {
        noSwap = true
        for (let j = 1; j < length; j++) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                noSwap = false;
            }
        }
        length -= 1;

        if (noSwap) return arr;
    }
    return arr;

};

console.log(bubbleSort([5, 3, 4, 1, 2]));
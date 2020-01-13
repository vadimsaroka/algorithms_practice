//////////////////////////////////////////////////////////////
/*FREQUENCY COUNTER PATTERN */
//////////////////////////////////////////////////////////////

 function counter (str) {
    let arr = {};

    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(char in arr) {
                arr[char]++;
            } else {
                arr[char] = 1;
            }
        }
    }
    return arr;
 }

console.log(counter('VvvaaaaaadiiiIIIimm!!!@@@'));
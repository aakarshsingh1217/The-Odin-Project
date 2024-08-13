const arr = [1, 2, 3, 4, 5];
const prodAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1)
console.log(prodAllNums);
console.log(arr);
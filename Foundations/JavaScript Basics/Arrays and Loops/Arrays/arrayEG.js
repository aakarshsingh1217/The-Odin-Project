const a = ["A", "B", "C", "D"];
const b = [
    ["A", "B"],
    [1, 2]
]
a.push("E");
a.push(3);
a.push([1, 2]);
console.log(a[0]);
console.log(a.length);
console.log(a[0][1])
a[0] = 1
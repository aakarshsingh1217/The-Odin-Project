const obj = {data: 42};
const objCopy = obj;
objCopy.data = 43;

console.log(objCopy);
console.log(obj);
function camelize (str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b)
}

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if(val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    let sum = 0;
    arr.forEach(item => sum += item.age);

    return sum / arr.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

/*function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
let arr = [1, 2, 3];
shuffle(arr);
alert(arr);*/

/*let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age)
}

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/

/*let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));


usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
/*
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
*/
/*let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary*/

/*let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)*/

/*let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );*/

/*let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]*/

/*let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)*/
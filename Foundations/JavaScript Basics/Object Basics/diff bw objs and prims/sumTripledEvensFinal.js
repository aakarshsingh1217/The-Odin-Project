function sumOfTripledEvens(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }

  let array = [1, 2, 3];
  let newArray = sumOfTripledEvens(array);
  console.log(newArray)
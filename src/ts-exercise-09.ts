const sumAll = (inputArray: number[]): number => {
  return inputArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

console.log('wynik sumAll', sumAll([1, 2]));

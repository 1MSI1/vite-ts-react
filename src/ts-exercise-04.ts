function x(value: number | undefined) {
  if (value) {
    console.log(`x * 2: `, value * 2);
  }
}
x(22);

function y(value?: number) {
  if (value) {
    // narrowing -> teraz value jest number a nie jest undefined

    console.log(`y * 2: `, value * 2);
  }
}
y(12);

const z = (value: 'Adam' | 'Karol') => {
  console.log(value);
};
z('Karol');

// funkcję countCharacters liczącą ilość znaków w stringu
const countCharacters = (a: string): number => a.length;

countCharacters('mike');
console.log(countCharacters('mike'));

//funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)
function isEven(liczba: number): boolean {
  return liczba % 2 === 0;
}

console.log(isEven(4));

const processString2 = (value?: string): string => {
  if (!value) {
    return 'Nie podano argumentu';
  }
  return value + ' ' + countCharacters(value) + ' ' + isEven(value.length);
};

console.log(processString2(), processString2('Kasia1'));

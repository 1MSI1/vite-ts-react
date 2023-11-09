console.log('hello');

//implicite typing
const liczba = 65;
//explicite typing
const tekst: string = 'abc';
const prawda = true;
const brak = undefined;
const pusty = null;

const add = (a: number, b: number) => a + b;
add(4, 5);
const sum = (a: number, b: number | null): number => {
  // if (a>10) return "too large number";
  if (b === null) return a * a;
  return a + b;
};
sum(3, 6);
sum(5, null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const greet = (name: any): string => {
  return `Hello ${name}`;
};
const sumOrGreet = (value: unknown): string => {
  if (typeof value === 'number') return `Suma: ${value + value}`;
  else {
    return `Greetings: ${value}`;
  }
};

console.log(liczba, tekst, prawda, brak, pusty, greet(1234), sumOrGreet(45));

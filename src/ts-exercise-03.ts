// funkcję countCharacters liczącą ilość znaków w stringu
const countCharacters = (a: string): number => a.length;

countCharacters("mike");
console.log(countCharacters("mike"));

//funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)
function isEven (liczba: number):boolean {
    return liczba %2 === 0;
}

console.log(isEven(4));

//funkcję getParityMessage która na podstawie boolean zwraca komunikat ta liczba jest parzysta/ta liczba nie jest parzysta

const getParityMessage =(value: boolean): string => {
    if (value) {
        return "ta liczba jest parzysta"
    } else {  return " ta liczba nie jest parzysta"}
}

console.log(getParityMessage(false));

// funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje (zwraca string)

const processString =(napis: string):string => {
    return napis + ' "" ' + countCharacters(napis) + ' "" ' + isEven(napis.length)

}
console.log(processString("Adams"));

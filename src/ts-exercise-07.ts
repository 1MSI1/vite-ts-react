// typ/interfejs AnalyzeResult, który będzie zawierał:
// wartość wejściową jako string
// informację o ilości znaków w stringu jako number
// informację czy ilość znaków jest liczbą parzystą czy nie jako boolean

interface AnalyzeResult {
  inputString: string;
  numberOfCharacters: number;
  isNumberOfCharacterEven: boolean;
}

const analizedString = (value?: string): AnalyzeResult | string => {
  if (!value) return 'Błąd';
  return {
    inputString: value,
    numberOfCharacters: value.length,
    isNumberOfCharacterEven: value.length % 2 === 0,
  };
};
console.log(analizedString('Adam'));

const printAnalyzeResult = (input: AnalyzeResult | string): void => {
  if (typeof input === 'string') {
    console.log(input);
  } else {
    const { inputString, numberOfCharacters, isNumberOfCharacterEven } = input;

    console.log(
      `Wynik funkcji printAnalyzeResult: ${inputString} ${numberOfCharacters} ${isNumberOfCharacterEven}`
    );
  }
};
printAnalyzeResult(analizedString('Adam'));

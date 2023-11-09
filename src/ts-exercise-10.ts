/* eslint-disable @typescript-eslint/no-unused-vars */
//typy generyczne

//tworzenie tablicy
const tabel: number[] = [];
// z wykorzystaniem ttypów generycznych
const tabel2 = Array<number>();
const printTable = (inputArr: Array<number>) => {
  console.log('Print Table using generic type', inputArr);
};
printTable([1, 2, 3, 4]);

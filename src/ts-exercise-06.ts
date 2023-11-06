// obiekt
type Animal = {
    name: string;
    age?: number;
}

// typ funkcji
type PrintAnimal = (animal: Animal) => void;

const printAnimal: PrintAnimal = (animal) => {
    console.log(animal.name, animal.age);  
    // return 3;  
}

printAnimal({name: 'Bear'})
printAnimal({name: 'Dog', age: 3})

interface Car {
    name: string;
    printName: () => void;
}

class CarClass implements Car {
    public name = 'Opel';
    public printName = () => console.log(this.name);
}

const car = new CarClass();
car.printName();

type UnionTypeParam = string | number;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Ship {
    name: UnionTypeParam
}
// interfejs funkcji
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FunctionInt {
    (Animal: Animal): void
}


type Dog = {
    name: string;
}
// Duplicate identifier 'Dog'
// type Dog = {
//     age: number;
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type DogWithAge = Dog & {
    age: number;
}

interface Cat {
    name: string;
}
// rozszerzam interface Cat
interface Cat {
    age: number;
}

const printCat =(value: Cat) => {
  console.log(value);  
}

printCat({age: 3, name: 'Cat'})
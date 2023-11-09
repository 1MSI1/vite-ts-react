//tablice
const tablica = [1, 2, 3, 4];
let tablica2: (number | string)[];
// eslint-disable-next-line prefer-const
tablica2 = ['3'];
tablica.push(5);
console.log('tablica', tablica, tablica2);

type Building = {
  floors: number;
  bedrooms: number;
  address: string;
};

const buildings: Building[] = [];
buildings.push({ address: 'Warsaw', floors: 4, bedrooms: 3 });
buildings.push({ address: 'Gdansk', floors: 1, bedrooms: 1 });

const bedrooms = buildings.map((value) => value.bedrooms);
console.log('bedrooms', bedrooms);

const address = buildings.map((value) => value.address);
console.log('address', address);

type Touple = [number, string];
const touple: Touple = [3, 'Adam'];
console.log('touple', touple);

// type FuncType = (n: number, m: number, l?: number) => number;

// const func: FuncType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;

//   return n * m * l;
// };

// func(23, 23);

// Rest Operator
type FuncType = (...m: number[]) => number[];
const func: FuncType = (...m) => {
  return m;
};

func(23, 23, 4, 234, 234, 23, 3, 9);

// function with object
interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string;
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

// Never Type
// Throwing error type is always never
const errorHandler = (): never => {
  throw new Error();
};

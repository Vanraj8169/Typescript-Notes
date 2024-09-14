// class Player {
//   special: boolean;
//   private access_modifier: string;
//   constructor(
//     height: number,
//     weight: number,
//     power: number,
//     access_modifier: string
//   ) {
//     this.special = false;
//     this.access_modifier = access_modifier;
//   }

//   get getAccessModifier(): string {
//     return this.access_modifier;
//   }

//   set setAccessModifier(a: string) {
//     this.access_modifier = a;
//   }
// }

interface ProductType {
  name: string;
  price: number;
  stock: number;
  id: string;
  offer?: boolean;
}

class Product implements ProductType {
  public name: string;
  public price: number;
  public stock: number;
  public id: string = String(Math.random() * 1000);

  constructor(name: string,price:number,stock:number){
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

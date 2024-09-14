"use strict";
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
class Product {
    constructor(name, price, stock) {
        this.id = String(Math.random() * 1000);
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

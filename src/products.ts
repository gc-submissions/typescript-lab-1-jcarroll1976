export interface Product {
    name: string;
    price: number;
}

const products:Product[] = [{name:"Apples",price:4.50},{name:"Banana",price:2.50},{name:"Oranges",price:5.00}];
 
export function calcAverageProductPrice(products:Product[]):number {
let total = 0;
for (let i = 0; i < products.length; i++) {
    total += products[i].price;
} 
let averagePrice = total / products.length;
return averagePrice;

}



let average = calcAverageProductPrice([{name:"Apples",price:4.50},{name:"Banana",price:2.50},{name:"Oranges",price:5.00}]);

console.log(average);
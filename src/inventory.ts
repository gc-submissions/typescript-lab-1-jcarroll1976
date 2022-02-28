import {Product} from "../src/products";

export interface InventoryItem {
    product:Product;
    quantity:number;
}

const inventory:InventoryItem[] = [{product:{name:"motor",price:10.00},quantity:10},{product:{name:"motor",price:12.50},quantity:4},{product:{name:"motor",price:1.00},quantity:20}];

export function calcInventoryValue(inventory:InventoryItem[]):number {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += (inventory[i].product.price * inventory[i].quantity);
    }
    return total;

}

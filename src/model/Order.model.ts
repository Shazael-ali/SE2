import { Item } from "./Item.model";


export interface Order{
    getItem():Item;
    getPrice():number;
    getQunatity():number;
    getId():number;


}
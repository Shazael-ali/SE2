//Solid principles
//single Responsibility Principle (SRP)

export interface Order{
    price:number
    id:number
    item:string
}

export class OrderManagment{
    //get orders , store orders 
    private orders:Order[] = [];
    constructor(private validator:IValidator , private calculate:ICalculate){

    }
    getOrders(){
        return this.orders
    }
    addOrder(item:string , price:number){
   
    const order:Order = {id: this.orders.length+1,item,price}
      this.validator.validate(order)
      this.orders.push(order)
    }
    getOrder(id:number){

        return this.getOrders().find((order=> order.id === id))
    }
    orderIsExist(id:number){
        return this.getOrders().find((order => order.id === id))
    }
    getTotalRevenue(){
        return this.calculate.getRevenue(this.orders)
    }
    getAverageBuyPower(){
        return this.calculate.getAverageBuyPower(this.orders)
    }
    }



export class PrimumOrderManagment extends OrderManagment{
    getOrder(id: number): Order | undefined {
        console.log('this is premium order:',id)
        return super.getOrder(id)
    }

}
interface IValidator {
    validate(order :Order):void
}
interface PossibleItems{
    
}
export class Validator implements IValidator{
   
    constructor(private rules:IValidator[])  {

    }  
    validate(order: Order): void {
     this.rules.forEach(rule=>rule.validate(order))
    }
}

export class ItemValidator implements IValidator , PossibleItems{
    private static possibleItems = [
        "Sponge",
        "Chocolate",
        "Fruit",
        "Red Velvet",
        "Birthday",
        "Carrot",
        "Marble",
        "Coffee",];
    validate(order: Order): void {
        if(!ItemValidator.possibleItems.includes(order.item)){
            throw new Error (`invalid item. Must Be one of :${ItemValidator.possibleItems.join(', ')}`)
        }
    }
}
export class PriceValidator implements IValidator {
    validate(order: Order): void {
        if (order.price <= 0) {
            throw new Error('Price must be greater than zero!');
        }
    }
}

export class MaxPriceValidator implements IValidator{
     validate(order: Order): void {
        if(order.price > 100){
            throw new Error ('price should be less the 100')
        }
      }
}

interface ICalculate{

    getRevenue(orders:Order[]):number
    getAverageBuyPower(orders:Order[]):number
}

export class FinanceCalculater implements ICalculate{
    // calculate total revenue and avreage by power
    public  getRevenue(orders:Order[]){
        return orders.reduce((total,order)=> total + order.price ,0)
    }

    public  getAverageBuyPower(orders:Order[]){
        return orders.length === 0 ? 0 : this.getRevenue(orders) /orders.length

    }

}

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
    getOrders(){
        return this.orders
    }
    addOrder(item:string , price:number){
      Validator.checkPrice(price)
      Validator.validateOrder(item)
      this.orders.push({id: this.orders.length+1,item,price})
    }
    getOrder(id:number){
        return this.getOrders().find((order=> order.id === id))
    }
    orderIsExist(id:number){
        return this.getOrders().find((order => order.id === id))
    }

}

export class Validator{
    private static possibleItems = [
    "Sponge",
    "Chocolate",
    "Fruit",
    "Red Velvet",
    "Birthday",
    "Carrot",
    "Marble",
    "Coffee",];
    // validate order
    //validate item is possible 
    public static validateOrder(item:string){
        if(!this.possibleItems.includes(item)){
            throw new Error (`invalid item. Must Be one of :${this.possibleItems.join(', ')}`)
        }
    }
    public static checkPrice(price:number){
        if(price <= 0){
            throw new Error ('price must be grater than zero!!')
        }

    }

}

export class FinanceCalculater{
    // calculate total revenue and avreage by power
    public static getRevenue(orders:Order[]){
        return orders.reduce((total,order)=> total + order.price ,0)
    }

    public static getAverageBuyPower(orders:Order[]){
        return orders.length === 0 ? 0 : this.getRevenue(orders) /orders.length

    }

}

// Main
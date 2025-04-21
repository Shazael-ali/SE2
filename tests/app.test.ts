import {FinanceCalculater, OrderManagment, Validator} from '../src/app-clean';
describe('Order Management', () => {

    it('Should add an order',()=>{
        // 3 a rules
        //arrage setting up 
        const validator = new Validator([])
        const calculate = new FinanceCalculater()
        const orderManager = new OrderManagment(validator,calculate);
        const item = 'Sponge';
        const price = 15
        //ACt
        orderManager.addOrder(item,price)

        //assert
        expect(orderManager.getOrders()).toEqual([{id:1,item,price}])

    })

    it('Should get specifique order',()=>{
        // 3 a rules
        //arrage setting up 
        const validator = new Validator([])
        const calculate = new FinanceCalculater()
        const orderManager = new OrderManagment(validator,calculate);
        const item = 'Sponge';
        const price = 15
        //ACt
        orderManager.addOrder(item,price)
       const order =  orderManager.getOrder(1)

        //assert
        expect(order).toEqual({id:1,item,price})

    })
})

describe('finance calculater',()=>{
    it('Should calculate total revenue',()=>{
        // 3 a rules
        //arrage setting up 
        const calculate = new FinanceCalculater()
        const orders = [
            { id: 1, item: "Sponge", price: 15 },
            { id: 2, item: "Chocolate", price: 20 },
            { id: 3, item: "Fruit", price: 18 },
            { id: 4, item: "Red Velvet", price: 25 },
            { id: 5, item: "Coffee", price: 8 },
          ];
     
        //ACt
       const order =  calculate.getRevenue(orders)

        //assert
        expect(order).toEqual(86)

    })
})

describe('Avarage  calculater',()=>{
    it('Should calculate avarage ',()=>{
        // 3 a rules
        //arrage setting up 
        const calculate = new FinanceCalculater()
        const orders = [
            { id: 1, item: "Sponge", price: 15 },
            { id: 2, item: "Chocolate", price: 20 },
            { id: 3, item: "Fruit", price: 18 },
            { id: 4, item: "Red Velvet", price: 25 },
            { id: 5, item: "Coffee", price: 8 },
          ];
     
        //ACt
       const x =  calculate.getAverageBuyPower(orders)

        //assert
        expect(x).toEqual(17.2)

    })
})
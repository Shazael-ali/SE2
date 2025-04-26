import {FinanceCalculater, Order, OrderManagment, Validator} from '../src/app';
describe('Order Management', () => {
    //before all , new validator and new finance calculater
    //before each , new order manager
    //after each , clear the order manager
  let validator:Validator;
  let calculate:FinanceCalculater;
  let orderManager:OrderManagment;
  let baseValidator :(order:Order) => void;

    beforeAll(()=>{
        validator= new Validator([])
        calculate = new FinanceCalculater()
        console.log('before all');
    })
    beforeEach(()=>{
        baseValidator = validator.validate
        validator.validate= jest.fn()
        orderManager = new OrderManagment(validator,calculate);
        console.log('before each');
    })
    afterEach(()=>{
        validator.validate = baseValidator 
        console.log('after each');
    })
    it('Should add an order',()=>{
        // 3 a rules
        //arrage setting up 
        
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
       
        const item = 'Sponge';
        const price = 15
        //ACt
        orderManager.addOrder(item,price)
       const order =  orderManager.getOrder(1)

        //assert
        expect(order).toEqual({id:1,item,price})

    })
    it('should call finacial calculater get revenu',()=>{
        //arraygment 
        const item = 'Sponge';
        const price = 15;
        orderManager.addOrder(item,price)
        const spy = jest.spyOn(calculate,'getRevenue')
        //act
        orderManager.getTotalRevenue()
        //asert
        expect(spy).toHaveBeenCalled() // ana t3ytli
        expect(spy).toHaveBeenCalledWith([{id:1,item,price}]) // ana t3yatli bi hol l arg
        expect(spy).toHaveReturnedWith(15) // return the value of get revenue function

    })

    it('shoud throw addition exception if validatior is not pass', ()=>{
        //Arrage 
        const item = 'Sponge';
        const price = 10;
       (validator.validate as jest.Mock).mockImplementation(()=>{
        throw new Error('invalid order error')
       }) 
       
       // act and asset
        expect(() => orderManager.addOrder(item, price)).toThrow('invalid order error');

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
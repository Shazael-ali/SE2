import { FinanceCalculater, ItemValidator, MaxPriceValidator, OrderManagment, PriceValidator, Validator } from "./app";
import logger from "./util/looger";
const orders = [
    { id: 1, item: "Sponge", price: 15 },
    { id: 2, item: "Chocolate", price: 20 },
    { id: 3, item: "Fruit", price: 18 },
    { id: 4, item: "Red Velvet", price: 25 },
    { id: 5, item: "Coffee", price: 8 },
  ];

const rules =  [
    new PriceValidator(),
    new MaxPriceValidator()
];
  
const orderManager = new OrderManagment(new Validator(rules), new FinanceCalculater);

for (const order of orders){
    orderManager.addOrder(order.item,order.price)
}

const newItem = "Marble";
const newPrice = 22;
orderManager.addOrder(newItem,newPrice)

logger.info("Order after adding a new order: %o" , orderManager.getOrders())

// Calculate Total Revenue directly
  logger.info("Total Revenue:"+ orderManager.getTotalRevenue());
  
// Calculate Average Buy Power directly
  logger.info("Average Buy Power:"+ orderManager.getAverageBuyPower());

  // Fetching an order directly
  const fetchId = 1;
  const fetchedOrder = orderManager.getOrder(fetchId)
  logger.info("Order with ID 2: %o " , fetchedOrder);
  
  // Attempt to fetch a non-existent order
  const nonExistentId = 10;
  const nonExistentOrder = orderManager.orderIsExist(nonExistentId)
  logger.info("Order with ID 10 (non-existent):"+ nonExistentOrder);
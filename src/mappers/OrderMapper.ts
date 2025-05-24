import { OrderBuilder } from "../model/builders/order.builder";
import { IOrder } from "../model/IOrder";
import { IMapper } from "./IMapper";
import { IItem } from "../model/IItem";
import logger from "../util/looger";

export class CSVOrderMapper implements IMapper<string[] | {},IOrder> {
    constructor(private itemMapper: IMapper<string[], IItem>) {
    }
    map(data: string[] | {}): IOrder {
        // const dataLength = data.length;
        const objectValues = Object.values(data);
       
         const item : IItem = this.itemMapper.map(objectValues)
         return  OrderBuilder.OrderBuilder()
                              .setId(parseInt(objectValues[0]))
                              .setQuantity(parseInt(objectValues[objectValues.length- 1]))
                              .setPrice(parseInt(objectValues[objectValues.length - 2]))
                              .setItem(item)
                              .build();
    }


}

export class JSONOrderMapper implements IMapper<{} | [], IOrder> {
    constructor(private itemMapper: IMapper<{} | [], IItem>) {
    }
    map(data: {} | []): IOrder {
        const objectValues = Object.values(data);
        const item: IItem = this.itemMapper.map(objectValues);
        return OrderBuilder.OrderBuilder()
                            .setId(objectValues[0])
                            .setQuantity(parseInt(objectValues[objectValues.length - 1]))
                            .setPrice(parseInt(objectValues[objectValues.length - 2]))
                            .setItem(item)
                            .build()
    }
}

export class XMLOrderMapper implements IMapper<{} | [], IOrder> {
    constructor(private itemMapper: IMapper<{} | [], IItem>) {
    }
    map(data: {} | []): IOrder {
        const objectValues = Object.values(data);
        const item: IItem = this.itemMapper.map(objectValues);
        return OrderBuilder.OrderBuilder()
                            .setId(objectValues[0])
                            .setQuantity(parseInt(objectValues[objectValues.length - 1]))
                            .setPrice(parseInt(objectValues[objectValues.length - 2]))
                            .setItem(item)
                            .build()
    }
}

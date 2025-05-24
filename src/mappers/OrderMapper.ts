import { OrderBuilder } from "../model/builders/order.builder";
import { IOrder } from "../model/IOrder";
import { IMapper } from "./IMapper";
import { IItem } from "../model/IItem";
import logger from "../util/looger";

export class CSVOrderMapper implements IMapper<string[] | {},IOrder> {
    constructor(private itemMapper: IMapper<string[], IItem>) {
    }
    map(data: string[] | {}): IOrder {
        const parsingObject = Object.values(data);
         const item : IItem = this.itemMapper.map(parsingObject)
         return  OrderBuilder.newBuilder()
                              .setId(parsingObject[0])
                              .setQuantity(parseInt(parsingObject[parsingObject.length- 1]))
                              .setPrice(parseInt(parsingObject[parsingObject.length - 2]))
                              .setItem(item)
                              .build();
    }


}


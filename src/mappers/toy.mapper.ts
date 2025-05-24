import { Toy } from "../model/Toy.model";
import { IMapper } from "./IMapper";
import { ToyBuilder } from "../model/builders/toy.builder";


export class XMLToyMapper implements IMapper<{} | [], Toy> {

    map(data: {} | []): Toy {
        const parsingObject = Object.values(data);
       return ToyBuilder.newBuilder()
                        .setType(parsingObject[1])
                        .setAgeGroup(parsingObject[2])
                        .setBrand(parsingObject[3])
                        .setMaterial(parsingObject[4])
                        .setBatteryRequired(parsingObject[5])
                        .setEducational(parsingObject[6])
                        .build();
       
      
    }
}
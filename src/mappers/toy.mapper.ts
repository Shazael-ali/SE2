import { Toy } from "../model/Toy.model";
import { IMapper } from "./IMapper";
import { ToyBuilder } from "../model/builders/toy.builder";

// export class XMLToyMapper implements IMapper<string[],Toy>{
//     map(data: string[]): Toy {
//        const test =  ToyBuilder.create().setType(data[1])
//                         .setAgeGroup(data[2])
//                         .setBrand(data[3])
//                         .setMaterial(data[4])
//                         // .setBatteryRequired(data[5].toLowerCase() === 'true')
//                         // .setEducational(data[6].toLowerCase() === 'true')
                      
//       .build();
//       console.log('ToyMapper', test);
//       return test
//     }

// }
export class XMLToyMapper implements IMapper<{} | [], Toy> {

    map(data: {} | []): Toy {
        const objectValues = Object.values(data);
        console.log(objectValues);
        const test =  ToyBuilder.create()
                        .setType(objectValues[1])
                        .setAgeGroup(objectValues[2])
                        .setBrand(objectValues[3])
                        .setMaterial(objectValues[4])
                        .setBatteryRequired(objectValues[5])
                        .setEducational(objectValues[6])
                        .build();
        console.log('ToyMapper', test);
        return test;
    }
}
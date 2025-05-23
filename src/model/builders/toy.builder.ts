import logger from "../../util/looger";
import { Toy } from "../Toy.model";


export class ToyBuilder {

    private id!: string;
    private type!: string;
    private ageGroup!: string;
    private brand!: string;
    private material!: string;
    private batteryRequired!: boolean;
    private educational!: boolean;


    public setId(id: string): ToyBuilder {
        this.id = id;
        return this;
    }

    public setType(type: string): ToyBuilder {
        this.type = type;
        return this;
    }

    public setAgeGroup(ageGroup: string): ToyBuilder {
        this.ageGroup = ageGroup;
        return this;
    }

    public setBrand(brand: string): ToyBuilder {
        this.brand = brand;
        return this;
    }

    public setMaterial(material: string): ToyBuilder {
        this.material = material;
        return this;
    }

    public setBatteryRequired(batteryRequired: boolean): ToyBuilder {
        this.batteryRequired = batteryRequired;
        return this;
    }

    public setEducational(educational: boolean): ToyBuilder {
        this.educational = educational;
        return this;
    }



    build(): Toy {
        const requiredFields = [
            this.id,
            this.type,
            this.ageGroup,  
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational,
    
        ];

        if (!requiredFields) {
            logger.error("All fields must be set before building the Toy object.");
            throw new Error("All fields must be set before building the Toy object.");
        }
        return new Toy(
            this.id,
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational,
     
        )
    }
}
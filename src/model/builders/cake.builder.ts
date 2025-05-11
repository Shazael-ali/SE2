import { Cake } from "../Cake.model";
import logger from "../../util/looger";

 export class CakeBuilder {
    
    private id!: string;
    private type!: string;
    private flavor!: string;
    private filling!: string;
    private size!: number;
    private layers!: number;
    private frostingType!: string;
    private frostingFlavor!: string;
    private decorationType!: string;
    private decorationColor!: string;
    private customMessage!: string;
    private shape!: string;
    private allergies!: string;
    private specialIngredients!: string;
    private packagingType!: string;

;


    public setId(id: string): CakeBuilder {
        this.id = id;
        return this;
    }

    public setType(type: string): CakeBuilder {
        this.type = type;
        return this;
    }

    public setFlavor(flavor: string): CakeBuilder {
        this.flavor = flavor;
        return this;
    }

    public setFilling(filling: string): CakeBuilder {
        this.filling = filling;
        return this;
    }

    public setSize(size: number): CakeBuilder {
        this.size = size;
        return this;
    }

    public setLayers(layers: number): CakeBuilder {
        this.layers = layers;
        return this;
    }

    public setFrostingType(frostingType: string): CakeBuilder {
        this.frostingType = frostingType;
        return this;
    }

    public setFrostingFlavor(frostingFlavor: string): CakeBuilder {
        this.frostingFlavor = frostingFlavor;
        return this;
    }

    public setDecorationType(decorationType: string): CakeBuilder {
        this.decorationType = decorationType;
        return this;
    }

    public setDecorationColor(decorationColor: string): CakeBuilder {
        this.decorationColor = decorationColor;
        return this;
    }

    public setCustomMessage(customMessage: string): CakeBuilder {
        this.customMessage = customMessage;
        return this;
    }

    public setShape(shape: string): CakeBuilder {
        this.shape = shape;
        return this;
    }

    public setAllergies(allergies: string): CakeBuilder {
        this.allergies = allergies;
        return this;
    }

    public setSpecialIngredients(specialIngredients: string): CakeBuilder {
        this.specialIngredients = specialIngredients;
        return this;
    }

    public setPackagingType(packagingType: string): CakeBuilder {
        this.packagingType = packagingType;
        return this;
    }


    build():Cake {
        const requiredFields = [
            this.id,
            this.type,
            this.flavor,
            this.filling,
            this.size,
            this.layers,
            this.frostingType,
            this.frostingFlavor,
            this.decorationType,
            this.decorationColor,
            this.customMessage,
            this.shape,
            this.allergies,
            this.specialIngredients,
            this.packagingType,
     
        ];
        for (const property of requiredFields) {   
            if (!property) {
                logger.error('Missing required field in CakeBuilder: ' + property);
                throw new Error("All fields must be set before building the Cake object.");
            }
         }
        return new Cake(
            this.id,
            this.type,
            this.flavor,
            this.filling,
            this.size,
            this.layers,
            this.frostingType,
            this.frostingFlavor,
            this.decorationType,
            this.decorationColor,
            this.customMessage,
            this.shape,
            this.allergies,
            this.specialIngredients,
            this.packagingType

        );
    }
}
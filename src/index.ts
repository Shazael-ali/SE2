import { ToyBuilder } from "./model/builders/toy.builder";
import { BookBuilder } from "./model/builders/book.builder";
import { CakeBuilder } from "./model/builders/cake.builder";

async function main(){
   const cakeBuilder = new CakeBuilder();
   const cake =cakeBuilder.setId("1")
   .setType("Birthday") 
   .setFlavor("Chocolate")
   .setFilling("Vanilla")
   .setSize(10)
   .setLayers(2)
   .setDecorationColor("Red")
   .setFrostingType("Buttercream")
   .setFrostingFlavor("Vanilla")
   .setDecorationType("Sprinkles")
   .setCustomMessage("Happy Birthday")
   .setShape("Round")
   .setAllergies("Nuts")
   .setSpecialIngredients("None")
   .setPackagingType("Box")
   .setPrice(29.99)
   .setQuantity(1)
   .build();

   const bookBuilder = new BookBuilder();
   const book = bookBuilder.setId('1')
   .setBookTitle("The Great Gatsby")
   .setAuthor("F. Scott Fitzgerald")
   .setGenre("Fiction")
   .setFormat("Hardcover")
   .setLanguage("English")
   .setPublisher("Scribner")
   .setSpecialEdition("None")
   .setPackaging("Box")
   .setPrice(19.99)
   .setQuantity(1)
   .build();  

   const toyBuilder = new ToyBuilder();
   const toy = toyBuilder.setId("1").setAgeGroup("3-5")
   .setType("Action Figure").setBrand("LEGO")
   .setMaterial("Plastic").setBatteryRequired(false).setEducational(true).setPrice(15.99).setQuantity(1)
   .build()

   console.log(cake);
   console.log(book);
   console.log(toy);
   console.log("Cake ID: ", cake.getId());

   
}


main();

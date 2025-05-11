
import { ToyBuilder } from '../src/model/builders/toy.builder';
import { BookBuilder } from '../src/model/builders/book.builder';
import { CakeBuilder } from '../src/model/builders/cake.builder';

describe('ToyBuilder', () => {
    let Toybuilder: ToyBuilder;
    let Bookbuilder: BookBuilder;
    let cakebuilder: CakeBuilder;

    beforeEach(() => {
        Toybuilder = new ToyBuilder();
        Bookbuilder = new BookBuilder();
        cakebuilder = new CakeBuilder();

    });
    test ('should create a book with all properties', () => {
        const book = Bookbuilder
            .setId('B001')
            .setBookTitle('The Great Gatsby')
            .setAuthor('F. Scott Fitzgerald')
            .setGenre('Fiction')
            .setPublisher('Scribner')
            .setFormat('Hardcover')
            .setLanguage('English')
            .setSpecialEdition('First Edition')
            .setPackaging('Standard')
            .build();

            expect(book.getId()).toBe('B001');

    })
    test('should create a cake with all properties', () => {
        const cake = cakebuilder
            .setId('C001')
            .setType('Chocolate')
            .setFlavor('Vanilla')
            .setFilling('Cream')
            .setSize(5)
            .setLayers(3)
            .setFrostingType('Buttercream')
            .setFrostingFlavor('Chocolate')
            .setDecorationType('Flowers')
            .setDecorationColor('Pink')
            .setCustomMessage('Happy Birthday')
            .setShape('Round')
            .setAllergies('None')
            .setSpecialIngredients('Sprinkles')
            .setPackagingType('Box')
           
            .build();

        expect(cake.getId()).toBe('C001');
        expect(cake.getType()).toBe('Chocolate');
        expect(cake.getFlavor()).toBe('Vanilla');
        expect(cake.getFilling()).toBe('Cream');
        expect(cake.getSize()).toBe(5);
        expect(cake.getLayers()).toBe(3);
        expect(cake.getFrostingType()).toBe('Buttercream');
        expect(cake.getFrostingFlavor()).toBe('Chocolate');
        expect(cake.getDecorationType()).toBe('Flowers');
        expect(cake.getDecorationColor()).toBe('Pink');
        expect(cake.getCustomMessage()).toBe('Happy Birthday');
        expect(cake.getShape()).toBe('Round');
        expect(cake.getAllergies()).toBe('None');
        expect(cake.getSpecialIngredients()).toBe('Sprinkles');
        expect(cake.getPackagingType()).toBe('Box');
        
    });

    test('should throw error when building cake with missing property', () => {
        expect(() => {
            cakebuilder
            .setId('C001')
            .setType('Chocolate')
            .setFlavor('Vanilla')
            .build();
        }).toThrow('Required cake properties missing');
    });


    test('should create a complete toy with all properties', () => {
        const toy = Toybuilder
            .setId('T002')
            .setType('Electronic')
            .setAgeGroup('5-12')
            .setBrand('TechToys')
            .setMaterial('Plastic')
            .setBatteryRequired(true)
            .setEducational(true)
           
            .build();

            

        expect(toy.getId()).toBe('T002');
        expect(toy.getType()).toBe('Electronic');
        expect(toy.getAgeGroup()).toBe('5-12');
        expect(toy.getBrand()).toBe('TechToys');
        expect(toy.getMaterial()).toBe('Plastic');
        expect(toy.getBatteryRequired()).toBe(true);
        expect(toy.getEducational()).toBe(true);
       
    });

    test('should throw error when building toy with missing property', () => {
        expect(() => {
            Toybuilder
            .setId('T002')
            .setType('Electronic')
            .setAgeGroup('5-12')
            .setBrand('TechToys')
            .build();
        }).toThrow('Required properties missing');
    });

});


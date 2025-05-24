import { CSVCakeMapper } from '../src/mappers/Cake.mapper';
import { CSVOrderMapper } from '../src/mappers/OrderMapper';
import { JSONBookMapper } from '../src/mappers/book.mapper';
 import { XMLToyMapper } from '../src/mappers/toy.mapper';
describe('Mapper Tests', () => {
    describe('CSVCakeMapper', () => {
        let cakeMapper: CSVCakeMapper;
        let orderMapper: CSVOrderMapper;

        beforeEach(() => {
            cakeMapper = new CSVCakeMapper();
            orderMapper = new CSVOrderMapper(cakeMapper);
        });

        test('should map valid cake data correctly', () => {
            const input = {
                id: '0',
                Type: 'Sponge',
                Flavor: 'Vanilla',
                Filling: 'Cream',
                Size: '20',
                Layers: '2',
                'Frosting Type': 'Buttercream',
                'Frosting Flavor': 'Vanilla',
                'Decoration Type': 'Sprinkles',
                'Decoration Color': 'Multi-color',
                'Custom Message': 'Happy Birthday',
                Shape: 'Round',
                Allergies: 'Nut-Free',
                'Special Ingredients': 'Organic Ingredients',
                'Packaging Type': 'Standard Box',
                Price: '50',
                Quantity: '1'
            };
            const result = orderMapper.map(input);
            expect(result).toEqual({
                item: {
                    type: 'Sponge',
                    flavor: 'Vanilla',
                    price: 50
                },
                quantity: 1
            });
        });

        test('should handle missing fields', () => {
            const input = {
                Type: 'Sponge',
                Flavor: 'Vanilla'
            };
            expect(() => orderMapper.map(input)).toThrow();
        });
    });

      describe('JSONBookMapper', () => {
         let bookMapper: JSONBookMapper;
         let orderMapper: CSVOrderMapper;

         beforeEach(() => {
            bookMapper = new JSONBookMapper();
             orderMapper = new CSVOrderMapper(bookMapper);
        });

         test('should map valid book data correctly', () => {
             const input = {
                title: 'The Great Gatsby',
                price: 15.99,
                quantity: 1
            };
            const result = orderMapper.map(input);
            expect(result).toEqual({
                item: {
                 title: 'The Great Gatsby',
                 price: 15.99
             },
             quantity: 1
         });
     });

       
 });

 describe('XMLToyMapper', () => {
     let toyMapper: XMLToyMapper;
     let orderMapper: CSVOrderMapper;

     beforeEach(() => {
         toyMapper = new XMLToyMapper();
         orderMapper = new CSVOrderMapper(toyMapper);
     });

     test('should map valid toy data correctly', () => {
         const input = {
             toyName: 'Robot',
             toyPrice: '19.99',
             orderQuantity: '3'
         };
         const result = orderMapper.map(input);
         expect(result).toEqual({
             item: {
                 name: 'Robot',
                 price: 19.99
             },
             quantity: 3
         });
     });

     test('should handle incorrect data types', () => {
         const input = {
             toyName: 'Robot',
             toyPrice: 'invalid',
             orderQuantity: 'three'
         };
         expect(() => orderMapper.map(input)).toThrow();
     });
 });
 });
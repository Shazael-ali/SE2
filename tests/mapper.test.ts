import { CSVCakeMapper } from '../src/mappers/CakeMapper';
import { CSVOrderMapper } from '../src/mappers/OrderMapper';
import { JSONBookMapper } from '../src/mappers/BookMapper';
 import { XMLToyMapper } from '../src/mappers/toy.mapper';
describe('Mapper Tests', () => {
    describe('CSVCakeMapper', () => {
        let cakeMapper: CSVCakeMapper;
        let orderMapper: CSVOrderMapper;

        beforeEach(() => {
            cakeMapper = new CSVCakeMapper();
            
        });

        test('should map complex cake order correctly', () => {
               
                const input = [
               [   '98',
    'Red Velvet',
    'Strawberry',
    'Cream',
    '8',
    '3',
    'Ganache',
    'Chocolate',
    'Fruit Slices',
    'Red',
    'Best Wishes',
    'Rectangle',
    'Gluten-Free',
    'Organic',
    'Standard Box with Ribbon',
    '34',
    '5']
            ]
                 orderMapper = new CSVOrderMapper(cakeMapper);
                  const cakes= input.map((row)=>orderMapper.map(row));
                expect(cakes[0]).toEqual({
                    item: {
                        type: 'Red Velvet',
                        flavor: 'Strawberry',
                        filling: 'Cream',
                        size: 8,
                        layers: 3,
                        frostingType: 'Ganache',
                        frostingFlavor: 'Chocolate',
                        decorationType: 'Fruit Slices',
                        decorationColor: 'Red',
                        customMessage: 'Best Wishes',
                        shape: 'Rectangle',
                        allergies: 'Gluten-Free',
                        specialIngredients: 'Organic',
                        packagingType: 'Standard Box with Ribbon'
                    },
                    id: '98',
                    price: 34,
                    quantity: 5
                });
            });
        });
    describe('JSONBookMapper', () => {
        let bookMapper: JSONBookMapper;
        let orderMapper: CSVOrderMapper;

        beforeEach(() => {
            bookMapper = new JSONBookMapper();
            orderMapper = new CSVOrderMapper(bookMapper);
        });

        test('should map book order correctly', () => {
            const input = [
                 {
    'Order ID': '2099',
    'Book Title': 'The Forgotten Path',
    Author: 'Haruki Murakami',
    Genre: 'Young Adult',
    Format: 'E-Book',
    Language: 'Italian',
    Publisher: 'HarperCollins',
    'Special Edition': 'Illustrated Edition',
    Packaging: 'Luxury Box',
    Price: '75',
    Quantity: '1'
  },

            ];
            const books = input.map((row) => orderMapper.map(row));
            expect(books[0]).toEqual({
                item: {
                    bookTitle: 'The Forgotten Path',
                    author: 'Haruki Murakami',
                    genre: 'Young Adult',
                    format: 'E-Book',
                    language: 'Italian',
                    publisher: 'HarperCollins',
                    specialEdition: 'Illustrated Edition',
                    packaging: 'Luxury Box'
                },
                price: 75,
                quantity: 1,
                id: '2099'
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

      test('should map toy order correctly', () => {
          const input = [
              '456',
              'Robot Dragon',
              'Electronic',
              'Plastic',
              '12+',
              'Red',
              'Batteries Required',
              'Indoor',
              'Educational',
              'Medium',
              'Assembly Required',
              'CE Certified',
              'None',
              'Gift Box',
              '49.99',
              '3'
          ];
          const toys = input.map((row) => orderMapper.map(row));
          expect(toys[0]).toEqual({
              item: {
                  name: 'Robot Dragon',
                  type: 'Electronic',
                  material: 'Plastic',
                  ageGroup: '12+',
                  color: 'Red',
                  requirements: 'Batteries Required',
                  playEnvironment: 'Indoor',
                  category: 'Educational',
                  size: 'Medium',
                  assembly: 'Assembly Required',
                  safety: 'CE Certified',
                  warnings: 'None',
                  packaging: 'Gift Box'
              },
              id: '456',
              price: 49.99,
              quantity: 3
          });
      });
  });
      
    });


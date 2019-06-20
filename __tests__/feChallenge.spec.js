import * as api from '../src/api';
import { dataArrs } from '../testData';
import { config } from '../config';

const {mappedObjArray, moreNumbers, objArr, oneNumber, poem, simpleNumbers, splitArr} = dataArrs;
const {addIt, combineIt, splitIt, squareIt, isEven, isOdd, containsA} = config;

describe('The JavaScript 4 Breakfast Coding Challenge', () => {
    describe('🚛 Fanout', () => {
        it('Implements the function to each number in a given index', () => {
            const result = api.fanOut(simpleNumbers, squareIt);
            expect(result).toEqual([1, 4, 9]);
        });
        it('Handles one number in a given index', () => {
            const result = api.fanOut(oneNumber, squareIt);
            expect(result).toEqual([4]);
        });
        it('Handles several large numbers in a given index', () => {
            const result = api.fanOut(moreNumbers, squareIt);
            expect(result).toEqual([961, 121, 729]);
        });
        it('Handles Character Arrays', () => {
            const result = api.fanOut(poem, splitIt);
            expect(result).toEqual(splitArr);
        });
    });

    describe('⏳ Funnel', () => {
        it('Handles simple numbers', () => {
          const result = api.funnel(simpleNumbers, addIt, 0);
          expect(result).toEqual(6);
        });
        it('Handles one number', () => {
            var result = api.funnel(oneNumber, addIt, 0);
            expect(result).toEqual(-2);
        });
        it('Handles more numbers', () => {
           var result = api.funnel(moreNumbers, addIt, -47);
           expect(result).toEqual(0);
        });
        it('Handles and Combines words ', () => {
            var result = api.funnel(poem, combineIt, '');
            expect(result).toEqual('AdobeMakeItAnExperience')
        });
        it('Prevents insanity', () => {
            const addNumbers = (tot, num) => tot + num;
            const result = api.funnel([1,2,3], addNumbers, 94);
            expect(result).toEqual(100);
        });
    });

    describe('🚰 Distill', () => {
        it('Filters simple numbers', () => {
              var result = api.distill(simpleNumbers, isEven);
              expect(result).toEqual([2]);
        });
        it('Filters one odd number', () => {
            var result = api.distill(oneNumber, isOdd);

            expect(result).toEqual([]);
        });
        it('Filters more odd numbers', () => {
            var result = api.distill(moreNumbers, isOdd);
            expect(result).toEqual([31, -11, 27]);
        });
        it('Filters letters with A\'s', () => {
            var result = api.distill(poem, containsA);
            expect(result).toEqual(['Adobe', 'An']);
        });
    });

    describe('🧭 NumberOfCharacters', () => {
        it('Counts the number of characters in a given poem ', () => {
            const result = api.numberOfCharacters(poem);
            expect(result).toEqual(23);
        });
    });

    describe('🔮 NumberOfSpecialCharacters', () => {
        test('Countes the number of certain characters in a given poem', () => {
            const result = api.numberOfSpecialCharacters(poem, 'A');
            expect(result).toEqual(2);
        });
    });

    describe('🎰 GroupObjectsByProp', () => {
        test('Maps object by prop from data array', () => {
            const result = api.groupObjectsByProp(objArr, 'year');
            expect(result).toEqual(mappedObjArray);
        });
    });

});

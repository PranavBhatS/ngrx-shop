/* 
describe() -- suite - group of related tests.
it() -- define spec/test 

*/
import { compute } from './compute';

describe('compute', () => {
    it("should return zero if input zero", () => {
       const result = compute(-1);
       expect(result).toBe(0)
    })
    it("should return incremented value if input greater than zero", () => {
        const result = compute(1);
        expect(result).toBe(2)
    })
})
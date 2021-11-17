import { assert, expect } from "chai"
import {calculator} from "../app.js"

describe("Fields of negative tests for calculator function", function() {
        it("Should return Error('Wrong operation!') when function doesn't match correct operation", ()=>{
                assert.throws(()=> {calculator(3,3,'%')}, Error)
                expect(()=> {calculator(3,5,'!')}).to.throw('Wrong operation!');
        });
        it("Should return Error('Argument must be a number') when first or second argument is not a number", ()=>{
                assert.throws(() => {calculator('1',1, '+'), Error} )
                expect(()=> calculator('1',1, '+')).to.throw('Argument must be a number');
        });
       
        it("Should return Error('Zero division operation is not possible') when divide number to 0", ()=>{
              assert.throws(()=>{calculator(0, 0, '/')}, Error)
              expect(()=> calculator(0, 0, '/')).to.throw('Zero division operation is not possible');
        });
        it('Check incorect values',()=>{
                expect(calculator(0,0,'*')).to.not.eq(1);
                expect(calculator(1,2,'-')).to.not.eq(1);
                expect(calculator(5,5,'+')).to.not.eq(5);
                expect(calculator(0,2,'/')).to.not.eq(2);
        })
})
import { assert, expect } from "chai"
import {calculator} from "../app.js"

describe("Fields of positive tests for calculator function", function() {
        it('calculator function should return type number', ()=>{
            assert.typeOf(calculator(1,1,'+'), 'number');
        });
        it('Return 0 when divide 0 to another number', ()=>{
            assert.equal(calculator(0,5,'/'), 0);
            assert.equal(calculator(0,1,'/'), 0);
            assert.equal(calculator(0,-10,'/'), 0);
        })
        it('Expect 8 when adding 5 + 3', ()=>{
            expect(calculator(5,3,'+')).to.eq(8);
            expect(calculator(3,5,'+')).to.eq(8);
        });
        it('Expect -5 when subtraction 5 - 10', ()=>{
            expect(calculator(5,10,'-')).to.eq(-5);
        });
        it('Exect 100 when multiplication 10 * 10',()=>{
            expect(calculator(10,10,'*')).to.eq(100);
        })
        it('Expect 1.5 when divide 3 / 2', ()=>{
            expect(calculator(3,2,'/')).to.eq(1.5);
        });   
}) 
import { assert, expect } from "chai"
import {calculator} from "../app.js"

describe("Fields of positive tests for calculator function", function() {
        it('I expect 8 when adding 5 + 3', ()=>{
            expect(calculator(5,3,'+')).to.eq(8);
        });

        it('I expect 1.5 when divide 3 / 2', ()=>{
            expect(calculator(3,2,'/')).to.eq(1.5);
        });
        it('I expect -5 when subtraction 5 - 10', ()=>{
            expect(calculator(5,10,'-')).to.eq(-5);
        });
   
})
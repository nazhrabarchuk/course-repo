import { assert, expect } from "chai"
import {calculator} from "../app.js"

describe("Fields of negative tests for calculator function", function() {
        it("Should return Error('Wrong operation!') when function doesn't match correct operation", ()=>{
        assert.throws(()=> {calculator(3,3,'%')}, Error)
        });
   
})
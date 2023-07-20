import assert from "assert";
import greet from "../greet.js";
describe('greet function' , function (){
    it('should greet bob with "Hello, bob"' , function(){
        assert.equal ("Hello, bob", greet("bob")); 
    });
    
        it('should greet sam with "Hello, sam"' , function(){
            assert.equal ("Hello, sam", greet("sam"));
        });
});

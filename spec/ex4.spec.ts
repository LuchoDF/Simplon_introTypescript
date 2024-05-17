import {ex4} from "../ex4";

describe("Test exercise 4", function(){
    it("C'est correcte la phrase?",function(){
        const ex4phrase= ex4();
        let cadena: string[]= ["Je", "'aEe", "g"];
        expect(ex4phrase).toEqual(cadena);
    })
})
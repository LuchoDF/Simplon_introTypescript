import {ex3} from "../ex3";

describe ("Test exercise 3", function () {
    it ("C'est correcte la phrase?", function () {
        const ex3phrase = ex3();
        let cadena: string[]= ["Je","s'aPpElLe","gRoOt"]
        expect(ex3phrase).toEqual(cadena);
    })

})
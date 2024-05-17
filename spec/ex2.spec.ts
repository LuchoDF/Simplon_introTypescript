import {ex2} from "../ex2";

describe("Test exercice 2", function () {
    it("C'est correcte la phrase ?", function () {
        const expPhrase = ex2();
        expect(expPhrase).toBe("je m'appelle groot");
    }); 
});
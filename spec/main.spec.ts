import {getMyName, sayMyName} from "../main";

describe("Test exercice 1", function () {
    it("le prenom est bien marco ?", function () {
        let myName = getMyName();
        expect(myName).toBe("marco");
    });

    it("on dit bien le prenom ?", function () {
        // Espionner la fonction console.log
        spyOn(console, 'log');
        const expectedTxt = "Bonjour, je m'appelle john !";
        // recupere le texte de sayMyName
        const myName = sayMyName("john");
        expect(myName).toBe(expectedTxt);
        console.log(myName);
        // Vérifier si console.log a ete appele avec la bonne valeur
        expect(console.log).toHaveBeenCalledWith(expectedTxt);
    });    
});
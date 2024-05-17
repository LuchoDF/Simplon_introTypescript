/*Dans un nouveau fichier, dans une fonction, faites la même chose que précédemment, mais un caractère sur deux devra être en majuscules : 

Je s'aPpElLe gRoOt

Utilisez le débogage !

Créez un fichier de test pour tester cet exercice.*/

export function ex3(): string[]  {
    let phrase: string[] = ["je","s'appelle","groot"];
    let phraseJoin: string= phrase.join(" ");
    let phraseFinal: string="";
    for (let i=0; i<phraseJoin.length; i++) {
     phraseFinal += (i % 2 === 0) ? phraseJoin[i].toUpperCase() : phraseJoin[i].toLowerCase();
    
    }
    console.log(phraseFinal)
    return phraseFinal.split(" ");

}
let cadena: string[] = ex3()
console.log(cadena)
/*Dans un nouveau fichier, dans une fonction faites la même chose que précédemment, chaque caractère compte toujours mais si le caractère appartient à l’alphabet et vient après la lettre « j » dans l’alphabet (insensible à la casse), il n’est pas affiché.

Je 'aEe g

On voit ci-dessus que les lettres S/P/L/O/R/T ont été ignorées.
Les espaces et l’apostrophe ont été affichés car ils ne font pas partie de l’alphabet. 

Utilisez le débogage !

Créez un fichier de test pour tester cet exercice. */

export function ex4(): string []{
    let phrase: string[] = ["je","s'appelle","groot"];
    let phraseJoin: string= phrase.join(" ").toLowerCase();
    let phraseFinal: string="";
    for (let i=0; i<phraseJoin.length; i++) {
        if(phraseJoin.charCodeAt(i)<=106 || phraseFinal.charCodeAt(i)===32 ) {
            phraseFinal += (i % 2 === 0) ? phraseJoin[i].toUpperCase() : phraseJoin[i].toLowerCase();
        }
        else {
            phraseFinal += ""
        }
    }
    console.log(phraseFinal)
    return phraseFinal.split(" ");
   
   }
   let frase: string[] = ex4()
   console.log(frase)
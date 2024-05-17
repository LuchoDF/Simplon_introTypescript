/*Dans un nouveau fichier, dans une fonction, déclarez une variable groot de type tableau ayant pour valeur les chaînes « je », s’appelle », « groot ». Cette fonction renvoie le texte ci-dessous en se basant sur les valeurs du tableau : 

je s’appelle groot

Utilisez le débogage !

Créez un fichier de test pour tester cet exercice.*/

export function ex2(): string {
    let groot: string[]= ["je","s'appelle","groot"]
    
    return groot[0]+ " "+ groot[1]+" "+ groot[2];
}

let frase=ex2();

console.log(frase);



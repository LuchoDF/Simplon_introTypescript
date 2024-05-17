console.log("coucou");

export function getMyName(): string {
    return "marco";
}

export function sayMyName(nombre: string): string{
    return "Bonjour, je m'appelle "+ nombre+" !"
}

var nombre: string= "";
var cadena: string= "";
nombre=getMyName()
cadena=sayMyName("marco");
console.log(nombre);
console.log(cadena);


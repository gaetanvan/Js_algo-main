
// https://developer.mozilla.org/fr/docs/Web/JavaScript

// un commentaire sur une seule ligne

/* 
    un commentaire sur plusieurs lignes
    un commentaire sur plusieurs lignes
    un commentaire sur plusieurs lignes
*/

/**
 * Documentation JS doc
 * @param {string} name - Nom de la personne
 * @param {number} age - Age de la personne
 */

function Person(name, age) {}
Person("Enis", 22);


console.log("hello world");
console.error("attention, il y a une erreur");
console.warn("attention, il y a un warning");

// Déclaration d'une variable
const taux = 1.2;
const fruits = ['fraise', 'pomme', 'orange'];
console.table(fruits);

function ttc(priceht) {
    return priceht * taux
}

// console.log(taux)
ttc(20);


// Types de variables

/* string
 * boolean
 * number
 * array
 * object
 * undefined
 * null
 */

console.log(typeof taux);

const apprenant = {
    prenom : "Enis",
    nom : "Mermer",
    age : 22,
    stack : ['html', 'css', 'js', 'php'],
    is_admin : false,
};
console.log(apprenant);

apprenant.sexe = "male"
delete apprenant.age;
console.log(apprenant);

// function

// function sayHello(name) {
//     console.log(`Bonjour je m'appelle "${name}"`);
// }



const sayHello = (name) => {
    console.log(`Bonjour je m'appelle "${name}"`);
};

sayHello("enis");

// boucles

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

apprenant.stack.forEach((toto) => {
    if (toto !== 'php') {
        console.log('dommage pas de php');
    } else {
        console.log("super je t'engage en php")
    }
    if (toto === 'js') {
        console.log("super je t'engage mon pote")
    }
    console.log(toto);
});
/** ======================
 * Recap JavaScript
 **========================/

/**
 * Variables
 */
// On commence par une lettre ou "_" + Notation camel

// On peut utiliser le mot clé "var"
var leNomDeVariable = 'Hello';

// On préférera le mot clé "let"
let uneAutreVariable = '';

/**
 * Une constante permet de stocker une valeur qui ne varie 
 * pas dans le script
 */
const uneVariableImmuable = 'https://api.oclock.io';
const pi = 3.14;

/**
 * Types
 */

// String
let maChaine = 'Je suis un chaine de caractère';
let uneAutreChaine = "En double quotes";

// Number : inclut les entiers naturels et les nombres à virgules
let uneValeurNumerique = 2;
let uneAutreValeurNumerique = 1.5;


// Booléen
let isConnected = true;
let isGood = false;

// Tableaux : une liste ordonnées d'éléments

let maListe = ["Hello", 2, true, [1, 2, 3]];
// Je veux accéder au premier élément
console.log(maListe[0]); // Retourne "Hello"

// Objets : équivalent des tableaux associatifs en PHP

// Le mot clé "debugger" permet de bloquer le script à partir de
// l'endroit ou il est appelé : point d'arrêt (breakpoint)
// Pour avancer dans le debugger : F10
// debugger;

let monObjet = {
    'firstname': 'Charles',
    "name": "EDOU NZE",
    city: 'Troyes',
    isConnected: true
};


// Accéder un élément de mon objet
console.log(monObjet.firstname); // Renvoie "Charles"
console.log(monObjet['name']); // Renvoie "EDOU NZE"

let maCle = 'isConnected';
// monObjet[maCle] ==> monObjet['isConnected']
console.log(monObjet[maCle]); // true


/**
 * Structure/ Conditions : if, for, ...
 */

// if..else
if (monObjet.firstname) {
    // Je suis là
    console.log("Je m'appelle", monObjet.firstname);
} else {
    console.log('Clé inexistante');
}

// for...
for (let index = 0; index < 5; index++) {
    console.log(index); // 0, 1, 2...4
}

// for...in
let listNumber = ["Zero", "Un", "Deux", true];
for (let indexNumber in listNumber) {
    console.log(indexNumber) // 0...1...2...3
    console.log(listNumber[indexNumber]) // "Zero"... "Un"..."Deux"...true
}


/**
 * Comparaisons
 */
// Egal simple : on teste la valeur
if (2 == "2") {
    console.log('Vrai');
}

// Egal stricte : on teste la valeur et le type
// 2 === "2" // Faux
if (2 === "2") {
    console.log('Vrai');
} else {
    console.log('Faux');
}
// Vrai
if (2 === 2) {
    console.log('Vrai');
}
// Vrai
if ("3" === "3") {
    console.log('Vrai');
}


/**
 * Fonctions
 */
function hasHello(param) {
    // Une fonction retourne une valeur, et non une variable
    if (param == 'hello') {
        return true;
    } else {
        return false;
    }
}

let isHello = hasHello('hello'); // La fonction renvoie true
console.log(isHello); // la variable contient la valeur true

/**
 * Modules
 */

let app = {
    // Propriété : équivalent de variables. On va y stocker de l'information
    result: null,

    // Méthodes
    init: function() {
        // Cette méthode va venir initialiser notre module
        console.log('Démarrage du module...');

        // app.result : true
        app.result = app.hasHello('hello');
    },

    hasHello: function(param) {
        if (param == 'hello') {
            return true;
        } else {
            return false;
        }
    },

    checkResult: function() {
        // On a accès à toutes les propriétés du module
        // La méthode sait automatiquement que 
        // la propriété "result" est passée de "false" à "true"
        return app.result;
    }
};

// Pour démarrer le module, j'appuie sur le bouton "play" (init)
app.init();


/**
 * DOM
 */


/**
 * Evenements
 */
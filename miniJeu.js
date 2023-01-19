/**
 * développer une logique de développeur - algo
 * 1 en pseudo code pour commencer
 * 2 ensuite en langage informatique
 *
 * l'ordinateur va choisir un nombre au hasard entre x et x.
 * Vous avez x essaies pour le trouver
 * Déclarer une variable de configuration de jeu
 * si la réponse est exact, alors on affiche dans la console un message élogieux avec l'affichage du nombre mystère et le nombre d'essai utilisé
 * sinon on affiche un message pour recommancer et on affiche le résultat
 * La fonction qui lance l'app doit avoir un paramètre pour choisir la difficulté (noob, beginner, hard, Hell)
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math
 */


// Configurer (n) les niveaux de difficulté
// Il faut 3 paramètres (un nombre de départ / un nombre de fin / un nombre d'essais)

const level = {
    noob: {
        name : 'noob',
        startNumber : 1,
        endNumber : 10,
        attempt : 5,
    },
    beginner: {
        name : 'beginner',
        startNumber : 1,
        endNumber : 20,
        attempt : 3,
    },
    hard: {
        name : 'hard',
        startNumber : 1,
        endNumber : 50,
        attempt : 2,
    },
    hell: {
        name : 'hell',
        startNumber : 1,
        endNumber : 100,
        attempt : 1,
    }
}
// console.log(level.hell)

// générer un nombre au hasard selon le niveau de difficulté choisi


function getRandomNumber(level) {
    const randomNumber = Math.floor(
            Math.random() * (level.endNumber - level.startNumber) +
                level.startNumber
    );
    return randomNumber;
} 

function run(level) {
    const randomNumber = getRandomNumber(level); 
    // playedNumbers généré par défault en fonction du level
    const playedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    playedNumbers.length = level.attempt;
    
    playedNumbers.forEach((number, index) => {
        let attempt = index > 0 ? "essais" : "essai";
        if (number == randomNumber) {
            console.log(`vous êtes le meilleur et vous avez gagné en ${index + 1} ${attempt}`
        );
        } else {
            console.log("Dommage");
        }
    });
    
    run(level.noob);
}  
    
// console.log(randomNumber);

// Proposer un nombre par essai selon le niveau de difficulté choisi

// console.log(playedNumbers);

// Comparer le nombre proposé avec le nombre généré

// Afficher un message avec le nombre d'essais, le nombre mystère, réessayer

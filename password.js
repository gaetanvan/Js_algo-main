/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimium 1 majuscule, 1 caractère spécial & 1 nombre
 */

// créer un tableau de caractères

const chars = "abcdefghijklmnopqrstuvwxyz";
const charsUpper = chars.toUpperCase();
const numbers = "0123456789";
const charsSpecial = ",;:!/.?%*@";

const all = [chars, charsUpper, numbers, charsSpecial];

// récupérer 8 caractères de manière aléatoire
let password = "";
password += chars[Math.floor(Math.random() * chars.length)]
password += charsUpper[Math.floor(Math.random() * charsUpper.length)]
password += numbers[Math.floor(Math.random() * numbers.length)]
password += charsSpecial[Math.floor(Math.random() * charsSpecial.length)]
console.log(password);

function charsRandom(all, lengthPassword) {
    for (let i = 4; i <= lengthPassword; i++) {
        let groupRandom = all[Math.floor(Math.random() * all.length)]
        let randomChar = groupRandom[Math.floor(Math.random() * groupRandom.length)]
        password += randomChar
}
    return password
}

// Mélanger le mot de passe de façon aléatoire
function shuffle (password) {
    let passwordTable = password.split("")
    let stringLength = passwordTable.length;

    for(let i = stringLength - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let newPassword = passwordTable[i];
        passwordTable[i] = passwordTable[random];
        passwordTable[random] = newPassword;
    }
    return passwordTable.join("");
}


// afficher le mot de passe
console.log(shuffle(charsRandom(all, 9)));

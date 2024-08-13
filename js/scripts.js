// alert('salut JS');
// commenter
// console.log("Coucou");
// Kamel case
let maSuperVariable = "hello";
// console.log(variable);
// une variable est unespace de stockage une boite avec un nom
// **les variables**
// var =vieux JS
// var unTexte = "voici un texte";
// console.log("unTexte");
const prenom = "justine";
console.log(prenom);
// const=constante
// let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;
console.log(unChiffre);
let chaine = "je suis une l'une chaine de caractères";
let nouvelleChaine = "chaine precedente :" + chaine;
console.log(nouvelleChaine);

//** type de donnes*//
let string = "je suis unechaines de caracteres";
let number = 24;
let boolean = false;
// tableau :il y a des crochets
let array = ["je", "suis", 47, true];
// objet :accolades {}
let object = {
  prenom: "audrey",
  age: 34,
  ville: "bordeaux",
};
let arbre;

arbre = "sapin";
console.log(arbre);
//** les operateurs  */
console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
console.log(4 ** 5);
//** Operateurs d'affcetactions */
let total = 0;
// total = total + 1;
total++;

total += 5;
total -= 4;
total *= 2;
total += 6;
// total--
console.log(total);
// structures des controles
let x = 2;
let y = 3;

// if (x > y) {
//   alert("yes x plus gros que y");
// } else if (y > x) {
//   alert("Y plus grand");
// } else {
//   alert("ILS SONT EGAUX");
// }
// on teste si lavaleur est true
if (x) {
  console.log("x existe !");
}
// teste egalite
if (x === y) {
  // console.log("ils sont egaux");
} else {
  // console.log("pas egaux!");
}
let a = 2;
let b = 3;

//** tester l'egalité de valeur sa prendre en compte letype */
if (a == b) {
  // console.log("ils sont egaux");
} else {
  console.log("pas egaux!");
}
// || ou
// && et
if (x < y || x > 1) {
  console.log("OUI");
}

if (x < y && x > 1) {
  console.log("UI");
}

// fonction classique à l'ancienne
function faireQuelquesChose() {
  console.log("je fais untruc");
  // console.log(5 + 6);
  alert("Calcule terminé !");
}

// il faut imperativement appeler la fonction pour qu'elle se joue
// aapel de la fonction :faireQuelquesChose();

// fonction flèchée
const addition = (a, b) => {
  // console.log(a + b);
};

addition(4, 3);
addition(432, 578897);

// la portée des variables
//**go */
function add2() {
  let a = 4;
  // return a + 2;
  console.log(a + 2);
}

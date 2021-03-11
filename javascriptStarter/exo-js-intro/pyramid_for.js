
/*for (let i = 1; i <= 5; ++i) {
  console.log(i = `*`);
}*/

const SYMBOLE = "*";
const RETOUR_LIGNE = "\n";
let nbLignes = 5;
let strTriangle = "";

for (let i = 1; i <= nbLignes; i++) {
  strTriangle += SYMBOLE.repeat(i) + RETOUR_LIGNE;
}
console.log(strTriangle);

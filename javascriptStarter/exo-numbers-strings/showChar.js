let txt = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`
console.log(`Le livre est intitulé Salammbô \n
  Son auteur est Flaubert Gustave \n
  Le nombre de caractères que contient cette phrase est de ${txt.length} \n`);
for (let i = 0; i < txt.length; i++) {
  console.log(`Le caractère ${txt[i]} est à l’index ${i}`);
}

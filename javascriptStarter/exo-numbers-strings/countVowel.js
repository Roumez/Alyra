let txt = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée. \n`
txt = txt.toLowerCase()
console.log(txt);

let a = 0
let e = 0
let i = 0
let o = 0
let u = 0
let y = 0

for (let index = 0; index < txt.length; index++) {
  if (
    txt[index] === 'e' ||
    txt[index] === 'é' ||
    txt[index] === 'è' ||
    txt[index] === 'ê'
  ) {
    e++
  } else if (txt[index] === 'a') {
    a++
  } else if (txt[index] === 'i') {
    i++
  } else if (txt[index] === 'o') {
    o++
  } else if (txt[index] === 'u') {
    u++
  } else if (txt[index] === 'y') {
    y++
  }
}

console.log(`Le nombre de voyelles a est de ${a}`)
console.log(`Le nombre de voyelles e est de ${e}`)
console.log(`Le nombre de voyelles i est de ${i}`)
console.log(`Le nombre de voyelles o est de ${o}`)
console.log(`Le nombre de voyelles u est de ${u}`)
console.log(`Le nombre de voyelles y est de ${y}`)